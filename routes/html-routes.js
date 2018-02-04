// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/dmanage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dancers-manage.html"));
  });

  app.get("/dancerDisplay", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dancers-display.html"));
  });  

  app.get("/pmanage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parents-manage.html"));
  });

  app.get("/parentDisplay", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/parents-display.html"));
  }); 

  app.get("/contactDisplay", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact-display.html"));
  }); 

  app.get("/resourceDisplay", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/resource-display.html"));
  }); 

};