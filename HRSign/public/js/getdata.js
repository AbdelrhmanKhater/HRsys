$( document ).ready(function() {
	
	// SUBMIT FORM
    /*$("#Usersub1").click(function(event){
        event.preventDefault();
        ajaxGet();
      });
    
    
    function ajaxGet(){
    	
    	// DO POST
    	$.ajax({
			type : "GET",
			url : window.location + "api/employees/getdata",
            success : function(employee) {
                console.log(employee);
                $.each(employee, function(i, emp){
                    $('#Handle').empty();
                     var custList = "";
                    $('#Handle').html('<tr><td>'+emp.id+'</td><td>'+emp.EmplyeeName+'</td><td>'+emp.EmplyeeAge+'</td><td>'+emp.EmployeeDep+`</td><td><button class="btn border rounded mx-1 Del"><i class="fas fa-trash-alt"></i></button>
                    <button class="btn border rounded mx-1 EditEmpInfo" ><i class="fas fa-edit"></i></button>
                    <button class="btn border rounded mx-1 AddTask"><i class="fas fa-plus"></i></button>
                    <button class="btn border rounded mx-1" id="OpenPerInfo"><i class="fas fa-user"></i></button>
                    <button class="btn border rounded mx-1" id="OpenEmpPerInfo"><i class="fas fa-check"></i></button></td></tr>`+)
                  });
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    
    }
    
  */
})