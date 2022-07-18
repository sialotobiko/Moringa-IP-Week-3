function showReport(e) { //gets data from form and displays the report
  e.preventDefault();

  const shedA = parseInt(document.getElementById("sheda").value);
  document.getElementById("o1").innerHTML =
    "Your production in Shed A is " + shedA + " litres per day ";
  console.log(shedA);

  const shedB = parseInt(document.getElementById("shedb").value);
  document.getElementById("o2").innerHTML =
    "Your production in Shed B is " + shedB + " litres per day ";
  console.log(shedB);

  const shedC = parseInt(document.getElementById("shedc").value);
  document.getElementById("o3").innerHTML =
    "Your production in Shed C is " + shedC + " litres per day ";
  console.log(shedC);

  const shedD = parseInt(document.getElementById("shedd").value);
  document.getElementById("o4").innerHTML =
    "Your production in Shed D is " + shedD + " litres per day ";
  console.log(shedD);

  const data = [shedA, shedB, shedC, shedD];
  const sum = data.reduce((x, y) => x + y, 0);
  var totalProd = parseInt(sum);
  document.getElementById("o5").innerHTML =
    "Your production in all Sheds is " + totalProd + " litres per day ";
  console.log(totalProd);
}

submit.addEventListener("click", showReport);

/*function resetPage(){

    document.getElementById("outputData").remove("innerHTML");
    location.reload();
}*/

function incomeOverTime(sellingPrice, time) {
  sellingPrice = document.getElementById("sellp").value;
  time = document.getElementById("timeperiod").value;

  const shedA = parseInt(document.getElementById("sheda").value);
  const shedB = parseInt(document.getElementById("shedb").value);
  const shedC = parseInt(document.getElementById("shedc").value);
  const shedD = parseInt(document.getElementById("shedd").value);
  
  const data = [shedA, shedB, shedC, shedD];
  const sum = data.reduce((x, y) => x + y, 0);
  var totalProd = parseInt(sum);
  console.log(totalProd);

 

  let weekly_income = totalProd * sellingPrice * (time * 7);
  let yearly_income = totalProd * sellingPrice * (time * 365);
  parseInt(weekly_income);
  parseInt(yearly_income);

  document.getElementById("weekly_income").innerHTML = "Your weekly income is " + weekly_income;
  document.getElementById("yearly_income").innerHTML = "Your yearly income is " + yearly_income;

}
submit2.addEventListener("click", incomeOverTime);
