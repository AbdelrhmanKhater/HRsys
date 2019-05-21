$( document ).ready(function() {
	
	// SUBMIT FORM
    $("#DeleteForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
		ajaxGet();
	});
    
    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		name : $("#Name").val()
        }
        console.log(formData);
    
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/employees/del",
			data : JSON.stringify(formData),
            dataType : 'json',
            success : function(employee) {
				console.log(employee);
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	resetData();
 
    }
    
    function resetData(){
    	$("#id").val("");
    }
})
function ajaxGet(){
    	
	// DO POST
	$.ajax({
		type : "GET",
		url : window.location + "api/employees/getdata",
		success : function(employee) {
			console.log(employee);
			$('#Handle').empty();
			$.each(employee, function(i, emp){
				var htmlC = `<tr><td>`+i+`</td><td>`+emp.EmployeeName+`</td><td>`+emp.EmployeeAge+`</td><td>`+emp.EmployeeDep+`</td><td>`+emp.EmployeeCity+`</td><td>`+emp.EmployeeMobile+`</td></tr>`;
				document.getElementById("Handle").innerHTML+=htmlC;
			  });
		},
		error : function(e) {
			alert("Error!")
			console.log("ERROR: ", e);
		}
	});
	

}