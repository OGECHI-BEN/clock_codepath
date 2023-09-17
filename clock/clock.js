// const employees = ['Obinna','alex','Mubarak','Atiku','Osibanjo','Buhari','Edet']
// let text ='Hello';
// for(let values in employees ){
//     console.log( text +' '+ employees[values]);
// }

// const workers=['Obinna','alex','Mubarak','Atiku','Osibanjo','Buhari','Edet']
// let text_= 'HELLO ';
// for (let value of workers){
//   console.log (text_ + value);
// }

setInterval(myTime, 1000);
function myTime(){
  let time = new Date ();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm ="AM";
  if (hour>= 12){
    if(hour >12)
   hour-=12;
  am_pm="PM";
}else if (hour == 0){
  hr=12;
  am_pm ="AM";
}
 hour =
  hour < 10
      ? '0' + hour
      :hour;
 min =
  min < 10
      ? '0' + min
      :min;
 sec =
  sec < 10
      ? "0" + sec
      :sec;

let currentTime = hour + ':' + min + ':'+ sec + am_pm;


document.getElementById("clock").innerHTML = currentTime;
}

myTime();

  
 

















