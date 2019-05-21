var vh = window.innerHeight ;
var vw =window.innerWidth ;
$("#ContainHr").css({"display":"none"});

//$("#Reg).css({"height" : 3*vh/5});

$("#UserLog1").click(function(){
    $("#Log").css({"display" : "none"});
    $("#Reg").css({"display" : "block"});
})


$("#UserLog").click(function(){
    $("#Log").css({"display" : "block"});
    $("#Reg").css({"display" : "none"});
})



var username = document.getElementById("UserName");
var userpass = document.getElementById("UserPass");
var userpassc = document.getElementById("UserPassC");
var userId = document.getElementById("UserId");
var userFN = document.getElementById("UserFN");
var userLN = document.getElementById("UserLN");

var inps = document.getElementsByTagName("input");





var usernamel = document.getElementById("UserNameL");
var userpassl = document.getElementById("UserPassL");


function store(){
  var confirm = {name : usernamel.value ,pass : userpassl.value};
}


var regex = {
  user: /[A-Za-z0-9]$/,
  pass: /[A-Za-z0-9]$/,
  company_id: /[A-Za-z0-9]$/,
  fname: /[A-Za-z]$/,
  lname: /[A-Za-z]$/,
  userl:/[A-Za-z0-9]$/,
  passl:/[A-Za-z0-9]$/
}

for (var i = 0 ; i <inps.length ; ++i){
  inps[i].addEventListener("keyup",function(e){
      validate(e.target,regex[e.target.attributes.name.value]);
  })

function validate(inp,reg){
  if(reg.test(inp.value) == true){
      inp.className ="form-control is-valid";
  }
  else{
      inp.className ="form-control is-invalid";
      inp.value="";
  }
  
}
}

function signIn()
{
    var htmlContent = `        
        <!-- First Section -->
        
        
        
       <section id="Reg">
        <div class="Dad p-5 text-center">
            <div id="logo">
                <img src="images/apple-desk-laptop-macbook.jpg" />
            </div>
            <form id="employeeform">
                <h2 class="p-2 font-weight-bold">HR-System</h2>
                <h4 class="font-weight-bold pb-4">Register Form</h4>
           <div class="form-group UserN pt-3">
            <div class="row">
               <div class="col-md-4">
                <label class="font-weight-bold">User Name</label>
                </div>
                <div class="col-md-8">
                
                    <input class="form-control" name="user" id="user" type="text"/>
                    
                </div>
               </div>
            </div>
            
            
            <div class="form-group UserP">
            <div class="row">
               <div class="col-md-4">
                <label class="font-weight-bold">Password</label>
                </div>
                <div class="col-md-8">
                
                    <input class="form-control" name="pass" id="pass" type="text"/>
                    
                </div>
               </div>
            </div>
            
            
    
            <div class="form-group UserId">
            <div class="row">
               <div class="col-md-4">
                <label class="font-weight-bold">User Id</label>
                </div>
                <div class="col-md-8">
                
                    <input class="form-control" name="company_id" id="company_id" type="text"/>
                    
                </div>
               </div>
            </div>
           
           
            
            
            <div class="form-group UserFN">
            <div class="row">
               <div class="col-md-4">
                <label class="font-weight-bold">First Name</label>
                </div>
                <div class="col-md-8">
                
                    <input class="form-control" name="fname" id="fname" type="text"/>
                    
                </div>
               </div>
            </div>
            
            
            <div class="form-group UserLN">
            <div class="row">
               <div class="col-md-4">
                <label class="font-weight-bold">Last Name</label>
                </div>
                <div class="col-md-8">
                
                    <input class="form-control" name="lname" id="lname" type="text"/>
                    
                </div>
               </div>
            </div>
           
           <div class="form-group Usersb">
                <input class="btn btn-primary px-4 py-2" id="Usersub" type="submit"  value="Register"/>
            </div>
                
                <br/><br/>
            <div class="form-group Userlg">
                <a class="text-primary font-weight-bold" id="UserLog"><i class="fas fa-long-arrow-alt-left py-2 px-1"></i> Log In</a>
            </div>
            
            
            
           </form>
           </div>
        
        
        </section>
        
        
        
        
        
        
        
        <!-- Register Ends -->
    
    
    
    
    <!-- Log In --> 
        
        <section id="Log">
        <div class="Dad p-5 text-center">
            <div id="logo1">
                <img src="images/apple-desk-laptop-macbook.jpg" />
            </div>
            <form id="logform">
                <h2 class="p-2 font-weight-bold">HR-System</h2>
                <h4 class="font-weight-bold pb-4">Log Form</h4>
           <div class="form-group UserN pt-4">
            <div class="row">
               <div class="col-md-4">
                <label class="font-weight-bold">User Name</label>
                </div>
                <div class="col-md-8">
                
                    <input class="form-control" name="userl" id="userl" type="text"/>
                    
                </div>
               </div>
            </div>
            
            
            <div class="form-group UserP">
            <div class="row">
               <div class="col-md-4">
                <label class="font-weight-bold">Password</label>
                </div>
                <div class="col-md-8">
                
                    <input class="form-control" name="passl" id="passl" type="text"/>
                    
                </div>
               </div>
            </div>
    
           
           <div class="form-group Usersb">
                <input class="btn btn-primary px-4 py-2" id="Usersub1" type="submit" value="Log In"/>
            </div>
                
                <br/><br/>
            <div class="form-group Userlg">
                <a class="text-primary font-weight-bold" id="UserLog1">Register <i class="fas fa-long-arrow-alt-right py-2 px-1"></i></a>
            </div>
            
            
            
           </form>
           </div>
        
        
        </section>
            
    
    `;
    document.getElementById("Conain").innerHTML = htmlContent;
}



/////////////////////////////////////////////////////////

function HR_M(){
    htmlC=`<section id= "HR-F"> <section id="Edit" class="mb-3">
    <div class="Dad container p-3">
    <div id="default" class="p-2">
        <h2 class="font-weight-bold">HR-System</h2>
    </div>

    <div class="Options text-left p-2">
            
    <div class="container text-left control">
<label class="font-weight-bold p-2">Options:</label>
<button class="btn border rounded mx-1" id="Delete"><i class="fas fa-trash-alt"></i></button>
<button class="btn border rounded mx-1" id="EditEmpInfo"><i class="fas fa-edit"></i></button>
<button class="btn border rounded mx-1" id="AddTask"><i class="fas fa-plus"></i></button>
<button class="btn border rounded mx-1" id="OpenPerInfo"><i class="fas fa-user"></i></button>
<button class="btn border rounded mx-1" id="CheckTask"><i class="fas fa-check"></i></button>
</div>

</div>
    
</div>

</section>    



<!-- Delete Page -->
    <section id="FindIdDDark"><div class="FD">
    <section id="FindIdD"></section><div id="close3"></div></div></section>
    <!-- -->



<!-- Update Page -->

<!-- Page 2 -->
<section id= "EditDark"><div class= "EdDark"><section id="EmpInfo1" class="text-left container-fluid"></section><div id="close2"></div></div></section>
<!-- -->

<!-- -->



<!-- Task Page -->

<!-- Page 2 -->
<section id= "TaskDark"><div class= "TsDark"><section id="TaskInfo" class="text-left container-fluid"></section><div id="close"></div></div></section>
<!-- -->

<!-- -->


<!-- Personal Page -->
    
        <!-- Page 1 -->
    <section id="FindIdPDark"><div class="FP">
    <section id="FindIdP"></section><div id="close4"></div></div></section>
         <!-- -->
    
        <!-- Page 2 -->
    <section id= "PerDark"><div class= "PrDark"><section id="PerInfo" class="text-left container-fluid"></section><div id="close5"></div></div></section>
        <!-- -->
    
    <!-- -->

    <!-- check tasks -->

    <section id= "CheckTaskDark"><div class= "CheckTsDark"><section id="CheckTaskInfo" class="text-left container-fluid"></section><div id="close6"></div></div></section>
<!-- -->

<!-- End of First Section -->

















<!-- STart of Section 2 -->    
<section id="AddNew" class="my-3">

<div class="container text-left add">

<button class="btn border rounded m-2" id="OpenEmpInfo">+</button>
<label class="text-dark my-2 mx-1 text-justify">Add New Employee</label>


</div>

</section>


<section id= "AddDark"><div class= "AdDark"><section id="EmpInfo" class="text-left container-fluid"></section><div id="close0"></div></div></section>

<!-- End of Section 2 -->


<!-- Start of Section 3  -->


<section class="Viewer">
<div class="container EmplInfo">
    <div class="dick text-left"><h2 class="border rounded p-1">Employees Data</h2></div>
    <div>   

<table class="table table-strip">
<thead>
    <tr>
        <td>id</td>
        <td>Name</td>
        <td>Age</td>
        <td>Department</td>
        <td>City</td>
        <td>Mobile</td>
    </tr>
</thead>
<tbody id= "Handle">

</tbody>
</table>



</div>
</section>



<!-- End of Section 3  -->

</section>


`
document.getElementById("ContainHr").innerHTML=htmlC;
}
HR_M();

/////////////////////////////////////////////////////////
function AddPage(){
    var htmlContent = '';
    htmlContent += '<div class="container text-center"><div class="Dad"><h4>Add Employee</h4><form id="addempform"><div class="row pt-2 px-3"><div class="col-md-6"><div class="form-group"><label> Name : </label><input type="text" class="form-control" name="EmployeeName" id="EmployeeName" /></div><div class="form-group">   <label> Age : </label> <input type="number" class="form-control" id="EmployeeAge" name="EmployeeAge" /></div><div class="form-group"><label> Department : </label><input type="text" class="form-control" id="EmployeeDep" name="EmployeeDep" /></div><div class="form-group"> <label> State : </label><input type="text" class="form-control" id="EmployeeState" name="EmployeeState" /></div> <div class="form-group"><label> Role : </label><input type="text" class="form-control" name="EmployeeRole" id="EmployeeRole" /></div></div><div class="col-md-6"><div class="form-group"> <label> Id : </label><input type="text" class="form-control" name="id" id="id" /></div><div class="form-group">  <label> City : </label><input type="text" class="form-control" name="EmployeeCity" id="EmployeeCity" /></div><div class="form-group"><label> Mobile : </label><input type="text" class="form-control" name="EmployeeMobile" id="EmployeeMobile" /></div><div class="form-group"><label> E-mail : </label><input type="text" class="form-control" name="EmployeeEmail" id="EmployeeEmail"/></div><div class="form-group"><label> Image : </label><input type="text" class="form-control" name="EmployeeImage" id="EmployeeImage"/></div></div></div><div class="px-3"><div class="form-group text-center"><input type="submit" class="btn border rounded mt-2 px-5 py-2 btn-success" id="SavEmp" value="Add"/></div></form></div></div>';
    document.getElementById("EmpInfo").innerHTML = htmlContent;
}
AddPage();



////////////////////////////////////////////////


///////////////////////////////////

function UpdPage(){
    var htmlContent1 ='';
    htmlContent1 +='<div class="container text-center"><div class="Dad"><h4 class="p-4">Edit Form</h4><form id="editemp"><div class="row pt-2 px-3"><div class="col-md-6"><div class="form-group"><label> Name : </label><input type="text" class="form-control" id="EmployeeNameu" name="EmployeeName" /></div><div class="form-group">   <label> Age : </label> <input type="number" class="form-control" id="EmployeeAgeu" name="EmployeeAge" /></div><div class="form-group"><label> Department : </label><input type="text" class="form-control" id="EmployeeDepu" name="EmployeeDep" /></div><div class="form-group"> <label> State : </label><input type="text" class="form-control" id="EmployeeStateu" name="EmployeeState" /></div> <div class="form-group"><label> Role : </label><input type="text" class="form-control" id="EmployeeRoleu" name="EmployeeRole"  /></div></div><div class="col-md-6"><div class="form-group"> <label> Id : </label><input type="text" class="form-control" id="idu" name="id"  /></div><div class="form-group">  <label> City : </label><input type="text" class="form-control" id="EmployeeCityu" name="EmployeeCity"  /></div><div class="form-group"><label> Mobile : </label><input type="text" class="form-control" id="EmployeeMobileu" name="EmployeeMobile"  /></div><div class="form-group"><label> E-mail : </label><input type="text" class="form-control" id="EmployeeEmailu" name="EmployeeEmail" /></div><div class="form-group"><label> Image : </label><input type="text" class="form-control" id="EmployeeImageu" name="EmployeeImage" /></div></div></div><div class="px-3"><div class="form-group text-center"><input type="submit" class="btn border rounded mt-2 px-5 py-2 btn-success" value="update"/></div></form></div></div>';
    document.getElementById("EmpInfo1").innerHTML = htmlContent1;
}




//////////////////////////////////////////////////




/////////////////////////////////////////

$("#AddDark").fadeOut(0);
					$("#EmpInfo").css({"height" : 5*vh/6});
					$("#OpenEmpInfo").click(function(){
                        $("#AddDark").fadeIn(50);
                        document.getElementById("Handle").innerHTML="";

                    })
					$("#close0").click(function(){
						$("#AddDark").fadeOut(0);
					})


					UpdPage();
					$("#EditDark").fadeOut(0);
					$("#EditEmpInfo").click(function(){
                        $("#EditDark").fadeIn(100);
                        document.getElementById("Handle").innerHTML="";
					})
					$("#close2").click(function(){
						$("#EditDark").fadeOut(0);
						
					})
					function TskPage(){
						var htmlContent1 ='';
						htmlContent1 +=`<div class="container"><div class="Dad"><form id="taskform"><div class="row p-3"><div class="col-md-6"><div class="form-group"><label> TaskName : </label><input type="text" id="TaskName" name="TaskName" class="form-control"/></div><div class="form-group"><label> Start : </label><input type="text" id="Start33" class="form-control"/><label> id : </label><input type="text" id="idt" class="form-control"/></div></div><div class="col-md-6"><div class="form-group"><label> Supervisor : </label><input type="text" id="Supv" class="form-control"/></div><div class="form-group"><label> DeadLine : </label><input type="text" id="DeadLine" class="form-control"/></div></div></div><div class="p-3"><div class="form-group"><label> Description : </label><textarea type="text" id="Description" class="form-control"></textarea></div><div class="form-group text-center"><input class="btn btn-success" type ="submit" value="Add"/></div></div></form></div></div>
						`;
						document.getElementById("TaskInfo").innerHTML = htmlContent1;
					}
					TskPage();
					$("#TaskDark").fadeOut(0);
					$("#AddTask").click(function(){
						$("#TaskDark").fadeIn(100);
					})
					$("#close").click(function(){
						$("#TaskDark").fadeOut(100);
					})

					var tsk = document.getElementsByClassName("AddTask");
					var i;
					for (i = 0; i < close.length; i++) {
					tsk[i].onclick = function() {
						var div = this.parentElement;
						var div2 = div.parentElement.childNodes[1];
						div2.textContent = "none";
					}
                    }
                    function DelPage(){
                        var htmlContent = '';
                        htmlContent += '<div class="Dad container"><form id ="DeleteForm"><div class="form-group"><label> Enter Name : </label><input type="text" class="form-control" name="Name" id="Name"/></div><div class="px-3"><div class="form-group text-center"><input type="submit" class="btn btn-success border rounded mt-2 px-5 py-2" value="Delete"/></div></form></div>';
                        document.getElementById("FindIdD").innerHTML = htmlContent;
                    }
                    DelPage();
                    $("#FindIdDDark").fadeOut(0);
                    $("#Delete").click(function(){
                        $("#FindIdDDark").fadeIn(100);
                        document.getElementById("Handle").innerHTML="";
                    })
                    $("#close3").click(function(){
                        $("#FindIdDDark").fadeOut(100);
                    })



                    function PerPage(){
                        var htmlContent = '';
                        htmlContent += '<div class="Dad container"><form id ="PerForm"><div class="form-group"><label> Enter Name : </label><input type="text" class="form-control" name="Perk" id="Perk"/></div><div class="px-3"><div class="form-group text-center"><input class="btn border rounded mt-2 px-5 py-2 btn-success" type="submit" id="performemp" value="Find"/></div></div></form></div>';
                        document.getElementById("FindIdP").innerHTML = htmlContent;
                        var htmlContent1 ='';
                        htmlContent1 +='<div class="container"><div class="Dad p-3"><table class="table table-strip"><thead><tr><td>Properity</td><td>Value</td></tr></thead><tbody id="HHH"></tbody> </table></div></div>';
                        document.getElementById("PerInfo").innerHTML = htmlContent1;
                    }
                    PerPage();

                    $("#FindIdPDark").fadeOut(0);
                    $("#PerDark").fadeOut(0);
                    $("#PerInfo").css({"height" : 4*vh/5});
                    $("#OpenPerInfo").click(function(){
                        $("#FindIdPDark").fadeIn(100);
                    })
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
                               // $("#PerDark").fadeIn(100);
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
                    }
                    $("#PerForm").submit(function(event) {
                        // Prevent the form from submitting via the browser.
                        event.preventDefault();
                        ajaxGetOne();
                        $("#PerDark").fadeIn(50);
                    });
                    $("#close4").click(function(){
                        $("#FindIdPDark").fadeOut(100);
                    })
                    function chkTskPage(){
						var htmlContent1 ='';
						htmlContent1 =`<div class="container Dad p-4"><table class="table table-strip"><thead><tr><td>TaskNam</td><td>Deadline</td><td>Supervisor</td><td>EmployeeId</td></tr><thead><tbody id="TsTs"></tbody></div>
						`;
						document.getElementById("CheckTaskInfo").innerHTML += htmlContent1;
					}
					chkTskPage();
					$("#CheckTaskDark").fadeOut(0);
					$("#CheckTask").click(function(){
                        $("#CheckTaskDark").fadeIn(100);
                        ajaxPost();
					})
					$("#close6").click(function(){
						$("#CheckTaskDark").fadeOut(100);
					})
                    /////// tasks
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
                            success : function(employee) {
                                console.log
                                $('#TsTs').empty();
                                $.each(employee, function(i, tsk){
                                var htmlC = `<tr><td>`+tsk.TaskName+`</td><td>`+tsk.TaskDead+`</td><td>`+tsk.TaskSupv+`</td><td>`+tsk.id_emp+`</td></tr>`;
                                    document.getElementById("TsTs").innerHTML+=htmlC;})
                            },
                            error : function(e) {
                                alert("Error!")
                                console.log("ERROR: ", e);
                            }
                        });
                        /////info
                 
                 
                    }
                    
 









///////////////////////////////////////////////////////////





















                    ////////////////////////////////////////