// This is the Services Function
var serviceObject = new XMLHttpRequest();
serviceObject.open("GET", "https://sjkendall88.github.io/MountainSpoke/data/services.json");
serviceObject.responseType = "json";
serviceObject.send();
/* -------------- Franklin, MN -------------- */
serviceObject.onload = function() {
    var serviceInfo = serviceObject.response;
    console.log(serviceInfo);
    //First service
    document.getElementById("name1").innerHTML = serviceInfo.Services["0"].name
    document.getElementById("desc1").innerHTML = serviceInfo.Services["0"].description
    document.getElementById("cost1").innerHTML = serviceInfo.Services["0"].cost
    //Second service
    document.getElementById("name2").innerHTML = serviceInfo.Services["1"].name
    document.getElementById("desc2").innerHTML = serviceInfo.Services["1"].description
    document.getElementById("cost2").innerHTML = serviceInfo.Services["1"].cost
    //Third service
    document.getElementById("name3").innerHTML = serviceInfo.Services["2"].name
    document.getElementById("desc3").innerHTML = serviceInfo.Services["2"].description
    document.getElementById("cost3").innerHTML = serviceInfo.Services["2"].cost
    //Fourth service
    document.getElementById("name4").innerHTML = serviceInfo.Services["3"].name
    document.getElementById("desc4").innerHTML = serviceInfo.Services["3"].description
    document.getElementById("cost4").innerHTML = serviceInfo.Services["3"].cost
}
