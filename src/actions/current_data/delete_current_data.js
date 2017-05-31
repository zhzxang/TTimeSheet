const delete_current_data = (key)=>{
  return {
    type:'REMOVE_CURRENT_DATA',
    key: key
  }
}

export default delete_current_data;