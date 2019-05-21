var vh = window.innerHeight ;
var vw =window.innerWidth ;

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
var allData =[];

function table(){
  var Employee = {name : username.value ,pass : userpass.value , passc : userpassc.value , id :userId.value ,userfirst : userFN.value , userlast : userLN.value};
  allData.push(Employee);
}

var usernamel = document.getElementById("UserNameL");
var userpassl = document.getElementById("UserPassL");


function store(){
  var confirm = {name : usernamel.value ,pass : userpassl.value};
}