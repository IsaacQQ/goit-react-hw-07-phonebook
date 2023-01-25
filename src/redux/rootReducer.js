import { combineReducers } from 'redux';

import contactReducer from './contacts/contact-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

export default rootReducer;