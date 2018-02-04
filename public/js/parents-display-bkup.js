$(document).ready(function() {
    //get parents from database
    //build panel divs

    getParents();

    function getParents() {
        $.get("/api/getParents", function(data) {
          parents = data;
          buildTable(parents);    
        });
    }
   
    function getDancerName(dancer_id) {
        console.log("inside getdancername dancer_id: "+ dancer_id);
        $.get("/api/dancer/select/" + dancer_id, function(data) { 
          console.log("data: " + data);
          dancers = data;
          console.log("dancer name: "+ dancers.dancerName);
        //   return dancers.dancerName;   
        });
    }

    // $.get("/api/parents/select/" + dancerId, function(data) {
        
    //         parents=data;
    //         console.log("inside api/parents/select. data: " + data);

    //        if (parents.length==0)
    //        {  displayEmptyParents(parents);
    //        }
    //        else {
    //          initializeRowsParents(parents);
    //        }
    //      });
    
    function buildTable(parents) {
        //grab the element with id = "selDancer"
        var $select = $('#parentTable');

        //dynamically build the panels to display all the dancers
        for (var i=0; i< parents.length; i++) {
            //TODO: get dancer name of DancerId
            // var dancerName = getDancerName(parents[i].DancerId);

            $.get("/api/dancer/select/" + parents[i].DancerId, function(data) { 
                console.log("data: " + data);
                dancers = data;
                console.log("dancer name: "+ dancers.dancerName);
              //   return dancers.dancerName;   
              });

            $select.append('<tr><td>' + parents[i].parent_name +
            '</td><td>' + parents[i].email + 
            '</td><td>' + parents[i].phone_no + 
            // '</td><td>' + parents[i].DancerId + 
            // '</td><td>' + dancerName +
            '</td></tr>');
        } //end for var i=0

    } //end of buildPanels function
  
  });
      
