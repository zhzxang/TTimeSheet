const edit_event = (id,obj)=>{
  return {
    type:'EDIT_EVENT',
    id:id,
    data: obj
  }
}

export default edit_event;