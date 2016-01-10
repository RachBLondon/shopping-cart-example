(function(){
  console.log("hello world")
  // document.cookie"userId=0003";
  document.cookie="userId=0003";
  var out = new XMLHttpRequest()

  var sportsChannels = [];
  var newsChannels = ["Sky News", "Sky Sports News"];

  var getSportChannels = function(location){
      if (location === "London"){
        sportsChannels.push("Arsenal TV","Chelsea TV");
      } else if (location === "Liverpool"){
        sportsChannels.push("Liverpool TV");
      }
      return sportsChannels;
  }


  var printOptions = function(channelArray, areaId) {
    checkBoxArea = document.getElementById(areaId);

    channelArray.map(function(channel){
      var divCheckBox = document.createElement('div');
      var channelId = channel.replace(/\s+/g, '');
      var checkbox = document.createElement('input');
      var label = document.createElement('label');

      divCheckBox.className = "checkbox";
      checkbox.type = "checkbox";
      checkbox.name = channel;
      checkbox.value = channel;
      checkbox.id = channelId;
      label.htmlFor = channelId;

      checkBoxArea.appendChild(divCheckBox);
      divCheckBox.appendChild(label);
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(channel));
    });
  }



  out.onreadystatechange = function() {
    if (out.readyState === 4 && out.status === 200) {
      //handle callback her
      var location = JSON.parse(out.responseText)[0].location;
      console.log(location);
      printOptions(getSportChannels(location),"sportsArea");

      }
  }
  console.log("sending XML");
  out.open('GET', '/users/userlist');
  out.send(document.cookie);

printOptions(newsChannels, "newsArea");


})();
