$(document).ready(function() {
    //get dancers from database
    //build panel divs

    getDancers();

    function getDancers() {
        $.get("/api/getDancers", function(data) {
          dancers = data;
          buildPanels(dancers);    
        });
      } //end of function getDancers
    
    function buildPanels(dancers) {
        //grab the element with id = "selDancer"
        var $select = $('#dancerPanels');

        //dynamically build the panels to display all the dancers
        for (var i=0; i< dancers.length; i++) {
                $select.append('<div class="col-lg-3"><div class="panel">' + 
                '<img src="images/' + dancers[i].image_path + '">' +
                '<h4>' + dancers[i].dancer_name + '</h4>' +
                '<h5>' + dancers[i].year_in_school + '</h5>' + 
                '</div></div>');
        } //end for var i=0

    } //end of buildPanels function
  
  });
      