function showOfficials(){  
  hist_push(11,"officials");
  var dtl=
  '<div class="w3-container w3-content w3-padding-32" style="border:1px solid red;">'+
    '<h2 class="w3-wide w3-center w3-padding">Officials</h2>'+    
    '<div class="w3-container w3-center w3-padding">'+
      '<div class="w3-container w3-card-4 w3-padding-16">'+                
        '<div id="dtl_officials" class="w3-row w3-justify">'+
          '<div class="w3-bar w3-white">'+
            '<button class="w3-bar-item w3-button tablink w3-purple" onclick="openCity(event,&quot;Mayor&quot;)">Mayor</button>'+
            '<button class="w3-bar-item w3-button tablink" onclick="openCity(event,&quot;ViceMayor&quot;)">Vice Mayor</button>'+
            '<button class="w3-bar-item w3-button tablink" onclick="openCity(event,&quot;Councilors&quot;)">Councilors</button>'+
          '</div>'+

          '<div id="Mayor" class="w3-container city">'+
            '<h2>London</h2>'+
            '<p>London is the capital city of England.</p>'+
          '</div>'+

          '<div id="ViceMayor" class="w3-container city" style="display:none">'+
            '<h2>Paris</h2>'+
            '<p>Paris is the capital of France.</p>'+
          '</div>'+

          '<div id="Councilors" class="w3-container city" style="display:none">'+
            '<h2>Councilors</h2>'+
            '<p>Tokyo is the capital of Japan.</p>'+
          '</div>'+

        '</div>'+    
      '</div>'+
    '</div>'+
  '</div>';  
  gotoDiv('sap');
  document.getElementById('sap').innerHTML=dtl;  
}

function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-purple", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-purple";
}