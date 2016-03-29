

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



    var employeeString = "<li>" +employee.firstName + " " + employee.lastName + " " + employee.empNum + " " + employee.title + " " +employee.reviewScore+ " "+ employee.salary +"<button id=\"remove\">Remove</button>"+"</li>";

    $("ul").append(employeeString);

if(employee.reviewScore == 1){
  $("li").last().css("color", "red");
}
else if(employee.reviewScore == 2){
  $("li").last().css("color", "orange");
}
else if(employee.reviewScore == 3){
  $("li").last().css("color", "green");
}
else if(employee.reviewScore ==4){
  $("li").last().css("color", "blue");
}
else {
  $("li").last().css("color", "yellow");
}




});
$("#list").on("click", "#remove", function(){
  $(this).parent().remove();
});

});
