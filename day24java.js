$( document ).ready(function() {

let nameinput = $("#name")
let emailinput = $("#email")
let phoneinput = $("#phone")

$("#submit").on("click", () => {
  alert('You submittted!');

let required = [nameinput, emailinput, phoneinput]

for(let inputs of required){
  if ( inputs.val() == "" ){
    $("#message").prev().text("Please Fill Out Required Field")
    $("#message").prev().addClass("warning")
     inputs.prev().addClass("warning")
  } else { 
    inputs.prev().removeClass("warning")

}
}

if($("label").hasClass("warning")){
} else {
  $("#form").remove()
  $("h2").text("Thanks for your feedback")
}})


});