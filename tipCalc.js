

document.body.style.backgroundColor = "#ffe6e6";


function getAmount(){
  var amountBill = document.getElementById("totalAmount").value;
  var numPeople = document.getElementById("numPeople").value;
  var tipSelect = document.getElementById("tipAmount");
  var tipPercent = tipSelect.options[tipSelect.selectedIndex].value;
  
  
  if (!amountBill) {
    alert("Enter an amount");
  } else if (!numPeople) {
    alert("Enter number people sharing the tip");
  } else if (tipPercent ==0){
    document.getElementById('tipTotal').innerHTML='$ 0.00';
  } else {
    var tipTotal = (amountBill * tipPercent)/numPeople;
    tipTotal = tipTotal.toFixed(2);
    document.getElementById('tipTotal').innerHTML='$ '+ tipTotal;
  }
}
