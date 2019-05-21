$( document ).ready(function() {
	
	// SUBMIT FORM
    /*$("#CheckTask").click(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		//ajaxPost();
	});
    
    
    function ajaxPost(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		id : $("#id").val()
        }
        console.log(formData);
    
    	// DO POST
    	$.ajax({
			type : "GET",
			url : window.location + "api/employees/gettasks",
            success : function(i,tsk) {
				var htmlC = `<tr><td>`+tsk.TaskName+`</td><td>`+tsk.TaskDead+`</td><td>`+tsk.TaskSupv+`</td><td>`+tsk.id_emp+`</td></tr>`;
					document.getElementById("TsTs").innerHTML+=htmlC;
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
 
    }*/
})