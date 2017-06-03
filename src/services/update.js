const update =(function(){
  const _updateArr = [];
  const _updateObj = {};

  function _register(fn,name){
    if(name){
      _updateObj.name = fn;
    }
    else{
      _updateArr.push(fn);
    }
  }
  function _start(name){
    if(name){
      _updateObj[name].call(this);
    }else{
      _updateStore.forEach((u)=>u.call(this))
    }
  }
  return {
    register: _register,
    start: _start,
  }
})();

export default update;