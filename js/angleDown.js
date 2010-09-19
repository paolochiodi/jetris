function AngleDown(world){
  var c = AngleDown.color, lc = AngleDown.lineColor;
  this.world = world;
  this.blocks = [new Block(0,0,c,lc), new Block(1,0,c,lc), new Block(2,0,c,lc), new Block(2,1,c,lc)];
}

AngleDown.prototype = new Shape();

AngleDown.color = '#c6a7c2';
AngleDown.lineColor = '#a34083';

AngleDown.width = 3;
AngleDown.height = 2;