$(document).ready(function() {
    //get parents from database
    //build panel divs

    getParents();

    function getParents() {
        $.get("/api/parents", function(data) {
          parents = data;  
          buildList(parents);
        });
    }

    function buildList(parents) {
        //grab the element with id = "contact-list"
        var $select = $('#contact-list');

        //dynamically build the list to display all the parents
        for (var i=0; i< parents.length; i++) {
            for (var j=0;j<parents[i].Parents.length;j++) {
                if (parents[i].Parents[j].is_active) {
                    $select.append('<li class="list-group-item"><div class="row w-100">' +
                    '<div class="col-12 col-sm-6 col-md-6  text-sm-left">' +
                    '<span class="name lead">' + parents[i].Parents[j].parent_name + '</span><br>' + 
                    '<span class="fa fa-phone fa-fw text-muted"></span>' +
                    '<span class="text-muted">' + parents[i].Parents[j].phone_no + '</span><br>' + 
                    '<span class="fa fa-envelope fa-fw text-muted"></span>' +
                    '<span class="text-muted small">' + parents[i].Parents[j].email + '</span></div>' +
                    '<div class="col-12 col-sm-6 col-md-6 px-0">' + 
                    '<span class="fa fa-child fa-fw text-muted" style="font-size:24px"></span>' +
                    '<span class="name lead">' + parents[i].dancer_name + '</span></div>' + 
                    '</div></li>');

                }   
            } //end var j=0
        } //end var i=0

    } //end of buildList function
  
  });
      
