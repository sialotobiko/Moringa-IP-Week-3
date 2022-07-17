function showReport(){

    let data = [];

     data[0] = data["sheda"] = parseInt(document.getElementById("sheda").value);
     data[1] = data["shedb"] = parseInt(document.getElementById("shedb").value);
     data[2] = data["shedc"] = parseInt(document.getElementById("shedc").value);
     data[3] = data["shedd"] = parseInt(document.getElementById("shedd").value);

    let sumData = data.sheda + data.shedb + data.shedc + data.shedd;

    document.getElementById("sheds").innerHTML += "<Br>"

    document.getElementById("sheds").innerHTML += "<p>Your production in shed A is " + data.sheda + " litres per day</p>";
    document.getElementById("sheds").innerHTML += "<p>Your production in shed B is " + data.shedb + " litres per day</p>";
    document.getElementById("sheds").innerHTML += "<p>Your production in shed C is " + data.shedc + " litres per day</p>";
    document.getElementById("sheds").innerHTML += "<p>Your production in shed D is " + data.shedd + " litres per day</p>";

    document.getElementById("sheds").innerHTML += "<p>Your total production per day is " + sumData + " litres per day</p>";

    dailyIncome = sumData * 45;

    document.getElementById("sheds").innerHTML += "<Br>"

    document.getElementById("sheds").innerHTML += "<hr>"

    document.getElementById("sheds").innerHTML += "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";

    document.getElementById("outputData").innerHTML += "<hr>"

    weeklyIncome = dailyIncome * 7;

    document.getElementById("sheds").innerHTML += "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";

    document.getElementById("sheds").innerHTML += "<hr>"

    document.getElementById("sheds").innerHTML += "<Br>"

}
function resetPage(){

    document.getElementById("outputData").remove("innerHTML");
    location.reload();
}