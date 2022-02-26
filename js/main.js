var numbers = [];
var names = [];

function selectNumbers() {
  localStorage.setItem("numbers", numbers);
  inputValue = document.getElementById("input_numbers").value;
  valueToNumber = parseInt(inputValue);

  let numbersJSON = JSON.stringify(valueToNumber);
  console.log(valueToNumber);

  if (isNaN(numbersJSON)) {
    alert("Digite um valor correto");
  } else if (valueToNumber <= 0) {
    alert("Digite um valor acima de 0");
  } else {
  }

  numbers.push(numbersJSON);
}
function drawNumbers() {

  let l = numbers.length;
  let ns = Math.floor(Math.random() * l);

  document.getElementById("span").innerHTML =
    " O número sorteado foi: " + numbers[ns];
}
function refreshPage() {
  window.location.reload();
}
// FUNÇÕES DE SORTEIO PARA NOMES
function insertName() {

  let nameValue = document.getElementById("input_names").value;

  names.push(nameValue);

  console.log(names);
}

function drawNames() {

  let nameLength = names.length;
  let random = Math.floor(Math.random() * nameLength);
  
  document.getElementById('span2').innerHTML = " O número sorteado foi " +  names[random];
}
