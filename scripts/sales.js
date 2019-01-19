// This is the bicycles Function
var bicycleObject = new XMLHttpRequest();
bicycleObject.open("GET", "https://sjkendall88.github.io/MountainSpoke/data/bicycle.json");
bicycleObject.responseType = "json";
bicycleObject.send();

bicycleObject.onload = function () {
    var bicycleInfo = bicycleObject.response;
    console.log(bicycleInfo);
    //First bicycle
    document.getElementById("name1").innerHTML = bicycleInfo.bicycle["0"].name
    document.getElementById("type1").innerHTML = bicycleInfo.bicycle["0"].type
    document.getElementById("color1").innerHTML = bicycleInfo.bicycle["0"].color
    document.getElementById("price1").innerHTML = bicycleInfo.bicycle["0"].price
    document.getElementById("desc1").innerHTML = bicycleInfo.bicycle["0"].description
    document.getElementById("image1").src = bicycleInfo.bicycle["0"].image
    //Second bicycle
    document.getElementById("name2").innerHTML = bicycleInfo.bicycle["1"].name
    document.getElementById("type2").innerHTML = bicycleInfo.bicycle["1"].type
    document.getElementById("color2").innerHTML = bicycleInfo.bicycle["1"].color
    document.getElementById("price2").innerHTML = bicycleInfo.bicycle["1"].price
    document.getElementById("desc2").innerHTML = bicycleInfo.bicycle["1"].description
    document.getElementById("image2").src = bicycleInfo.bicycle["1"].image
    //Third bicycle
    document.getElementById("name3").innerHTML = bicycleInfo.bicycle["2"].name
    document.getElementById("type3").innerHTML = bicycleInfo.bicycle["2"].type
    document.getElementById("color3").innerHTML = bicycleInfo.bicycle["2"].color
    document.getElementById("price3").innerHTML = bicycleInfo.bicycle["2"].price
    document.getElementById("desc3").innerHTML = bicycleInfo.bicycle["2"].description
    document.getElementById("image3").src = bicycleInfo.bicycle["2"].image
    //Fourth bicycle
    document.getElementById("name4").innerHTML = bicycleInfo.bicycle["3"].name
    document.getElementById("type4").innerHTML = bicycleInfo.bicycle["3"].type
    document.getElementById("color4").innerHTML = bicycleInfo.bicycle["3"].color
    document.getElementById("price4").innerHTML = bicycleInfo.bicycle["3"].price
    document.getElementById("desc4").innerHTML = bicycleInfo.bicycle["3"].description
    document.getElementById("image4").src = bicycleInfo.bicycle["3"].image
    // Fifth Bicycle
    document.getElementById("name5").innerHTML = bicycleInfo.bicycle["4"].name
    document.getElementById("type5").innerHTML = bicycleInfo.bicycle["4"].type
    document.getElementById("color5").innerHTML = bicycleInfo.bicycle["4"].color
    document.getElementById("price5").innerHTML = bicycleInfo.bicycle["4"].price
    document.getElementById("desc5").innerHTML = bicycleInfo.bicycle["4"].description
    document.getElementById("image5").src = bicycleInfo.bicycle["4"].image
    // Sixth Bicycle
    document.getElementById("name6").innerHTML = bicycleInfo.bicycle["5"].name
    document.getElementById("type6").innerHTML = bicycleInfo.bicycle["5"].type
    document.getElementById("color6").innerHTML = bicycleInfo.bicycle["5"].color
    document.getElementById("price6").innerHTML = bicycleInfo.bicycle["5"].price
    document.getElementById("desc6").innerHTML = bicycleInfo.bicycle["5"].description
    document.getElementById("image6").src = bicycleInfo.bicycle["5"].image
    //First bicycle
    document.getElementById("name7").innerHTML = bicycleInfo.bicycle["0"].name
    document.getElementById("type7").innerHTML = bicycleInfo.bicycle["0"].type
    document.getElementById("color7").innerHTML = bicycleInfo.bicycle["0"].color
    document.getElementById("price7").innerHTML = bicycleInfo.bicycle["0"].price
    document.getElementById("desc7").innerHTML = bicycleInfo.bicycle["0"].description
    document.getElementById("image7").src = bicycleInfo.bicycle["0"].image
}
