
const config = (function(){
  const draw=[ '#0A4958', '#01B6AD' , '#F6E7D2' , '#FFFFFF' ];
  function _setBlack(){
    this.draw=['#000','#040404','#000','#FFFFFF'];
  }
  function _setBlue(){
    this.draw=['#70c1b3','#247ba0','#b2dbbf','#FFFFFF'];
  }
  function _setRed(){
    this.draw=['#CED3DC','#A31621','#4E8098','#FCF7F8'];
  }

  return {
    draw: draw,
    setBlack:_setBlack,
    setBlue: _setBlue,
    setRed: _setRed
  }
})();

export default config;