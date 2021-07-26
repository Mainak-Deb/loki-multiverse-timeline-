var frm = 0,i,newdim;
var samaysakhas = [];
var multiverse=[];
var density = 60;
var broke=false;
var lineofcontrol=170;
var beeprate=20

function setup() {

  // createCanvas(6000, 2900);
 
   createCanvas(1526,840);
  
  stroke(255, 8, 8, 40);
  strokeWeight(1);
  for (i = 0; i < width; i = i + 40) {
    line(i, 0, i, height)
  }
  for (i = 0; i < height; i = i + 40) {
    line(0, i, width, i);
  }
  var sp = [-200, height / 2];
  colorMode(HSB, width/2);
  for (i = -200; i < width+100; i++) {
    stroke(Math.abs(i%width/2), width/3,width/2,100);
    strokeWeight(10);
    var off = (noise(i / 800, height / 2) * 400) - 200;
    line(sp[0], sp[1], i, height / 2 + off)
    sp = [i, height / 2 + off];
    if (samaysakhas.length < (width / density)) {
      if (i % density == 0) {
        samaysakhas.push([i, height / 2 + off])
      }
    }
  } 
  
  for (i = 0; i < samaysakhas.length-1; i++){
    samaysakhas[i].push(calang(samaysakhas[i][0], samaysakhas[i][1],
      samaysakhas[i+1][0], samaysakhas[i+1][1]))
    //ellipse(samaysakhas[i][0], samaysakhas[i][1], 20, 20)
  }
  var M=40,rng;
  for (i = 0; i < samaysakhas.length-1; i++){
    // if(Math.random()<0.5) {
    //   rng=samaysakhas[i][2]+M;
    //   multiverse.push([samaysakhas[i][0], samaysakhas[i][1],rng,true])
    // }
    // else{
    //   rng=samaysakhas[i][2]+(-1)*M;
    //   multiverse.push([samaysakhas[i][0], samaysakhas[i][1],rng,false])
    // }
    if(i%2==0) {
      rng=samaysakhas[i][2]+M;
      multiverse.push([samaysakhas[i][0], samaysakhas[i][1],rng,true,false,0,8])
    }
    else{
      rng=samaysakhas[i][2]+(-1)*M;
      multiverse.push([samaysakhas[i][0], samaysakhas[i][1],rng,false,false,0,8])
    }
  }
  print(samaysakhas)
  print(multiverse)

}
function draw() {
  colorMode(HSB, 255);
  // background(10,10,10,4);

  fill(frm%255, 255, 255,40)
  strokeWeight(0)
  // for (i = 0; i < samaysakhas.length; i++){
  //   ellipse(samaysakhas[i][0], samaysakhas[i][1], 20, 20)
  // }
  var addang;
  for (i = 0; i < multiverse.length; i++){
    if((multiverse[i][1]<(height/2)-lineofcontrol) || (multiverse[i][1]>(height/2)+lineofcontrol)){
      broke=true;
    }
    newdim=drawtimeline(multiverse[i][0],multiverse[i][1],0.6,multiverse[i][2],multiverse[i][6])
    multiverse[i][0]=newdim[0]
    multiverse[i][1]=newdim[1]
    multiverse[i][5]++;

    // if(multiverse[i][3]){
    // multiverse[i][2]=multiverse[i][2]+noise(multiverse[i][0],multiverse[i][1],frm)*0.2}
    // else{
    //   multiverse[i][2]=multiverse[i][2]-noise(multiverse[i][0],multiverse[i][1],frm)*0.2
    // }
    var chaos=5
    if(multiverse[i][3]){
      multiverse[i][2]=multiverse[i][2]+(Math.random()-0.5)*chaos}
      else{
        multiverse[i][2]=multiverse[i][2]-(Math.random()-0.5)*chaos
      }
    // print(multiverse)
    
    if((multiverse[i][5]%220==0)  && (!multiverse[i][4])){
      if(multiverse[i][6]>2){
          multiverse.push([multiverse[i][0],multiverse[i][1],multiverse[i][2]+20,false,false,0,multiverse[i][6]/2])
          //multiverse.push([multiverse[i][0],multiverse[i][1],multiverse[i][2]-10,false,false,0,multiverse[i][6]/2])
         //multiverse.push([multiverse[i][0],multiverse[i][1],multiverse[i][3]-20,false,false,0])
          
          multiverse[i][6]=multiverse[i][6]-2}
          if (i==3) print(multiverse[i])
          
    }
    print(i)
  }
  //print(multiverse)
// if((frm%2==0)){
//   stroke(255, 8, 8);
//   strokeWeight(10); 
//   line(0,125,width,125)
//   line(0,height-125,width,height-125)
  // }
  strokeWeight(7); 
  if(!broke){stroke(width/2.3,width/3,width/4)
  }else{
    if(frm<beeprate/2){
    stroke(width/2.3,width/3,0)}
    else{
      stroke(width/2.3,width/3,width/4)
    }
  }
  line(0,(height/2)+lineofcontrol,width,(height/2)+lineofcontrol)
  line(0,(height/2)-lineofcontrol,width,(height/2)-lineofcontrol)

  // stroke(width/2.3,width/3,0)
  // line(0,lineofcontrol,width,lineofcontrol)
  // line(0,height-lineofcontrol,width,height-lineofcontrol)

  frm=(frm+1)%beeprate
}
