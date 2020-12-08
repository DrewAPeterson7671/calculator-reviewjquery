
let funk = {
  add: function(number1, number2) {
    return number1 + number2;
  },

  subtract: function(number1, number2) {
    return number1 - number2;
  },

  multiply: function(number1, number2) {
    return number1 * number2;
  },

  divide: function(number1, number2) {
    return number1 / number2;
  }
}

$(document).ready(function() {
  $("form#calculate").submit(function(event) {
    event.preventDefault();
    let calcType = $("input[name='calcType']:checked").val();
    console.log(calcType);
    let number1 = parseInt($("#num1").val());
    let number2 = parseInt($("#num2").val());
    let result = funk[calcType](number1, number2);
    console.log(result);
    $("#output").text(result);
  })
})