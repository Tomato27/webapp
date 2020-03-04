var game = {
  startTime: null,
  displayArea: document.getElementById('display-area')
};
var hide_flag = 0;

function start() {
  game.startTime = Date.now();
  
  //document.body.onkeypress = stop;
}

function count() {
  var now = Date.now();
  var seconds = ((now - game.startTime) / 1000).toFixed(3);
  
  //while(!document.body.onkeypress){
  if(hide_flag==0){
    game.displayArea.innerText = seconds + '秒経過。';
    document.body.onkeypress = stop;
  }
  //}
    //return seconds;
}

function display(sec){
  game.displayArea.innerText = sec + '秒経過。';
}

function stop() {
  //clearInterval(count);
  if(hide_flag==0){
    var currentTime = Date.now();
    var seconds = (currentTime - game.startTime) / 1000;
    if (9.5 <= seconds && seconds <= 10.5) {
      game.displayArea.innerText = seconds + '秒でした。すごい！';
      //javascript_die();
    } else {
      game.displayArea.innerText = seconds + '秒でした。残念。';
      //javascript_die();
    }
    //console.log("fin");
  }
  hide_flag=1;
  //return;
}

if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
  start();

  /*var hide_flag = 0;
  function flagp(){
    hide_flag = 1;
  }*/
  var displayTime = setInterval(function(){
    count();
    //document.body.onkeypress = flagp;//hide_flag=1;
    if(hide_flag>0){
      clearInterval(displayTime);
      //return false;
    }
  }, 10);
  //return false;
}