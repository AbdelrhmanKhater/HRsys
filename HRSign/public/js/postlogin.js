var k=0;
var allData =[];
$( document ).ready(function() {
	
	// GET REQUEST
	$("#logform").click(function(event){
		event.preventDefault();
		ajaxGetCheck();
		ajaxGet();
	});
	
	// DO GET
	function ajaxGetCheck(){

        var formData = {
    		user : $("#userl").val(),
            pass :  $("#passl").val()
        }
        console.log(formData);
		$.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "api/employees/employee",
            data : JSON.stringify(formData),
            dataType : 'json',
			success: function(result){
				if (result){
					$("#ContainHr").css({"display":"block"});
					$("#Contain").css({"display":"none"});
					k=1;

					
					console.log("hight");
					
					
                }
                else{
                    
                }
			},
			error : function(e) {
				console.log("ERROR: ", e);
			}
		});	
	}
	function ajaxGet(){
    	
    	// DO POST
    	$.ajax({
			type : "GET",
			url : window.location + "api/employees/getdata",
            success : function(employee) {
				console.log(employee);
				$('#Handle').empty();
                $.each(employee, function(i, emp){
					var htmlC = `<tr><td>`+emp.id+`</td><td>`+emp.EmployeeName+`</td><td>`+emp.EmployeeAge+`</td><td>`+emp.EmployeeDep+`</td><td>`+emp.EmployeeCity+`</td><td>`+emp.EmployeeMobile+`</td></tr>`;
					document.getElementById("Handle").innerHTML+=htmlC;
                  });
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    
    }
})