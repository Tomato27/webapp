const myBirthTime = new Date(1998, 2, 7, 12, 00);
function updateParagraph(){
  var now = new Date();
  var seconds = ((now.getTime() - myBirthTime.getTime()) / 1000).toFixed(3);
  //.toFix()で小数点以下の桁数を固定
  document.getElementById('birth-time').innerText = '生まれてから' + seconds + '秒経過。';
  //getElementById()でHTMLのbirth-time要素に対して操作
}

  setInterval(updateParagraph, 10);