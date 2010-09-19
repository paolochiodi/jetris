function Square(world){
  var c = Square.color, lc = Square.lineColor;
  this.world = world;
  this.blocks = [new Block(0,0,c,lc), new Block(0,1,c,lc), new Block(1,0,c,lc), new Block(1,1,c,lc)];
}

Square.color = '#55d2fb';
Square.lineColor = '#00397d';

Square.prototype = new Shape();

Square.width = 2;
Square.height = 2;