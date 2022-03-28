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
  { "pic":"photos/sinulog.jpg","descrp":"Sinulog in Guihulngan City" },
  { "pic":"photos/carabell.jpg","descrp":"Carabell Football Club" },
  { "pic":"photos/fireworks.jpg","descrp":"Guihulngan City fireworks" },
  { "pic":"photos/sinulog.jpg","descrp":"Sinulog in Guihulngan City" },
  { "pic":"photos/carabell.jpg","descrp":"Carabell Football Club" }
];

var DB_ARTICLES=[
  { "title":"Article 1","pic":"photos/fireworks.jpg","story":"Article 1 story","date":"2022-01-20" },
  { "title":"Article 2","pic":"photos/fireworks.jpg","story":"Article 2 story Article 2 story Article 2 story Article 2 story Article 3 story Article 2 story Article 2 story Article 2 story","date":"2022-01-20" },
  { "title":"Article 3","pic":"photos/fireworks.jpg","story":"Article 3 story Article 3 story Article 3 story Article 2 story","date":"2022-03-20" },
  
  { "title":"Article 4","pic":"photos/fireworks.jpg","story":"Article 4 story","date":"2022-01-20" },
  { "title":"Article 5","pic":"photos/fireworks.jpg","story":"story Article 2 story Article 2 story Article 2 story","date":"2022-01-20" },
  { "title":"Article 6","pic":"photos/fireworks.jpg","story":"Article 6 story","date":"2022-01-20" }
];

function gotoDiv(d) {
  var disp1='block';
  var disp2='none';
  if(d=='sap'){
    disp1='none';
    disp2='block';
  }else{
    var iframe = document.querySelector('iframe');	
    if(iframe) {
      //alert('found iframe');
      document.getElementById('sap').innerHTML='';
      document.getElementById('wrapper').style.display='block';
    }
  }
  
  document.getElementById('wrapper').style.display=disp1;
  document.getElementById('sap').style.display=disp2;
  var elmnt = document.getElementById(d);
  elmnt.scrollIntoView();
}

function showVideos(d){
  document.getElementById('wrapper').style.display='none';
  document.getElementById('sap').style.display='block';
  var dtl=
  '<div id="jvideos" class="w3-container w3-content w3-center w3-padding-64" style="max-width:1090px;border:0px solid blue;">'+
    '<h2 class="w3-wide">VIDEOS</h2>'+    
    '<div class="w3-justify">';
    var dtl2='';
    for(var i=0;i<DB_VIDEOS.length;i++){
      dtl2+=
      '<div class="w3-container w3-third w3-margin-top" style="border:0px solid red;height:330px;">'+
        '<div class="w3-container w3-card-4 w3-padding-16">'+
          '<iframe width="100%" height="200px"'+
            'src="'+DB_VIDEOS[i]['link']+'">'+
          '</iframe>'+ 
          '<span>'+DB_VIDEOS[i]['descrp']+'</span>'+
        '</div>'+
      '</div>';      
    }
    dtl+=dtl2+
  '</div>'+
  '<button class="w3-container w3-padding w3-center w3-btn w3-purple" onclick="gotoDiv(&quot;latestVideos&quot;)">Back</button>';
  document.getElementById('sap').innerHTML=dtl;
  gotoDiv('sap');
}

function showPhotos(){
  document.getElementById('wrapper').style.display='none';
  document.getElementById('sap').style.display='block';
  var dtl=
  '<div id="jphotos" class="w3-container w3-content w3-center w3-padding-64" style="max-width:1090px;border:0px solid yellow;">'+
    '<h2 class="w3-wide">PHOTOS</h2>'+    
    '<div class="w3-justify">';
    var dtl2='';
    for(var i=0;i<DB_PHOTOS.length;i++){
      dtl2+=
      '<div class="w3-container w3-third w3-margin-top" style="border:0px solid red;height:330px;">'+
      '<div class="w3-container w3-card-4 w3-padding-16">'+
          '<img width="100%" height="200px"'+
            'src="'+DB_PHOTOS[i]['pic']+'"'+
          '/>'+ 
          '<span>'+DB_PHOTOS[i]['descrp']+'</span>'+
        '</div>'+
      '</div>';        
    }
    dtl+=dtl2+
  '</div>'+
  '<button class="w3-container w3-padding w3-center w3-btn w3-purple" onclick="gotoDiv(&quot;latestPhotos&quot;)">Back</button>';

  document.getElementById('sap').innerHTML=dtl;
  gotoDiv('sap');
}

function showArticles(){
  DB_ARTICLES.sort(sortByMultipleKey(['*date']));
  document.getElementById('wrapper').style.display='none';
  document.getElementById('sap').style.display='block';
  var dtl=
  '<div id="div_articles" class="w3-container w3-content w3-center w3-padding-32">'+
    '<h2 class="w3-wide">ARTICLES</h2>'+    
    '<div class="w3-justify">';
    var dtl2='';
    for(var i=0;i<DB_ARTICLES.length;i++){      

      dtl2+=
      '<div id="dv_articles" class="w3-container w3-third w3-margin-top" style="border:0px solid red;height:330px;">'+

        '<div class="w3-container w3-card-4 w3-padding-16">'+
          '<div class="w3-row">'+DB_ARTICLES[i]['title']+'</div>'+          
          '<img class="w3-border w3-padding-12" width="100%" height="150px"'+
            'src="'+DB_ARTICLES[i]['pic']+'"/>'+ 
          '<div id="dv_story" class="w3-row">'+DB_ARTICLES[i]['story']+'</div>'+        
          
          '<div class="w3-row">'+
            '<h6 id="dv_date" class="w3-container w3-twothird w3-cell-bottom"><i>'+JBE_DATE_FORMAT(DB_ARTICLES[i]['date'],"MMM DD, YYYY")+'</i></h6>'+        
            '<input type="button" class="w3-row w3-onethird w3-btn w3-purple" onclick="do_zoom_articles(&quot;div_zoom_articles&quot;,'+i+')" value="View"/>'+
          '</div>'+
        '</div>'+

      '</div>';       
    }
    dtl+=dtl2+
    '</div>'+
    '<button class="w3-container w3-padding w3-center w3-btn w3-purple" onclick="gotoDiv(&quot;latest&quot;)">Back</button>'+
  '</div>'+
  

  '<div id="div_zoom_articles" class="w3-container w3-content w3-center w3-padding-32" style="min-height:600px;display:none;">'+
  '</div>';

  document.getElementById('sap').innerHTML=dtl;  
  gotoDiv('sap');
}

function do_zoom_articles(div,v){
  var dtl=
    '<div class="w3-container w3-card-4 w3-padding-32">'+
      '<div id="zm_title" class="w3-row">'+DB_ARTICLES[v]['title']+'</div>'+
      '<img id="zm_img" src="'+DB_ARTICLES[v]['pic']+'" class="w3-image"/>'+ 
      '<div id="zm_story" class="w3-panel" style="text-align:left;">'+DB_ARTICLES[v]['story']+'</div>'+        
      '<div class="w3-container w3-center">'+
        '<input type="button" class="w3-btn w3-purple" onclick="close_zoom_articles(&quot;'+div+'&quot;)" value="Back"/>'+
      '</div>'+
    '</div>';

  if(div=='sap'){
    //document.getElementById('wrapper').style.display='none';
    //document.getElementById('sap').style.display='block';
    var ddtl=
      '<div class="w3-container w3-content w3-center w3-padding-32" style="min-height:600px;display:block;">'+
      dtl+'</div>';
    document.getElementById('sap').innerHTML=ddtl;  
    gotoDiv('sap');
  }else{
    document.getElementById('div_articles').style.display='none';
    document.getElementById('div_zoom_articles').style.display='block';
    document.getElementById(div).innerHTML=dtl;
  } 
}
function close_zoom_articles(div){
  if(div=='sap'){
    //document.getElementById('wrapper').style.display='block';
    //document.getElementById('sap').style.display='none';
    gotoDiv('latest');
  }else{
    document.getElementById('div_articles').style.display='block';
    document.getElementById('div_zoom_articles').style.display='none';
  }
}