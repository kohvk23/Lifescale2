let cx, cy; // 円形時計の中心(キャンバスセンター)
let w = 1400;
let s = 0;
let e = 1400;
let ts = 10;
let sw = 5;

let number = ['0','1', '2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60'];

function setup() {
  createCanvas(1600, 800);
  x = 100;
  y = 385;
  strokeCap(SQUARE);　//線の端を直角
  textAlign(CENTER);
  

  
}

function draw() {
  background(255);
  
  drawTime();
  drawSecHand(); 
  drawMinHand();
  drawHourHand();
  drawDayHand();
  drawMonthHand();
  drawIndex();
  drawIndex2();
  drawIndex3();
  drawIndex4();
  drawIndex5();
  drawIndex6();
  drawYearHand();
  
  
}

function drawTime() {
  textSize(20);
  textFont('Helvetica');
  text("life", 50, 170);
  text("year", 50, 270);
  text("month", 50, 370);
  text("day", 50, 470);
  text("hour", 50, 570);
  text("minute", 50, 670);
  
}



function drawIndex() {
  fill(0);
  strokeWeight(1);
  let count = 0;
  for(let i = 0; i <= 60; i += 1){
    const tx = x + (w/60)*i
    const ty = 650
    textSize(ts);
    text(number[count],tx,ty);
    const ly = ty + 15
    line(tx, ty+5, tx, ly);
    line(tx, ly, x + (w/60), ly )
    count++;
  }
}
function drawSecHand() {
  let ms = map(second(), 0, 60, s, e);
        strokeWeight(sw);
        line(x, 665, x + ms , 665 );
}



function drawIndex2() {
  fill(0);
  let count = 0;
  for(let i = 0; i <= 60; i += 1){
    const tx = x + (w/60)*i
    const ty = 550;
    textSize(ts);
    text(number[count],tx,ty);
    const ly = ty + 15
    line(tx, ty+5, tx, ly);
    line(tx, ly, x + (w/60), ly )
    count++;
  }
} 
function drawMinHand() {
    const mm = map(minute() + norm(second(), 0, 60), 0, 60, s, e);
    strokeWeight(sw); 
    line(x, 565, x + mm, 565);
}



function drawIndex3() {
  fill(0);
  let count = 0;
  for(let i = 0; i <= 24; i += 1){
    const tx = x + (w/24)*i
    const ty = 450
    textSize(ts);
    text(number[count],tx,ty);
    const ly = ty + 15
    line(tx, ty+5, tx, ly);
    line(tx, ly, x + (w/24), ly )
    count++;
  }
}
function drawHourHand() {
    const mh = map(hour() + norm(minute(), 0, 60), 0, 24, s, e);
    strokeWeight(sw); 
    line(x, 465, x + mh, 465);
}


function drawIndex4() {
  fill(0);
  let count = 1;
  for(let i = 0; i <= 30; i += 1){
    const tx = x + (w/30)*i
    const ty = 350
    textSize(ts);
    text(number[count],tx,ty);
    const ly = ty + 15
    line(tx, ty+5, tx, ly);
    line(tx, ly, x + (w/30), ly )
    count++;
  }
}
function drawDayHand() {
    const md = map(day()+ norm(hour(), 0, 24), 1, 31, s, e);
    strokeWeight(sw); 
    line(x, 365, x + md, 365);
}




function drawIndex5() {
  fill(0);
  let count = 1;
  for(let i = 0; i <= 11; i += 1){
    const tx = x + (w/11)*i
    const ty = 250
    textSize(ts);
    text(number[count],tx,ty);
    const ly = ty + 15
    line(tx, ty+5, tx, ly);
    line(tx, ly, x + (w/11), ly )
    count++;
  }
}
function drawMonthHand() {
    const mmo = map(month()+ norm(day(), 0, 24), 1, 12, s, e);
    strokeWeight(sw); 
    line(x, 265, x + mmo, 265);
}


  
function drawIndex6() {
  fill(0);
  const textBirth = document.getElementById("birthday")
  let valueB = textBirth.value
  
    const textAnni = document.getElementById("Anniversary")
  let valueA = textAnni.value

  for(let i = 0; i <= valueA ; i += 1){
    const tx = x + (w/(valueA))*i
    const ty = 150
    textSize(6);
    text(valueB,tx,ty);
    const ly = ty + 15
    line(tx, ty+5, tx, ly);
    line(tx, ly, x + (w/(valueA)), ly )
    valueB++;
  }
}
function drawYearHand() {
  const textBirth = document.getElementById("birthday")
  let valueB = textBirth.value
  
  const textAnni = document.getElementById("Anniversary")
  let valueA = textAnni.value
  
  let B = Number(valueB)
  let A = Number(valueA)
  
  const my = map(year() +norm(month(), 0, 12), B, A+B, s, e);
  strokeWeight(sw); 
  push();
  stroke(255,0,0);
  line(x, 165, x + my, 165);
  pop();
}
  




function updateClock() {
    const div = document.querySelector('#clock');
    const now = new Date();
    div.textContent = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds(); 
  }
  //getMonthだけ0スタートだから＋1する
  setInterval(updateClock, 500);

  
