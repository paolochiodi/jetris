function AngleUp(world){
  var c = AngleUp.color, lc = AngleUp.lineColor;
  this.world = world;
  this.blocks = [new Block(0,1,c,lc), new Block(1,1,c,lc), new Block(2,1,c,lc), new Block(2,0,c,lc)];
}

AngleUp.color = '#c8e8cf';
AngleUp.lineColor = '#009937';

AngleUp.prototype = new Shape();

AngleUp.width = 3;
AngleUp.height = 2;