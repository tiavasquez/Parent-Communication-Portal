// Requiring our models folder
var db = require("../models");

module.exports = function(app) {

  //GET route for getting all of the dancers
  app.get("/api/getDancers", function(req, res) {
    db.Dancer.findAll({
        where: {is_active:true,
        }
    })
    .then(function(dbDancer) {
      res.json(dbDancer);
    });
  });

  //GET route for getting dancer name of given id
  app.get("/api/dancer/select/:id", function(req, res) {
    console.log("inside app.get for /api/dancer/select");
    db.Dancer.findAll({
      where: {
        id: 5
        // id: req.params.id
        }
    })
    .then(function(dbDancer) {
      res.json(dbDancer);
    });
  });

  // POST route for saving a new dancer
  app.post("/api/addDancer", function(req, res) {
    console.log(req.body);
    db.Dancer.create({
      dancer_name: req.body.dancer_name,
      year_in_school: req.body.year_in_school,
      image_path: req.body.image_path
    })
    .then(function(dbDancer) {
      res.json(dbDancer);
    });
  });

  // Get all dancer info joined with parents table
  app.get("/api/dancers/", function(req, res) {
    
     db.Dancer.findAll({
      include: [{model: db.Parent}],
      where: {is_active:true,
      }
    }).then(function(dbDancer) {
      res.json(dbDancer);
    });
  });

  //update dancer table
  
  app.put("/api/dancers/update", function(req, res) {
    
    db.Dancer.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbDancer) {
      res.json(dbDancer);
    });
  });

  // soft delete of dancer by setting is_active to false

  app.delete("/api/dancers/delete/:id", function(req, res) {
    db.Dancer.destroy({
      where: {
        id: req.params.id
      }
    })
    .then(function(dbDancer) {
      res.json(dbDancer);
    });
  });

};
