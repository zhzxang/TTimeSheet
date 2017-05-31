import ev from '../../services/event';

const create_event = (name,pro_id)=>{
  let e = ev.createEvent(name,pro_id);
  console.log('11111',e);
  return {
    type:'CREATE_EVENT',
    id: pro_id,
    data:e
  }
}

export default create_event;