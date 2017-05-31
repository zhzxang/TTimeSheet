const create_project = (name,startDate,context)=>{
  return {
    type:'CREATE_PROJECT',
    data:{
      name: name,
      date: startDate,
      context: context,
      events:[],
      id: name+Date.parse(new Date())
    }
  }
}

export default create_project;