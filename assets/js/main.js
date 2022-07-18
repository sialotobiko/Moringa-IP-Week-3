function showReport(e) {
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

/*function totalProduction() {
    const shedA = parseInt(document.getElementById("sheda").value);
    const shedB = parseInt(document.getElementById("shedb").value);
    const shedC = parseInt(document.getElementById("shedc").value);
    const shedD = parseInt(document.getElementById("shedd").value);
} */
