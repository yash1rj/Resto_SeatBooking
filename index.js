var defFoodType = document.getElementById("defFood");
var roomStat = document.getElementById("roomStat");

var op = document.getElementById("output");

op.className += "text-center";
op.innerHTML = `The default food type is: ${defFoodType.innerText}`;
op.innerHTML += `<br> The default room type is: ${roomStat.innerText}`;