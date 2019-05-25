import { combineReducers } from 'redux';

import layout from '../components/Layout/LayoutState';
import login from '../pages/login/LoginState';
import company from '../pages/company/CompanyState';

export default combineReducers({
  layout,
  login,
  company,
});