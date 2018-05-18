$(document).ready(function(){
  $("#button").click(function(e){
    e.preventDefault();
    var name = $('#email').val();
    var culture = $('#exampleFormControlSelect1').val();
    var topic = $('#exampleFormControlSelect2').val();
    var text = $('#exampleFormControlTextarea1').val();
    console.log(name);
    console.log(culture);
    console.log(topic);
    console.log(text);
    alert('Thank you for your feedback!')
    clear();
  });
});

function clear(){
  var name = $('#email').val('');
  var culture = $('#exampleFormControlSelect1').val('');
  var topic = $('#exampleFormControlSelect2').val('');
  var text = $('#exampleFormControlTextarea1').val('');
}
