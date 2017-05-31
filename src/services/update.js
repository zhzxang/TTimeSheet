const update = Update();

function Update(){
  const _updateStore = [];

  function _register(fn){
    _updateStore.push(fn);
  }
  function _start(){
    _updateStore.forEach((u)=>u.call(this))
  }
  return {
    register: _register,
    start: _start,
  }
}

export default update;