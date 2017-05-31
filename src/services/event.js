const _createEvent = (name,pro_id)=>new Event(name,pro_id);

function Event(name,pro_id){
  this.name=name;
  this.create_time = new Date().Format('yyyy-MM-dd-hh-mm-ss');
  this.start_time = "";
  this.stop_time = "";
  this.history=[];
  this.run_state= false;
  this.project_id = pro_id;
  this.id = 'ev'+Date.parse(new Date());
}
function _caculateTime(ev){
  const start = ev?ev.start_time.filter((t)=>{
    return t!==' '
  }):false;
  const stop = ev?ev.stop_time:false;
  const time={h:0,m:0,s:0};
  if(ev&&!ev.run_state&&!ev.start_time){
    return time
  }else if(ev&&ev.run_state){
    return false
  }
}

const ev ={
  createEvent: _createEvent,
  caculateTime: _caculateTime
}

export default ev;