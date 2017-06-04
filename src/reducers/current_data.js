const current_data =(state = {}, action)=> {
  switch (action.type) {
    case 'SET_CURRENT_DATA':
    console.log(action)
      return Object.assign({},state,action.data)
    case 'REMOVE_CURRENT_DATA':
      delete state[action.key]
      return Object.assign({},state);
    case 'DELETE_PROJECT':
      var data={};
      if(state.project_id === action.id){
        data={
          project_id: '',
          event_id:'',
          project_name: '',
          event_name: ''
        }
      }
      return Object.assign({},state,data);
    case 'CLEAR_ALL':
      return {}
    default:
      return state
  }
}


export default current_data;