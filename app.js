

$(function(){
var myObject;

  $("#myForm").on("submit", function(event) {
    event.preventDefault();

    myObject= $("#myForm").serializeArray();

    var employee = {};

    employee.firstName = $("#firstName").val();
    employee.lastName= $("#lastName").val();
    employee.empNum = $("#empNum").val();
    employee.title = $("#title").val();
    employee.reviewScore = $("#reviewScore").val();
    employee.salary = $("#salary").val();



    var employeeString = "<li>First Name:" +employee.firstName + " Last Name: " + employee.lastName + " Employee Number:  " + employee.empNum + " Title:  " + employee.title + " Review Score: " +employee.reviewScore+ " Salary: "+ employee.salary + " "+"<button class=\"remove\">Remove</button>"+"</li>";

    $("ul").append(employeeString);
//a switch was not used because at the time we had the input type as test so it
//was returning a string so it wasn't working.  It would now work.
        if(employee.reviewScore == 1){
          $("li").last().css("color", "red");
        }
        else if(employee.reviewScore == 2){
          $("li").last().css("color", "orange");
        }
        else if(employee.reviewScore == 3){
          $("li").last().css("color", "rgb(137, 254, 184)");
        }
        else if(employee.reviewScore == 4){
          $("li").last().css("color", "blue");
        }
        else {
          $("li").last().css("color", "yellow");
        }



});
//the button isn't there when the page is loaded
//you want the click handler to refer to something that is alrady on the screen
//you can use the document, body, etc..  then you can select the button class
//after the "click"

$("#list").on("click", ".remove", function(){
  $(this).parent().remove();
});

$("button").on("click",function(event){
  // var random = makeid();
  $("#firstName").val(makeid());
  $("#lastName").val(makeid());
  $("#empNum").val(Math.floor(Math.random()* 100));
  $("#title").val(makeid());
  $("#reviewScore").val(Math.floor(Math.random()* 5));
  $("#salary").val(Math.floor(Math.random()* 10000));

});

});
//The below function was found on stack overflow and is used to find a random name
function makeid()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
