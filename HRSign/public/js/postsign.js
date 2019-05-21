$( document ).ready(function() {
	
	// SUBMIT FORM
    $("#employeeform").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		user : $("#user").val(),
            pass :  $("#pass").val(),
            company_id : $("#company_id").val(),
            fname : $("#fname").val(),
            lname : $("#lname").val()
        }
        console.log(formData);
    
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/employees/save",
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
    	$("#user").val("");
        $("#pass").val("");
        $("#company_id").val("");
        $("#fname").val("");
        $("#lname").val("");
    }
})