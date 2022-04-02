var DB_ARTICLES=[];  
var DB_PHOTOS=[];  
var DB_VIDEOS=[];  
var DB_USER=[];
var DB_HAP=[];  
/*
DB_VIDEOS=[
  { "link":"https://www.youtube.com/embed/1nZLaHcMFuE","descrp":"Guihulngan City Hymn" },
  { "link":"https://www.youtube.com/embed/8UREYvEXMt4","descrp":"Alkalde ng Guihulngan City, paano tutulungan ang mga estudyante sa Sitio Laos?" },
  { "link":"https://www.youtube.com/embed/z90qqrA7PY0","descrp":"Ceremonial vaccination of NORSU-Guihulngan City" },  
  { "link":"https://www.youtube.com/embed/sw7JFhgU1sw","descrp":"DepEd Guihulngan City Accomplisments 2020" },
  { "link":"https://www.youtube.com/embed/wzFurV9zfvM","descrp":"Balay Sungayan Highland Resort, Guihulngan City Negros Oriental (DJI Drone)" },
  { "link":"https://www.youtube.com/embed/G_lf-KHarDs","descrp":"GUIHULNGAN CITY | NEGROS ORIENTAL | CITY GUIDE | JHONGIX CHANNEL" }
];

DB_PHOTOS=[
  { "pic":"photos/fireworks.jpg","descrp":"Guihulngan City fireworks" },
  { "pic":"photos/sinulog.jpg","descrp":"Sinulog in Guihulngan City" },
  { "pic":"photos/carabell.jpg","descrp":"Carabell Football Club" },
  { "pic":"photos/fireworks.jpg","descrp":"Guihulngan City fireworks" },
  { "pic":"photos/sinulog.jpg","descrp":"Sinulog in Guihulngan City" },
  { "pic":"photos/carabell.jpg","descrp":"Carabell Football Club" }
];

DB_ARTICLES=[
  { "title":"Article 1","pic":"photos/fireworks.jpg","story":"Article 1 story","date":"2022-01-20" },
  { "title":"Article 2","pic":"photos/fireworks.jpg","story":"Article 2 story Article 2 story Article 2 story Article 2 story Article 3 story Article 2 story Article 2 story Article 2 story","date":"2022-01-20" },
  { "title":"Article 3","pic":"photos/fireworks.jpg","story":"Article 3 story Article 3 story Article 3 story Article 2 story","date":"2022-03-20" },
  
  { "title":"Article 4","pic":"photos/fireworks.jpg","story":"Article 4 story","date":"2022-01-20" },
  { "title":"Article 5","pic":"photos/fireworks.jpg","story":"story Article 2 story Article 2 story Article 2 story","date":"2022-01-20" },
  { "title":"Article 6","pic":"photos/fireworks.jpg","story":"Article 6 story","date":"2022-01-20" }
];
*/

get_db();

function get_db(){    
  DB_ARTICLES=[];  
  DB_PHOTOS=[];  
  DB_VIDEOS=[];  
  DB_USER=[];
  DB_HAP=[];
  //alert(JBE_API);
  dispProgress('dtl_articles');
  dispProgress('dtl_photos');
  dispProgress('dtl_videos');
  axios.post(JBE_API+'z_tanan.php', { request:0 },JBE_HEADER)
  .then(function (response) {    
    DB_ARTICLES = response.data[0];    
    console.log(DB_ARTICLES);
    DB_PHOTOS = response.data[1];   
    DB_VIDEOS = response.data[2];       
    DB_USER = response.data[3];    
    DB_HAP = response.data[4];    
    
    //alert('DB_ARTICLES '+DB_ARTICLES.length+'\n'+'DB_PHOTOS '+DB_PHOTOS.length+'\n'+'DB_VIDEOS '+DB_VIDEOS.length+'\n'+'DB_USER '+DB_USER.length);
    
    dispArticles(3);
    //dispHappenings();
    dispPhotos(3);
    dispVideos(2);
  })    
  .catch(function (err) {    
    console.log(err);
  });  
}

function dispProgress(div){
  var dtl=
    '<div class="w3-container w3-center w3-padding-64">'+      
      '<img class="w3-image" src="gfx/dots.gif"/>'+ 
    '</div>';   
  document.getElementById(div).innerHTML=dtl; 
}
