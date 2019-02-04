// Quote Calculator
var employee;
var revenue;
var total;
var audit;


document.onkeyup = function calc() {
    employee = document.getElementById('employees').value;
    revenue = document.getElementById('revenue').value;
    total = (.5 * employee) + (.0001 * revenue) + (125) ;

    if (document.getElementById('non-profit').checked) {
        total *= .9;
    }

    document.getElementById('cost').innerHTML = '$' + total.toFixed(2);
}

function handleChange(checkbox) {
    employee = document.getElementById('employees').value;
    revenue = document.getElementById('revenue').value;
    total = (.5 * employee) + (.0001 * revenue) + (125) ;

    if (document.getElementById('non-profit').checked) {
        total *= .9;
    }

    document.getElementById('cost').innerHTML = '$' + total.toFixed(2);
}

