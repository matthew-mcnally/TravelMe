function callEvent(index, strType) {
  // calls events
//  alert(JSONevent["event"][index].eventType.toString());

  //get array of events
  var arrTemp = JSONevent;
  //loop through events
  for (var i = 0; i < arrTemp.length; i++) {
    if ((calcEventChance(i) == true) && (JSONevent[i].eventTypeWorkTravel.toString() == strType.toString())) {
      //event chance happened and TYPE is correct
      executeEvent(i);
    } //if (calcEventChance(arrTemp[i]) == true) {

  }//for

} //function


function calcEventChance(index) {
  // calc changce of event happen

  var strTemp = JSONevent[index].eventType
  var intChance = 0;

  switch (strTemp) {
    case "rare":
      intChance = 1;
    break;
    case "high":
      intChance = 50;
    break;
    case "medium":
      intChance = 25;
    break;
    case "low":
      intChance = 10;
    break;
    default:
      intChance = 1;
  } //switch

  // uses chancejs lib
  return chance.bool({likelihood: intChance});

} //function



function executeEvent(index) {


  swal(JSONevent[index].name, displayEventFactors(index), "warning");
//swal({ html:true, title:'<i>TITLE</i>', text:'<b>TEXT</b>'});
  //title, body text, message type
//  swal(JSONevent[index].name, displayEventFactors(index), "warning");

//  alert(displayEventFactors(index)); //display



//  executeEventFactors(index); //take away
//  displayMeObject(); //displays the user's details

}

function executeEventFactors(index) {

  var objEvent = JSONevent[index];

//  updateHistory("*" + objEvent.name);

  executeFactor("happiness", objEvent.happiness);
  executeFactor("money", objEvent.money);
  executeFactor("salary", objEvent.salary);
  executeFactor("daysLeft", objEvent.daysLeft);
  executeFactor("daysWorked", objEvent.daysWorked);
  executeFactor("travelledDistance", objEvent.travelledDistance);
  executeFactor("travelledDays", objEvent.travelledDays);


}

function executeFactor(strProperty, intFactor) {
  //add or take away the factor

  if (intFactor != 0) {
    JSONme[0][strProperty] = parseInt(JSONme[0][strProperty]) + parseInt(intFactor);
    updateHistory("*" + strProperty + " " + intFactor);
  }

} //function


function displayEventFactors(index) {
  //build up event text

  var objEvent = JSONevent[index];
  var strTemp = "";

      strTemp += objEvent.name + "\n";
      strTemp += objEvent.description + "\n";
      strTemp += objEvent.eventCategory + "\n";
      strTemp += objEvent.eventType + "\n";

      strTemp += displayFactor("happiness", objEvent.happiness);
      strTemp += displayFactor("money", objEvent.money);
      strTemp += displayFactor("salary", objEvent.salary);
      strTemp += displayFactor("daysLeft", objEvent.daysLeft);
      strTemp += displayFactor("daysWorked", objEvent.daysWorked);
      strTemp += displayFactor("travelledDistance", objEvent.travelledDistance);
      strTemp += displayFactor("travelledDays", objEvent.travelledDays);

  return strTemp;

} //function


function displayFactor(strProperty, intFactor) {
  //check for individual factors

  var strTemp = "";

  if (intFactor != 0) {
    strTemp = "Event Result : " + intFactor + " to " + strProperty  + "\n";
  }

  return strTemp;

} //function
