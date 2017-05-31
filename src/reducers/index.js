import { combineReducers } from 'redux';
import projects from './projects';
import current_event from './current_event';
import events from './events';

const reducers = combineReducers({
  current_event,
  projects,
  events
})

export default reducers;