import { combineReducers } from 'redux';
import projects from './projects';
import current_event from './current_event';
import events from './events';
import current_data from './current_data';

const reducers = combineReducers({
  current_event,
  projects,
  events,
  current_data,
})

export default reducers;