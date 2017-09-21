$(function(){
  $("#jvectormap").vectorMap({
    map: "world_mill"
    ,backgroundColor: "#CCC"

    //******************************
    // START regions
    ,regionsSelectable: true
    ,regionStyle : {
      initial : {
        fill  : "#000"
        ,stroke: "#FFF"
      } //initial
      ,hover: {
          stroke: "#FFC107"
          ,"stroke-width": 2
          ,cursor: "pointer"
      }
      ,selected: {
          fill: "red"
      }
    } //regionStyle
    ,onRegionTipShow: function(event, element, index){
//      element.html(strTemp);
        //console.log(index);
    }
    ,onRegionClick: function(event, index) {

      var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
          mapObject.clearSelectedRegions();

    } //onRegionClick
    // END regions
    //******************************
    //******************************
    // START markers
    ,markersSelectable: true
    ,markers : JSONdestinations["destinations"] //Assign value from the JSON array
    ,markerStyle : {
      initial : {
        fill  : "#CCC"
        ,stroke: "red"
      } //initial
      ,hover: {
          stroke: "#FFC107"
          ,"stroke-width": 2
          ,cursor: "pointer"
      }
      ,selected: {
          stroke: "#FFC107"
          ,fill: "red"
      }
    } //markerStyle
    ,onMarkerTipShow: function(event, element, index){
      var strTemp = "";
          strTemp += JSONdestinations["destinations"][index].name;

          if (JSONme["me"][0].locationCurrent == index) {
            //Same location
            strTemp += "<br>";
            strTemp += "You are here!";
          } else {
          }

      element.html(strTemp);
    }
    ,onMarkerClick: function(event, index) {
      //alert(JSONdestinations["destinations"][index].latLng[0]);

      var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
          mapObject.clearSelectedMarkers();
          mapObject.markers[JSONme["me"][0].locationCurrent].element.setStyle("fill", "green");

      //getlocations
      var locationCurrent = JSONdestinations["destinations"][JSONme["me"][0].locationCurrent];
      var locationDestination = JSONdestinations["destinations"][index];


JSONme["me"][0].locationDestination = index; //temp store potential destination

      //console.log(JSONme["me"][0].locationCurrent);

      displayDestination(locationCurrent, locationDestination); //display destination details

//      console.log("Distance from " + JSONdestinations["destinations"][JSONme["me"][0].locationCurrent].name + " to " + JSONdestinations["destinations"][index].name + " : " + calcDistance(locationCurrent[0], locationCurrent[1], locationDestination.latLng[0], locationDestination.latLng[1], "KM") + " Kilometres");

    } //onMarkerClick
    // END markers
    //******************************
  }); //$("#jvectormap").vectorMap({

    //Set starting colours
    //ONLY HAPPENS ONCE?
    var mapObject = $("#jvectormap").vectorMap("get", "mapObject");
        mapObject.markers[JSONme["me"][0].locationCurrent].element.setStyle("fill", "green");
    //displayCurrent(JSONme["me"][0]);

}); //$(function(){
