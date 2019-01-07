"use strict";

$(document).foundation();



function calc(){


    let billObj = $("#euro");
    let serviceObj = $("#service");
    let peopleObj = $("#share");

    let bill = billObj.val();
    let service = serviceObj.val();
    let people = peopleObj.val();

    if(bill && people) {
        let tip = (bill * service) / people;

        let final = Math.floor(tip*100)/100;
    
        $(".amount").text((final + " Euro").replace(".", ","));
    
    } else {
        alert("Felder ausfüllen");
    }

}
$(".button").click(function(){
    calc();
});

