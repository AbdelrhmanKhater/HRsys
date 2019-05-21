$( document ).ready(function() {
	
	// SUBMIT FORM
    $("#taskform").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		id_emp : $("#idt").val(),
            TaskName :  $("#TaskName").val(),
            TaskSupv : $("#Supv").val(),
            TaskStart : $("#Start33").val(),
            TaskDead : $("#DeadLine").val(),
            Description : $("#Description").val()
        }
        console.log(formData);
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/employees/addtask",
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
		$("#idt").val("");
    	$("#TaskName").val("");
        $("#Supv").val("");
        $("#Start33").val("");
        $("#DeadLine").val("");
        $("#Description").val("");
    }
})