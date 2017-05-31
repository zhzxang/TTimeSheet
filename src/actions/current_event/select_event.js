const select_event = (ev)=>{
  return {
    type:'SELECT_EVENT',
    id: ev.project_id,
    data:ev
  }
}

export default select_event;