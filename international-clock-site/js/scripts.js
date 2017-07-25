//cityName is the parameter for this function
 function calculateTime(cityName) {
   //made a new dat object that would enable us to get the current hour/minutes etc.
   var d = new Date();
   // cityHour is the variable made to hold the cities Hour
   var cityHour;
   // we build our civilianTime.
   var civilianTime;
   var portlandTime = d.getHours();
   var minutes = d.getMinutes();

   if (minutes < 10) {
     minutes = "0" + minutes;
   }

   //we are setting the cityHour from the base of Portland Time.

   if (cityName === "Tokyo, Japan") {
     cityHour = portlandTime - 8;
   } else if (cityName === "Honolulu, Hawaii") {
     cityHour = portlandTime - 3;
   } else if (cityName === "Portland, Oregon") {
     cityHour = portlandTime;
   } else if (cityName === "Denver, Colorado") {
     cityHour = portlandTime + 1;
   } else if (cityName === "St. Louis, Missouri") {
     cityHour = portlandTime + 2;
   } else if (cityName === "New York, New York") {
     cityHour = portlandTime + 3;
   } else if (cityName === "St. Louis, Missouri") {
     cityHour = portlandTime + 8;
   } else if (cityName === "Paris, France") {
     cityHour = portlandTime + 9;
   } else if (cityName === "Athens, Greece") {
     cityHour = portlandTime + 10;
   }

if (cityHour < 0) {
  cityHour = 24 + cityHour;
} else if (cityHour > 23) {
  cityHour = cityHour - 24;
}

if (cityHour === 0 ) {
  civilianTime = "12:" + minutes + " AM";
} else if (cityHour >= 1 && cityHour <= 11) {
  civilianTime = cityHour +  ":" + minutes + " AM";
} else if (cityHour === 12){
  civilianTime = "12:" + minutes + " PM";
} else {
  civilianTime = (cityHour - 12) + ":" +  minutes + " PM";
}

return civilianTime;
}

$(document).ready(function() {
// currentCityName is a global variable to store the current h5 tags text before we change it to the time.
// this way we can reset the h5 back to the cityName after we mouseout.
var currentCityName;
$("h5")
  //When h5 is mousedover the code below will run line 57 through 61.
  .mouseover(function(event) {
   event.preventDefault();
   //jquery selects the text of the mouseover h5 with $(this) and stores it in variable cityName
   // then cityName is stored in a global variable currentCityName (so that when we mouseover we have the cityName saved.)
   var cityName = $(this).text();
   currentCityName = cityName;
   //we call the calculateTime function passing in cityName which returns the time for that city.
   var time = calculateTime(cityName);
   //then we are setting the h5 text to the selected time.
   $(this).text(time);
 })
 //when h5 is mouseout then currentCityName the text is being placed to the currentCityName.
  .mouseout(function(event) {
    $(this).text(currentCityName);
 });
});
