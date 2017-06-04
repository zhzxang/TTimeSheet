import { combineReducers } from 'redux';
import projects from './projects';
import events from './events';
import current_data from './current_data';

const reducers = combineReducers({
  projects,
  events,
  current_data,
})

export default reducers;