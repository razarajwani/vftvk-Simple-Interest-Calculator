function compute() {
    var principalSelector = document.getElementById("principal");
    var principal = principalSelector.value;
    if (principal <= 0 || principal == '') {
        alert('Enter a positive number');
        document.getElementById("result").innerHTML ='';
        principalSelector.focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = "If you deposit <span class='bgWarning'>" + principal + "</span>,\<br\>at an interest rate of <span class='bgWarning'>" + rate + "%</span>\<br\>You will receive an amount of <span class='bgWarning'>" + amount + "</span>,\<br\>in the year <span class='bgWarning'>" + year + "</span>\<br\>";
    
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval +'%';
}
