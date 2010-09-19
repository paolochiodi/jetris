function S(world){
  var c = S.color, lc = S.lineColor;
  this.world = world;
  this.blocks = [new Block(1,0,c,lc), new Block(2,0,c,lc), new Block(0,1,c,lc), new Block(1,1,c,lc)];
}

S.prototype = new Shape();

S.color = '#f5a93f';
S.lineColor = '#cb4319';

S.width = 2;
S.height = 2;