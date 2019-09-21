import { useSelector } from 'react-redux';

import { getType } from '/redux/router/selectors';

export const useType = () => useSelector(getType);
