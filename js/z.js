function Z(world){
  var c = Z.color, lc = Z.lineColor;
  this.world = world;
  this.blocks = [new Block(0,0,c,lc), new Block(1,0,c,lc), new Block(1,1,c,lc), new Block(2,1,c,lc)];
}

Z.prototype = new Shape();

Z.color = '#faedbd';
Z.lineColor = '#f1cd4a';

Z.width = 2;
Z.height = 2;