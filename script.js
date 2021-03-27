
var bottles = 0;



function water(given){
  standardCup = 16.9//oz
  //scPlasticCup = 9.25 //grams
  scPlastic = 143.565 //oz
  //standardGal = 128 //oz
  //ounces = given //oz
  total = given / standardCup
  totalPWater = total * scPlastic
  //water it takes to make plastic
  //takes 22 gal of water to make 1 lb of plastic
  //each 16.9 oz weighs 9.25 grams
  //1 lb = 453.593 grams
  //49.037 bottles per 22 gal water
  //(22*128 oz= 7040 oz)
  //7040 / 49.037 = 143.565 oz per bottle
  return totalPWater;
}
//1 oz of water equals to 8.495 oz on water to create plastic (9.25 grams)
let output = water.call(this, 1);
/*bottles saved is just count
water saved is water function 
plastic saved is 9.25 grams per 16.9 oz*/

//gets the input for the bottles drank from the html
//also displays the values on the webppage
//displays the water bottles saved on the webpage
function getRefills() {
  bottles = document.getElementById("bottlesDrankText").value;
  var ozPerBottle = document.getElementById("ozPerBottleText").value;
  document.getElementById("bottlesResultText").innerHTML = "Bottles Saved: " + bottles;
  document.getElementById("plasticResultText").innerHTML = "Plastic Saved: " + water.call(this, ozPerBottle).toFixed(2) + " oz";

  //clears the picture div 
  var div = document.getElementById("picsOfBottles"); 
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }

  //puts the water bottle pics in the div
  var i;
  for ( i = 0 ; i < bottles; i ++ )
  {
    var img = document.createElement("img"); 
    img.src = "waterBottle.jpg"; 
    var src = document.getElementById("picsOfBottles"); 

    img.style.height = '150px';
    img.style.width = '80px';
    src.appendChild(img);
  }
}

console.log(output);
var miles = 0;
var weight = 150;
var transport = "";

function caloriesBurnedWalking(miles,weight){
  var caloriesPerMileSlope = (65/120 + 100/180)/2; 
  caloriesPerMile = weight * caloriesPerMileSlope;
  return caloriesPerMile * miles;
}

function changeTransport(modeOfTransport){
  transport = modeOfTransport;
}

function getEmissionStats()
{
  miles = document.getElementById("milesTraveled").value;

  weight = document.getElementById("weight").value;
  
  document.getElementById("caloriesResultText").innerHTML = "Calories Burned: " + (caloriesBurnedWalking(miles,weight)).toFixed(2);
  
}
/*
function walking(miles,weight){
  caloriesPerMile = 100 //caloriesPerMile. Can be changed depending on users body weight(?)
  costSavings = costToRunGas
  //total gas costs saved
  let walkingOutput = [costSavings, caloriesPerMile]
  //array that returns both outputs for display
  //Print walking output to site
}

//average cost of gas is about $2.8
function driving(miles){
  //Gas Car
  milesPerGallon = 25 //Fuel consumption per mile
  pricePerGallon = 2.86 //national average for gas price per gallon
  avgco2PerMile = 404 //grams

  costToRunGas = (pricePerGallon / milesPerGallon) * miles
  
  co2Emitted = avgco2PerMile * miles //Total co2 emissions multiplied by miles traveled

  //Electric Vehicle
  evDrainPerMile = .3 //kWh
  avgUtilRate = .0013 //dollars
  
  costToRunEV = (evDrainPerMile * avgUtilRate) * miles 
  //Total cost to run an electric vehicle multiplied by the number of miles a user would like to travel

  let drivingOutput = [costToRunGas, co2Emitted, costToRunGas]

  //Print driving output to site
}*/
