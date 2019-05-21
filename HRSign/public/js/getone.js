$( document ).ready(function() {
	
	// SUBMIT FORM
    /*$("#PerForm").submit(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		ajaxPost();
	});
    
    
    function ajaxGetOne(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		Name : $("#Perk").val()
        }
        console.log(formData);
    
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url : window.location + "api/employees/getOne",
			data : JSON.stringify(formData),
            dataType : 'json',
            success : function(employee) {
				$("#PerDark").fadeIn(100);
				$("#close5").click(function(){
					$("#PerDark").fadeOut(100);
				})
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
    	$("#Perk").val("");
    }*/
})