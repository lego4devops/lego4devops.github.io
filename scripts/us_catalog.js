var svg_images = {
  us1: function (parent) {
      create_group(position(0,0), parent)
        .add_brick(brick(1,1,'white'))
        .strike();

      create_group(position(1,0), parent)
          .add_brick(brick(1,1,'blue'))
          .strike();
  },

  us2: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,1,'blue'));

    create_group(position(1,0), parent)
      .add_brick(brick(2,1,'blue'));

    create_group(position(0,1), parent)
      .add_brick(brick(3,1,'red'));

    create_group(position(1,1), parent)
      .add_brick(brick(2,1,'yellow'))
      .strike(1);
  },

  us3: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,1,'yellow'), point3d(1,3,0))
      .add_brick(brick(2,1,'red'), point3d(1,2,0))
      .add_brick(brick(2,1,'blue'), point3d(1,1,0));

    create_group(position(1,0), parent)
      .add_brick(brick(2,1,'red'), point3d(1,3,0))
      .add_brick(brick(2,1,'yellow'), point3d(1,2,0))
      .add_brick(brick(2,1,'blue'), point3d(1,1,0))
      .strike(2);
  },

  us4: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,1,'blue'));

    create_group(position(1,0), parent)
      .add_brick(brick(2,1,'red'));

    create_group(position(0,1), parent)
      .add_brick(brick(2,1,'yellow'));

    create_group(position(1,1), parent)
      .add_brick(brick(3,1,'blue'))
      .strike(1);
  },

  us5: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,1,'yellow'), point3d(1,3,0))
      .add_brick(brick(2,1,'red'), point3d(1,2,0))
      .add_brick(brick(2,1,'yellow'), point3d(1,1,0));

    create_group(position(1,0), parent)
      .add_brick(brick(2,1,'red'), point3d(1,3,0))
      .add_brick(brick(2,1,'yellow'), point3d(1,2,0))
      .add_brick(brick(2,1,'yellow'), point3d(1,1,0))
      .strike(2);
  },

  us6: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,1,'yellow'));

    create_group(position(0,1), parent)
      .add_brick(brick(3,1,'blue'));

    create_group(position(1, 0.5), parent)
      .add_brick(brick(2,2,'yellow'))
      .strike(1);

  },

  us7: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,1,'yellow'), point3d(1,4,0))
      .add_brick(brick(2,1,'white'), point3d(1,3,0))
      .add_brick(brick(2,1,'red'), point3d(1,2,0))
      .add_brick(brick(2,1,'blue'), point3d(1,1,0))

    create_group(position(1,0), parent)
      .add_brick(brick(2,1,'yellow'), point3d(1,4,0))
      .add_brick(brick(2,1,'blue'), point3d(1,3,0))
      .add_brick(brick(2,1,'red'), point3d(1,2,0))
      .add_brick(brick(2,1,'blue'), point3d(1,1,0))
      .strike(2)
  },
  us8: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,2,'yellow'))

    create_group(position(0,1), parent)
      .add_brick(brick(4,2,'yellow'))

    create_group(position(1.5, 0.5), parent)
      .add_brick(brick(2,1,'yellow'))
      .strike()
  },

  us9: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,1,'blue'))

    create_group(position(1,0), parent)
      .add_brick(brick(2,1,'yellow'))

    create_group(position(0,1), parent)
      .add_brick(brick(3,1,'blue'))

    create_group(position(1,1), parent)
      .add_brick(brick(2,1,'blue'))
      .strike()
  },

  us10: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,1,'white'), point3d(1,3,0))
      .add_brick(brick(2,1,'red'), point3d(1,2,0))
      .add_brick(brick(2,1,'blue'), point3d(1,1,0));

    create_group(position(1,0), parent)
      .add_brick(brick(2,1,'blue'), point3d(1,3,0))
      .add_brick(brick(2,1,'red'), point3d(1,2,0))
      .add_brick(brick(2,1,'blue'), point3d(1,1,0))
      .strike(2);
  },

  us11: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(1,1,'yellow'))
      .strike();

    create_group(position(1,0), parent)
        .add_brick(brick(1,1,'red'))
        .strike();
  },

  us12: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(2,1,'red'), point3d(1,3,0))
      .add_brick(brick(2,1,'yellow'), point3d(1,2,0))
      .add_brick(brick(2,1,'red'), point3d(1,1,0));

    create_group(position(1,0), parent)
      .add_brick(brick(2,1,'red'), point3d(1,3,0))
      .add_brick(brick(2,1,'yellow'), point3d(1,2,0))
      .add_brick(brick(2,1,'blue'), point3d(1,1,0))
      .strike(2);
  },

  prod1: function(parent) {
    create_group(position(0,0), parent)
      .add_brick(brick(1,2,'yellow'), point3d(0,8,1))
      .add_brick(brick(2,4,'white'), point3d(1,7,0))
      .add_brick(brick(2,2,'green'), point3d(0,6,0))
      .add_brick(brick(1,2,'yellow'), point3d(0,5,0))
      .add_brick(brick(2,2,'red'), point3d(0,4,0))
      .add_brick(brick(1,4,'white'), point3d(1,3,0))
      .add_brick(brick(1,2,'red'), point3d(0,2,0))
      .add_brick(brick(2,2,'green'), point3d(0,1,0));

      parent.setAttributeNS(null,"transform","rotate(-90)");
  }

}

module.exports = {
  svgs: function () {
    return svg_images;
  }
}
