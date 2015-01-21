var names = ["Frank", "Ben", "Steph", "Pat"];

document.getElementById("one").addEventListener("click", showName);

function showName() {
    console.log(names[1]);
};

document.getElementById("two").addEventListener("click", count);

function count() {
    for (i = 1; i <= 10; i++) {
        console.log(i);
    };
};

document.getElementById("three").addEventListener("click", nameLoop);

function nameLoop() {
    for (l = 0; l < names.length; l++) {
        console.log(names[l]);
    };
};

document.getElementById("four").addEventListener("click", startsWith);

function startsWith() {
    for (k = 0; k < names.length; k++) {
        if (names[k].substring(0, 1) === "P") {
            console.log(names[k]);
        };
    };
};

var car = {
    doors: 4,
    cylinders: 6,
    honk: function() {
        console.log("HONK!!!");
        console.log(car);
    }
};

document.getElementById("five").addEventListener("click", car.honk);