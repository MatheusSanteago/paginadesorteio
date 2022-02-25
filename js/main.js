let numbers = []

    var a = localStorage.getItem('numbers')

function selectNumbers() {
    
    inputValue = document.getElementById('input_numbers').value;
    valueToNumber = parseInt(inputValue)
    
    let numbersJSON = JSON.stringify(valueToNumber)
    console.log(valueToNumber);

    if (isNaN(numbersJSON)){
        alert('Digite um valor correto')
        localStorage.getItem('numbers');
        localStorage.clear('numbers','null');

    } else if (valueToNumber <= 0){
        alert('Digite um valor acima de 0');
    } else {}

    numbers.push(numbersJSON);
    localStorage.setItem('numbers',numbers);
  
}

function drawNumbers() {
    localStorage.getItem('numbers') 

    let l = numbers.length
    let ns = Math.floor(Math.random() * l)

    document.getElementById('span').innerHTML = " O número sorteado foi: " + numbers[ns];
}

function refreshPage(){
    window.location.reload();
} 
