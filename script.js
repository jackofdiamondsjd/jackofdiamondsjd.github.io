//real time in the site
//get the container of time
//how to get the real time
//apply the actual time to the container
function=getCurrentTime();{
var realtime=document.querySelector('.time');
  var a=time.getDate();
  var b=time.getMonth()+1;
  if (b<10) {b="0"+b}
  var c=time.getFullYear();
  var d=time.getHours();
  var e=time.getMinutes();
  var fulltime= a+'/'+b+'/'+c+' '+d+':'+e+'pm'+' NYC';}
realtime.innerText=fulltime;
console.log(realtime);
console.log(fulltime);
//function getCurrentTime(){
//  var a=time.getDate();
//  var b=time.getMonth()+1;
//  if (b<10) {b="0"+b}
//  var c=time.getFullYear();
//  var d=time.getHours();
//  var e=time.getMinutes();
//  var fulltime= a+'/'+b+'/'+c+' '+d+':'+e+'pm'+' NYC';}
   //return fulltime;
   //console.log(getCurrentTime());
   //getCurrentTime();
