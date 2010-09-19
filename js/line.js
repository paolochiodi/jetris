function Line(world){
  var c = Line.color, lc = Line.lineColor;
  this.world = world;
  this.blocks = [new Block(0,0,c,lc), new Block(1,0,c,lc), new Block(2,0,c,lc), new Block(3,0,c,lc)];
}


Line.prototype = new Shape();

Line.color = '#eb605f';
Line.lineColor = '#df1613';

Line.width = 4;
Line.height = 1;