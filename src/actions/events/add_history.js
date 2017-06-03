const add_history = (id,obj)=>{
  return {
    type:'ADD_HISTORY',
    id:id,
    data: obj
  }
}

export default add_history;