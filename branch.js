class sakha{
    constructor(sx,sy,angle,length,colour){
        this.sx=sx;
        this.sy=sy;
        this.ang=angle;
        this.len=length;
        this.col=colour;
    }



}
function calang(x1,y1,x2,y2){
    return Math.atan2(y2-y1,x2-x1) * 180 / Math.PI*(-1);
}

function drawtimeline(sx,sy,length,ang,w){
    nx=sx+length*Math.cos(ang*Math.PI/180);
    ny=sy+length*Math.sin(ang*Math.PI/180);
    colorMode(HSB, 255);
    colorMode(HSB, width/2);
    stroke(Math.abs(sx%width/2),width/3,width/2,100)
    strokeWeight(w);
    line(sx,sy,nx,ny)
    return [nx,ny];
}
