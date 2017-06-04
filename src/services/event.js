import edit_event from '../actions/events/edit_event';
import add_history from '../actions/events/add_history';
const ev = (function(){

  const _createEvent = (name,pro_id)=>new Event(name,pro_id);

  function Event(name,pro_id){
    this.name=name;
    this.create_time = new Date().Format('yyyy-MM-dd-hh-mm-ss');
    this.start_time = "";
    this.stop_time = "";
    this.history=[];
    this.count_time={
      d:0,
      h:0,
      m:0,
      s:0
    };
    this.run_state= false;
    this.project_id = pro_id;
    this.id = 'ev'+Date.parse(new Date());
    this.content ="";
    this.complete = false;
  }

  function _caculateTime(ev){
    const time_count = {h:0,m:0,s:0};
    ev.history.forEach(item=>{
      const one = _reduceTime(item.start_time,item.stop_time);
      for(var key in time_count){
        time_count[key] = time_count[key]+one[key];
      }
    });
    if(ev.run_state){
      const now = new Date().Format('yyyy-MM-dd-hh-mm-ss');
      const one = _reduceTime(ev.start_time,now);
      for(var key in time_count){
        time_count[key] = time_count[key]+one[key];
      }
    }
    checkTime(time_count);
    return time_count;
  }
  function _reduceTime(time1,time2){
    let time2_year = time2.substring(0,4);
    let time2_month = time2.substring(5,7);
    let time2_day = time2.substring(8,10);
    let time2_hour = time2.substring(11,13);
    let time2_minute = time2.substring(14,16);
    let time2_second = time2.substring(17,19);

    let time1_year = time1.substring(0,4);
    let time1_month = time1.substring(5,7);
    let time1_day = time1.substring(8,10);
    let time1_hour = time1.substring(11,13);
    let time1_minute = time1.substring(14,16);
    let time1_second = time1.substring(17,19);
    var total_day = 0;
    if(time2_year>time1_year){
      const extra_month = time2_month+12-time1_month;
      for(var i = 0; i<extra_month; i++){
        const month_c = (time1_month+i)%12;
        const year = time1_year+parseInt((time1_month+i)/12);
        total_day = monthDay(month_c,year)+total_day;
      }
      total_day = total_day + time2_day - time1_day;
    }
    else if(time2_year===time1_year&&time2_month>time1_month){
      const extra_month = time2_month-time1_month;
      const use_year = time1_year;
      for(var i = 0 ; i< extra_month ; i++){
        const month_c = time1_month+ i;
        total_day = monthDay(month_c,use_year)+total_day;
      }
      total_day = total_day + time2_day - time1_day;
    }
    else {
      total_day = time2_day - time1_day;
    }
    var d = total_day;
    var h = d*24,m = 0,s = 0;
    // console.log('11111111111111',d,h,m,s);
    // console.log('time2_hour',time2_hour,'     ','time1_hour',time1_hour);
    // console.log('time2_minute',time2_minute,'     ','time1_minute',time1_minute);
    // console.log('time2_second',time2_second,'     ','time1_second', time1_second);
    // console.log( '09'-6);

    const h_cha = time2_hour - time1_hour;
    h = h + h_cha;
    const m_cha = time2_minute - time1_minute;
    if(m_cha<0){
      h = h-1;
      m = 60 + m_cha;
    }else{
      m = m_cha;
    }
    const s_cha = time2_second - time1_second;
    if(s_cha<0){
      m = m-1;
      s = 60 + s_cha;
    }else{
      s = s_cha;
    }

    // console.log('2222222222222222',h,m,s)
    const result = {
      h: h,
      m:m,
      s:s
    };
    checkTime(result);
    // console.log('33333333333333333',result);
    return result;
  }
  const is4Year = year=>{
    if(year%4===0){
      return true
    }else{
      return false
    }
  }
  const monthDay = (year,month)=>{
    let month_31 = [1,3,5,7,8,10,12];
    let month_30 = [4,6,9,11];
    if(month === 2){
      if(is4Year(year)){
        return 29;
      }else{
        return 28;
      }
    }
    month_31.forEach(m=>{
      if(m === month)
        return 31;
    });
    month_30.forEach(m=>{
      if(m === month){
        return 30;
      }
    })
  }

  function _formatTime(time){
    if(typeof time === 'number'){
      if(time<10){
        return '0'+time
      }else{
        return time
      }
    }else{
      return time;
    }
  }

  var time_start_count;
  function _start(ev,dispatch){
    const count_time = Object.assign({},ev.count_time);
    console.log('_start',count_time,edit_event);
    time_start_count = setInterval(function(){
      count_time.s++;
      checkTime(count_time);
      dispatch(edit_event(ev.id,{count_time:count_time}))
    },1000);
    dispatch(edit_event(ev.id,{start_time: new Date().Format('yyyy-MM-dd-hh-mm-ss')}))
    dispatch(edit_event(ev.id,{run_state: true}))
  }

  function _stop(ev,dispatch){
    if(time_start_count){
      clearInterval(time_start_count);
    }
    console.log('_stop',ev)
    dispatch(add_history(ev.id,{
      start_time:ev.start_time,
      stop_time: new Date().Format('yyyy-MM-dd-hh-mm-ss')
    }))
    dispatch(edit_event(ev.id,{run_state: false}))
  }

  function _updateTime(ev,dispatch){
    const count_time = _caculateTime(ev);
    time_start_count = setInterval(function(){
      count_time.s++;
      checkTime(count_time);
      dispatch(edit_event(ev.id,{count_time:count_time}));
    },1000);
  }

  function _clear(){
    if(time_start_count){
      clearInterval(time_start_count);
    }
  }

  function checkTime(time){
    if(time.s>=60){
      time.m++;
      time.s = time.s-60;
    }
    if(time.m>=60){
      time.h++;
      time.m = time.m - 60;
    }
    if(time.s>=60 || time.m >= 60){
      checkTime(time);
    }
  }

  return {
    createEvent: _createEvent,
    caculateTime: _caculateTime,
    format: _formatTime,
    start: _start,
    stop: _stop,
    updateTime:_updateTime,
    clear:_clear
  }
})()

export default ev;