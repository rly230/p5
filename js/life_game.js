// ライフゲーム

class Gen{
  constructor(){
    // 銀河
    this.cells = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,
      0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,
      0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,
      0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,
      0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,
      0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,
      0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    ]
    // グライダー銃
    // this.cells = [
    //   0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    // ]
  }

  next(){
    let t = this;
    let n = new Gen();
    for(let i=0; i<t.cells.length; i++){
      let L = t.livesAround(...t.indexToXy(i));
      if(t.cells[i] === 0){
        // 現世代で死んでいるセルは...
        // 3個の生きてるセルに囲まれていたら復活
        n.cells[i] = (L === 3) ? 1 : 0;
      }else{
        // 現世代で生きているセルは...
        // 2個か3個の生きているセルに囲まれていれば生存、それ以外なら過疎か過密で死
        n.cells[i] = (L === 2 || L === 3) ? 1 : 0;
      }
    }
    return n;
  }

  livesAround(x,y){
    let L = 0;
    for(let a=x-1; a<=x+1; a++){
      for(let b=y-1; b<=y+1; b++){
        let i = this.xyToIndex(a, b);
        L += (i === -1) ? 0 : this.cells[i];
      }
    }
    L -= this.cells[this.xyToIndex(x,y)];
    return L;
  }

  xyToIndex(x,y){
    let w = sqrt(this.cells.length);
    if(x<0 || x>=w || y<0 || y>=w) return -1;
    return y*w + x;
  }

  indexToXy(i){
    let w = sqrt(this.cells.length);
    let x = i % w;
    let y = floor(i/w);
    return [x, y];
  }

  draw(){
    fill(204, 255, 153);
    stroke(255, 102, 102);
    for(let [i,c] of this.cells.entries()){
      let [x, y] = this.indexToXy(i);
      let w = height/sqrt(this.cells.length);
      if(c == 1){
        rect(w*x, w*y, w, w);
      }
    }
  }
}

let g = new Gen();
function setup(){
  createCanvas(480, 480);
  redrawAll();
}

function redrawAll(){
  background(0, 153, 153);
  g.draw();
}

function mousePressed(){
  g = g.next();
  redrawAll();
}

function draw(){
  if (frameCount%10 === 9){
    mousePressed();
  }
}
