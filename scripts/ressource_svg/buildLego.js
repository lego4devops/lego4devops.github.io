const stroke = 2;
const height = 36;

const w1_ = 32; // taille à droite
const w2_ = 8; // taille à gauche
const p1_ = 2//6; // hauteur à droite
const p2_ = 12; // hauteur à gauche

const picot_h = 6;
const picot_p = 2;
const picot_w = 10;

function Point(x, y) {
  this.x = x;
  this.y = y;
}
Point.prototype.str = function() {
  return this.x + "," + this.y
}
Point.prototype.moveXY = function(dx, dy) {
  return new Point(this.x+dx, this.y+dy)
}
Point.prototype.moveX = function(dx) {
  return new Point(this.x+dx, this.y)
}
Point.prototype.moveY = function(dy) {
  return new Point(this.x, this.y+dy)
}
Point.prototype.factor = function(fx, fy) {
  return new Point(this.x*fx, this.y*fy)
}
Point.prototype.translate = function(dx, dy) {
  return new Point(this.x+dx, this.y+dy)
}

function Brick(nb_picot_x, nb_picot_y, color) {
  this.nb_picot_x = nb_picot_x;
  this.nb_picot_y = nb_picot_y;
  this.color = color;
}

function draw_group(point, parent) {
  var group = appendElement(parent, "g", "");
  if (point !== undefined && (point.x!==0 || point.y!==0)) {
    group.setAttributeNS(null, "transform", "translate(" + point.x + "," + point.y +")");
  }
  return group;
}

function draw_a_side(parent, path, color) {
  var myPath = appendElement(parent, "path", color);
  myPath.setAttributeNS(null,"d",path);
}

function draw_one_picot(parent,  x, y, color) {

  var base = new Point(x, y);
  var h = picot_h;
  var p = picot_p;
  var w = picot_w;

  var myPath = appendElement(parent, "path", color+"3");
  myPath.setAttributeNS(null,"d",
    "M "+base.moveX(-w).str()
    +" C"+base.moveXY(-w, p*2).str()
    +" "+base.moveXY(w, p*2).str()
    +" "+base.moveX(w).str());

  var myPath = appendElement(parent, "path", color+"3");
  myPath.setAttributeNS(null,"d",
    "M "+base.moveX(-w).str()
    +" "+base.moveXY(-w, -h).str()
    +" "+base.moveXY(w, -h).str()
    +" "+base.moveX(w).str());

  var myPath = appendElement(parent, "ellipse", color+"1");
  myPath.setAttributeNS(null,"cx",x);
  myPath.setAttributeNS(null,"cy",y-h);
  myPath.setAttributeNS(null,"rx",w);
  myPath.setAttributeNS(null,"ry",p);
}

function draw_strike_g(parent, point, brick) {
  var base = point.moveXY(-w2_+(w2_+w1_*brick.nb_picot_x)/2, -p2_+(height+p2_)/2)
  var size = 50;

  draw_line(parent, base.x-size, base.y-size, base.x+size, base.y+size, "strike");
  draw_line(parent, base.x-size, base.y+size, base.x+size, base.y-size, "strike");
}

function draw_line(parent, x1, y1, x2, y2, className) {
  var myPath = appendElement(parent, "line", className);
  myPath.setAttributeNS(null,"x1",x1);
  myPath.setAttributeNS(null,"y1",y1);
  myPath.setAttributeNS(null,"x2",x2);
  myPath.setAttributeNS(null,"y2",y2);
}

function draw_brick(parent, a, brick) {
  const w1__ = w1_*brick.nb_picot_x;
  const w2__ = w2_*brick.nb_picot_y;
  const p1__ = p1_*brick.nb_picot_x;
  const p2__ = p2_*brick.nb_picot_y;

  var b = a.moveY(height)
  var c = a.moveXY(-w2__, height-p2__)
  var d = a.moveXY(-w2__, -p2__);

  var e = a.moveXY(w1__, -p1__)
  var f = e.moveY(height)
  var g = e.moveXY(-w2__, height-p2__)
  var h = e.moveXY(-w2__, -p2__);

  var group = draw_group(new Point(0,0), parent);
  draw_a_side(group, "M"+a.str()+" L"+d.str()+" L"+c.str()+" L"+b.str()+"z", brick.color+"3");
  draw_a_side(group, "M"+a.str()+" L"+e.str()+" L"+f.str()+" L"+b.str()+"z", brick.color+"2");
  draw_a_side(group, "M"+a.str()+" L"+e.str()+" L"+h.str()+" L"+d.str()+"z", brick.color+"1");

  draw_brick_picot(group, a, brick);
  return group;
}


function draw_brick_picot(parent, base, brick) {
  for (var dy=1;dy<=brick.nb_picot_y; dy++) {
    for (var dx=1;dx<=brick.nb_picot_x; dx++) {
        var px = base.x+(dx*w1_)-(w1_/2)-(dy*w2_)+(w2_/2);
        var py = base.y-(dx*p1_)+(p1_/2)-(dy*p2_)+(p2_/2);
        draw_one_picot(parent,  px, py, brick.color);
    }
  }
}

function appendElement(parent, shape, className) {
  var svgNS = "http://www.w3.org/2000/svg";
  var myPath = document.createElementNS(svgNS,shape);
  if (className !== '') {
    myPath.setAttributeNS(null,"class",className);
  }
  parent.appendChild(myPath);
  return myPath;
}

function point3d(px, py, pz) {
  var x = (px*(w2_))+(pz*w1_);
  var y = (px*p2_)+(py*(height))-(pz*p1_);
  return new Point(x, y);
}

function orDefault(value, defaultValue) {
   return (typeof value !== 'undefined') ? value : defaultValue;
}

function create_group(point, parent) {
  var group = draw_group(point, parent);
  var bricks = [];
  var positions = [];
  return {
    add_brick: function(brick, point) {
      point = orDefault(point, point3d(1,1,0))
      draw_brick(group, point, brick)
      bricks.push(brick);
      positions.push(point);
      return this;
    },
    strike: function(index) {
      var index = orDefault(index, 1);
      draw_strike_g(group, positions[index-1], bricks[index-1]);
      return this;
    }
  }
}

function translateToCenter(globalSvg, groupToCenter) {
  var bbox = globalSvg.getBBox();
  var svgWidth = globalSvg.getAttribute("width")
  var x_to_translate = (svgWidth-bbox.width)/2-bbox.x;

  groupToCenter.setAttributeNS(null,"transform","translate("+x_to_translate+", 0)");
}

function brick(nb_picot_x, nb_picot_y, color) {
  return new Brick(nb_picot_x, nb_picot_y, color);
}
function position(x, y) {
  return new Point(x,y).factor(150, 100);
}

module.exports = {
  group_export: function (point, parent) {
    return create_group(point, parent);
  },
  create_group: function(point, parent) {
    return create_group(point, parent);
  },
  position(x, y) {
    return position(x, y);
  },
  point3d(px, py, pz) {
    return point3d(px, py, pz);
  },
  brick(nb_picot_x, nb_picot_y, color) {
    return brick(nb_picot_x, nb_picot_y, color);
  },
  appendElement: function (parent, shape, className) {
    return appendElement(parent, shape, className) ;
  },
  translateToCenter: function (globalSvg, groupToCenter) {
      return translateToCenter(globalSvg, groupToCenter);
  },
  set_document(doc) {
    document = doc;
  }
}
