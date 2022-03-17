var DB_VIDEOS=[
  { "link":"https://www.youtube.com/embed/1nZLaHcMFuE","descrp":"Guihulngan City Hymn" },
  { "link":"https://www.youtube.com/embed/8UREYvEXMt4","descrp":"Alkalde ng Guihulngan City, paano tutulungan ang mga estudyante sa Sitio Laos?" },
  { "link":"https://www.youtube.com/embed/z90qqrA7PY0","descrp":"Ceremonial vaccination of NORSU-Guihulngan City" },  
  { "link":"https://www.youtube.com/embed/sw7JFhgU1sw","descrp":"DepEd Guihulngan City Accomplisments 2020" },
  { "link":"https://www.youtube.com/embed/wzFurV9zfvM","descrp":"Balay Sungayan Highland Resort, Guihulngan City Negros Oriental (DJI Drone)" },
  { "link":"https://www.youtube.com/embed/G_lf-KHarDs","descrp":"GUIHULNGAN CITY | NEGROS ORIENTAL | CITY GUIDE | JHONGIX CHANNEL" }
];

var DB_PHOTOS=[
  { "pic":"photos/fireworks.jpg","descrp":"Guihulngan City fireworks" },
  { "pic":"photos/fireworks.jpg","descrp":"Guihulngan City fireworks" },
  { "pic":"photos/fireworks.jpg","descrp":"Guihulngan City fireworks" },
];


function home(){
  document.getElementById('wrapper').style.display='block';
  document.getElementById('sap').style.display='none';
}

function gotoDiv(d) {
  document.getElementById('wrapper').style.display='block';
  document.getElementById('sap').style.display='none';
  var elmnt = document.getElementById(d);
  elmnt.scrollIntoView();
}

function showVideos(){
  document.getElementById('wrapper').style.display='none';
  document.getElementById('sap').style.display='block';
  var dtl=
  '<div class="w3-container w3-content w3-center w3-padding-32" style="max-width:1090px;border:0px solid yellow;">'+
    '<h2 class="w3-wide">VIDEOS</h2>'+    
    '<div class="w3-justify">';
    var dtl2='';
    for(var i=0;i<DB_VIDEOS.length;i++){
      dtl2+=
      '<div class="w3-card" style="float:left;border:0px solid lightgray;margin:10px;padding:5px;width:320px;height:300px;overflow:auto;">'+
        '<iframe width="100%" height="200px"'+
          'src="'+DB_VIDEOS[i]['link']+'">'+
        '</iframe>'+ 
        '<span>'+DB_VIDEOS[i]['descrp']+'</span>'+
      '</div>';      
    }
    dtl+=dtl2+
  '</div>';

  document.getElementById('sap').innerHTML=dtl;
}

function showPhotos(){
  document.getElementById('wrapper').style.display='none';
  document.getElementById('sap').style.display='block';
  var dtl=
  '<div class="w3-container w3-content w3-center w3-padding-32" style="max-width:1090px;border:0px solid yellow;">'+
    '<h2 class="w3-wide">PHOTOS</h2>'+    
    '<div class="w3-justify">';
    var dtl2='';
    for(var i=0;i<DB_PHOTOS.length;i++){
      dtl2+=
      '<div class="w3-card" style="float:left;border:0px solid lightgray;margin:10px;padding:5px;width:320px;height:300px;overflow:auto;">'+
        '<img width="100%" height="200px"'+
          'src="'+DB_PHOTOS[i]['pic']+'"'+
        '/>'+ 
        '<span>'+DB_PHOTOS[i]['descrp']+'</span>'+
      '</div>';      
    }
    dtl+=dtl2+
  '</div>';

  document.getElementById('sap').innerHTML=dtl;
}