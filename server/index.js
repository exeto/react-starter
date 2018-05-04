import path from 'path';
import Koa from 'koa';
import views from 'koa-ejs';
import serve from 'koa-static';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Root from '@/components/Root';
import createStore from './createStore';
import assets from '../tmp/assets.json';

const app = new Koa();

views(app, {
  root: './server',
  layout: false,
  viewExt: 'ejs',
  cache: false,
});

app.use(serve(path.resolve(__dirname, '../buildClient')));

app.use(async ctx => {
  if (ctx.method !== 'GET') {
    ctx.status = 405;

    return;
  }

  const store = await createStore(ctx);
  const html = renderToString(<Root store={store} />);
  const preloadedState = store.getState();

  await ctx.render('template', { assets, data: { html, preloadedState } });
});

app.listen(3000, err => {
  if (err) {
    console.error(err);

    return;
  }

  console.log('==> 🌎  Server running at http://localhost:3000');
});
