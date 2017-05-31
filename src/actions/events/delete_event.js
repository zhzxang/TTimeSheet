const delete_event = (ev_id)=>{
  return {
    type:'DELETE_EVENT',
    id:ev_id
  }
}

export default delete_event;