var parentContainer = $(".parent-container");

$( document ).ready(function() {

    $("#addParentBtn").click(function(){
        //get dancers from the database so we can fill in the drop down select dancer box
        getDancers();
        $("#addParentModal").modal();
  });

  // Adding an event listener for when the add parent form is submitted
  $(addParentForm).on("submit", function handleFormSubmit(event) {

    event.preventDefault();
    
    // Getting jQuery references to the form input values
    var nameInput = $("#prntname").val().trim();
    var emailInput = $("#emailaddr").val();
    var phoneInput = $("#phonenum").val();
    var selectedDancerName = $("#selDancer").find("option:selected").text();
    var selectedDancerId = $("#selDancer").val();

    var addDancerForm = $("#addParentForm");

    // Won't submit the add parent if we are missing a name
    if (!nameInput) {
      return;
    } 
  
    // Constructing a newParent object to hand to the database
    var newParent = {
      parent_name: nameInput,
      email: emailInput,
      phone_no: phoneInput,
      DancerId: selectedDancerId 
    };

    submitNewParent(newParent);

  }); //end of AddParentForm on submit

  // Adds a new parent
  function submitNewParent(newparent) {
    $.post("/api/addParent/", newparent, function() {
       //put success message on form 
       var $select = $('#successMessage');
       $select.append('<h3>You have successfully added a new parent!</h3><p>Click Close to continue.</p></h3>');
    }); 
  } //end of function submitNewParent

  // This function gets dancers from the database and dynamically builds the option tags in select dropdown on form
  function getDancers() {
    $.get("/api/getDancers", function(data) {
      console.log("Dancers", data);
      dancers = data;
      initializeSelectList(dancers);    
    });
  } //end of function getDancers

  function initializeSelectList(dancers) {
    //grab the select with id = "selDancer"
    var $select = $('#selDancer');
    //append option list with dancers
    for (var i=0; i< dancers.length; i++) {
      $select.append('<option value="' + dancers[i].id + '">' + dancers[i].dancer_name + '</option>');
    }
  }

  
$('#addParentModal').on('hidden.bs.modal', function () {
    
      window.location.href = "/pmanage";
        
    })

    function getParents() {
        console.log("inside get parents");
        $.get("/api/parents", function(data) {
            
          console.log("Parents", data);
        parents=data;

        console.log(parents.length);
        if (!parents || !parents.length) {
            displayEmpty();
          }
          else {
            
            initializeRows(parents);
          }  
        });
      }
    getParents();

// This function creates the table of parents    
    function initializeRows(parents) {
           
        $table = $('<table class="table table-bordered table-inverse" style="background-color: white">');
        
    $table.append('<caption><h3 style="color: black"><b>Parents in Database</b></h3></caption>')
    .append('<thead>').children('thead') 
      .append('<tr />').children('tr')
      .append('<th>Parent Name</th><th>Parent Email</th><th>Parent Phone</th><th>Dancer Name</th><th>Update Parent Info</th><th>Remove Parent</th><th STYLE=display:NONE>Parent ID</th>');
        var $tbody = $table.append('<tbody />').children('tbody');
//        var parentsToAdd = [];
        for (var i = 0; i < parents.length; i++) {
            for (var j=0;j<parents[i].Parents.length;j++) {
             console.log(parents[i].Parents[j].parent_name)
             console.log(parents[i].Parents[j].email) 
             console.log(parents[i].Parents[j].phone_no)
             console.log(parents[i].dancer_name)
             if (parents[i].Parents[j].is_active) {
                $tbody.append('<tr />').children('tr:last')
                .append("<td>"+parents[i].Parents[j].parent_name+"</td>")
                .append("<td>"+parents[i].Parents[j].email+"</td>") 
                .append("<td>"+parents[i].Parents[j].phone_no+"</td>")
                .append("<td>"+parents[i].dancer_name+"</td>")
                .append("<td><button type='button' class='btn btn-primary updtbtn' id='updtbtn'>Update</button></td>")
                .append("<td><button type='button' class='btn btn-primary delbtn' id='delbtn'>Delete</button></td>")
                .append("<td STYLE=display:NONE>"+parents[i].Parents[j].id+"</td>"); //we are not showing parent id in the table
             }
        }
    }
        $table.appendTo('#dynamicTable');
//        parentContainer.append(parentsToAdd);
      }


      // This function displays a messgae when there are no posts
  function displayEmpty() {
    blogContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html("No parents yet");
    blogContainer.append(messageh2);
  }

  
$('body').on("click", "#updtbtn", function() {
    var tablerow = [];
    console.log("inside update button")
    var $row = $(this).closest("tr"),       // Finds the closest row <tr> 
    $tds = $row.find("td");             // Finds all children <td> elements

    $.each($tds, function() {               // Visits every single <td> element
    console.log($(this).text())        // Prints out the text within the <td>
    tablerow.push($(this).text())
});


$(".modal-body #dancer-name").val( tablerow[3] );
$(".modal-body #parent-name").val( tablerow[0] );
$(".modal-body #parent-email").val( tablerow[1] );
$(".modal-body #parent-phone").val( tablerow[2] );
$(".modal-body #parent-id").val( tablerow[6] );


  $('#myModal').modal('show');

    $('#myModal').modal({
      show: 'show'});


 
    //   $("#resultas").append($item);       // Outputs the answer
});

$(updForm).on("submit", function handleFormSubmit(event) {
    
       event.preventDefault();

       console.log("inside update parent");
        
       // Getting jQuery references to the form input values
        var parentIdInput = $("#parent-id").val().trim();
        var parentNameInput = $("#parent-name").val().trim();
        var parentEmailInput = $("#parent-email").val().trim();
        var parentPhoneInput = $("#parent-phone").val().trim();
        
        var updateParent = {
            id: parentIdInput,
            parent_name: parentNameInput,
            email: parentEmailInput,
            phone_no: parentPhoneInput
        }
    
        console.log(updateParent);

        $.ajax({
            method: "PUT",
            url: "/api/parents/update",
            data: updateParent
          })
          .done(function() {
            var $select = $('#updateSuccessMessage');
            $select.append('<h3>You have successfully updated the parent information!</h3><p>Click Close to continue.</p></h3>');
            // $("#upds").html("information has been updated");  
            
          });

});    

$('#myModal').on('hidden.bs.modal', function () {

  window.location.href = "/pmanage";
    
})

  
$('body').on("click", "#delbtn", function() {
    var tablerow = [];
    console.log("inside delete button")
    var $row = $(this).closest("tr"),       // Finds the closest row <tr> 
    $tds = $row.find("td");             // Finds all children <td> elements

    $.each($tds, function() {               // Visits every single <td> element
    console.log($(this).text())        // Prints out the text within the <td>
    tablerow.push($(this).text())
});

$(".modal-body2 #ddancer-name").val( tablerow[3] );
$(".modal-body2 #dparent-name").val( tablerow[0] );
$(".modal-body2 #dparent-email").val( tablerow[1] );
$(".modal-body2 #dparent-phone").val( tablerow[2] );
$(".modal-body2 #dparent-id").val( tablerow[6] );




  $('#myModal2').modal('show');

    $('#myModal2').modal({
      show: 'show'});


 
    //   $("#resultas").append($item);       // Outputs the answer
});


$(delForm).on("submit", function handleFormSubmit(event) {
    
       event.preventDefault();

       console.log("inside delete parent");
        
       // Getting jQuery references to the form input values
        var parentIdInput = $("#dparent-id").val().trim();
        var parentNameInput = $("#dparent-name").val().trim();
        var parentEmailInput = $("#dparent-email").val().trim();
        var parentPhoneInput = $("#dparent-phone").val().trim();
        

        id = parentIdInput;
        is_active_val=false;

        var deleteParent = {
            id: parentIdInput,
            is_active: is_active_val
        } 
           
              $.ajax({
              method: "DELETE",
              url: "/api/parents/delete/" + id,
              data: deleteParent
            })
            .done(function() {
              var $select = $('#deleteSuccessMessage');
              $select.append('<h3>You have successfully removed this parent from the database!</h3><p>Click Close to continue.</p></h3>');    
                // $("#dels").html("parent has been deleted");  
              
            });

            $('#myModal2').on('hidden.bs.modal', function () {
                
                  window.location.href = "/pmanage";
                    
                })
          })
})    