export const getType = ({ router }) => router.type;

export const getParam = ({ router }, key) => router.params[key];
