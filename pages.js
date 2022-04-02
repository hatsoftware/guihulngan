function showArticles(){  
  //alert('articles daw');
  hist_push(10,"articles-all",JBE_SITE+"articles-all");
  var dtl=
  '<div id="jarticles" class="w3-container w3-content w3-center w3-padding-64" style="max-width:1090px;border:0px solid yellow;">'+
    '<h2 class="w3-wide">ARTICLES</h2>'+    
    '<div id="dtl_articles" class="w3-row w3-justify">'+
    '</div>'+    
    '<button onclick="gotoDiv_Page(&quot;articles&quot;)" class="w3-container w3-padding w3-center w3-btn w3-purple">Back</button>'+
  '</div>';  
  gotoDiv('sap');
  document.getElementById('sap').innerHTML=dtl;
  dispArticles(0); 
}

function showPhotos(){  
  hist_push(11,"photos-all",JBE_SITE+"photos-all");
  var dtl=
  '<div id="jphotos" class="w3-container w3-content w3-center  w3-padding-64" style="max-width:1090px;border:0px solid yellow;">'+
    '<h2 class="w3-wide">PHOTOS</h2>'+    
    '<div id="dtl_photos" class="w3-row w3-justify">'+
    '</div>'+    
    '<button onclick="gotoDiv_Page(&quot;photos&quot;)" class="w3-container w3-padding w3-center w3-btn w3-purple">Back</button>'+
  '</div>';  
  gotoDiv('sap');
  document.getElementById('sap').innerHTML=dtl;
  dispPhotos(0); 
}

function showVideos(){  
  hist_push(12,"videos-all",JBE_SITE+"videos-all");
  var dtl=
  '<div id="jvideos" class="w3-container w3-content w3-center w3-padding-64" style="max-width:1090px;border:0px solid yellow;">'+
    '<h2 class="w3-wide">VIDEOS</h2>'+    
    '<div id="dtl_videos" class="w3-row w3-justify">'+
    '</div>'+    
    '<button onclick="gotoDiv_Page(&quot;videos&quot;)" class="w3-container w3-padding w3-center w3-btn w3-purple">Back</button>'+
  '</div>';  
  gotoDiv('sap');
  document.getElementById('sap').innerHTML=dtl;
  dispVideos(0); 
}

//================================ DISPLAY ROUTINES ===============================================================

function dispArticles(ctr){
  var w3_css='w3-third';
  if(ctr==0 || ctr > DB_ARTICLES.length){ 
    ctr=DB_ARTICLES.length;   
    w3_css='w3-half';
  }
  //alert('ctr of dispArticles: '+DB_ARTICLES.length+' ctr len:'+ctr);
  DB_ARTICLES.sort(sortByMultipleKey(['*date']));
  //document.getElementById('wrapper').style.display='none';
  //document.getElementById('sap').style.display='block';
  
    var dtl2='';    
    for(var i=0;i<ctr;i++){      

      dtl2+=
      '<div id="dv_articles" class="w3-container '+w3_css+' w3-margin-top" style="border:0px solid red;height:330px;">'+

        '<div class="w3-container w3-card-4 w3-padding-16">'+          
          '<img class="w3-border w3-padding-12" width="100%" height="150px" src="'+DB_ARTICLES[i]["pic"]+'"/>'+ 
          '<div id="dv_story" class="w3-row w3-justify">'+DB_ARTICLES[i]['story']+'</div>'+                  
          '<div class="w3-row">'+
            '<h6 id="dv_date" class="w3-container w3-twothird w3-cell-bottom"><i>'+JBE_DATE_FORMAT(DB_ARTICLES[i]['date'],"MMM DD, YYYY")+'</i></h6>'+                    
            '<input type="button" class="w3-row w3-onethird w3-btn w3-purple" onclick="do_zoom_articles('+i+')" value="View"/>'+
          '</div>'+
        '</div>'+

      '</div>';       
    }    
  document.getElementById('dtl_articles').innerHTML=dtl2;  
}

function dispHappenings(){    
  var ctr=1;
  var dtl2='';
  for(var i=0;i<ctr;i++){
    dtl2+=
    '<div class="w3-container w3-center w3-margin-top" style="border:0px solid red;">'+
      '<div class="w3-container w3-card-4 w3-padding-16">'+
          '<img style="cursor:zoom-in;" width="100%"'+
            'src="'+DB_HAP[i]['pic']+'"'+
          '/>'+           
      '</div>'+
    '</div>';        
  }  
  document.getElementById('dtl_happenings').innerHTML=dtl2;
}

function dispPhotos(ctr){
  if(ctr==0){ ctr=DB_PHOTOS.length; }
  
  var dtl2='';
  for(var i=0;i<ctr;i++){
    dtl2+=
    '<div class="w3-container w3-third w3-margin-top" style="border:0px solid red;height:330px;">'+
      '<div class="w3-container w3-card-4 w3-padding-16">'+
          '<img onclick="do_zoom_photos('+i+')" style="cursor:zoom-in;" width="100%" height="200px"'+
            'src="'+DB_PHOTOS[i]['pic']+'"'+
          '/>'+ 
          '<span>'+DB_PHOTOS[i]['descrp']+'</span>'+
      '</div>'+
    '</div>';        
  }  
  document.getElementById('dtl_photos').innerHTML=dtl2;
}

function dispVideos(ctr){
  var w3_div='w3-half';
  if(ctr==0){ ctr=DB_VIDEOS.length; w3_div='w3-third'; }  
  
  var dtl2='';
  for(var i=0;i<ctr;i++){
    dtl2+=
    '<div class="w3-container '+w3_div+' w3-margin-top" style="border:0px solid red;height:330px;">'+
      '<div class="w3-container w3-card-4 w3-padding-16">'+
        '<iframe width="100%" height="200px"'+
          'src="'+DB_VIDEOS[i]['link']+'">'+
        '</iframe>'+ 
        '<span>'+DB_VIDEOS[i]['descrp']+'</span>'+
      '</div>'+
    '</div>';      
  }
  document.getElementById('dtl_videos').innerHTML=dtl2;
}

function do_zoom_articles(v){
  var dtl=
    '<div class="w3-container w3-padding-32">'+
      '<div id="zm_title" class="w3-row">'+DB_ARTICLES[v]['title']+'</div>'+
      '<img id="zm_img" src="'+DB_ARTICLES[v]['pic']+'" class="w3-image"/>'+ 
      '<div id="zm_story" class="w3-panel" style="text-align:left;">'+DB_ARTICLES[v]['story']+'</div>'+        
      '<div class="w3-container w3-center">'+
        '<input type="button" class="w3-btn w3-purple" onclick="document.getElementById(&quot;modalBox&quot;).style.display=&quot;none&quot;" value="Back"/>'+
      '</div>'+
    '</div>';
  
  DO_ZOOM(dtl);
}
function do_zoom_photos(v){
  var dtl=
    '<div class="w3-container w3-center w3-padding-32">'+      
      '<img id="zm_img" src="'+DB_PHOTOS[v]['pic']+'" class="w3-image"/>'+ 
      '<div id="zm_story" class="w3-panel" style="text-align:left;">'+DB_PHOTOS[v]['descrp']+'</div>'+        
      '<div class="w3-container w3-center">'+
        '<input type="button" class="w3-btn w3-purple" onclick="document.getElementById(&quot;modalBox&quot;).style.display=&quot;none&quot;" value="Back"/>'+
      '</div>'+
    '</div>';
  
  DO_ZOOM(dtl);
}

function DO_ZOOM(dtl){  
  document.getElementById('modalBody').innerHTML=dtl;
  document.getElementById('modalBox').style.display='block';
}

function logIn(){
  var dtl=
      '<form class="w3-container w3-content w3-padding-32">'+

        '<div class="w3-row w3-center">'+          
          '<img src="gfx/logo.png" alt="Avatar" class="w3-image">'+
        '</div>'+

        '<div class="w3-row w3-padding-12">'+        
          '<label for="uname" class="w3-row w3-left"><b>Username</b></label>'+
          '<input type="text" class="w3-row w3-left"style="width:100%;" placeholder="Enter Username" name="uname" required>'+
        '</div>'+
        '<div class="w3-row w3-padding-12">'+        
          '<label for="psw" class="w3-row w3-left" style="margin-top:10px;"><b>Password</b></label>'+
          '<input type="password" class="w3-row w3-left" style="width:100%;" placeholder="Enter Password" name="psw" required>'+
        '</div>'+
        
        '<button onclick="chk_login(uname.value,psw.value)" class="w3-button w3-block w3-purple" style="margin-top:20px;">Login</button>'+

        '<div class="w3-row w3-center w3-padding">'+
          '<input type="checkbox" checked="checked" name="remember"> Remember me'+
        '</div>'+
        
      '</form>';
  document.getElementById('modalBody').innerHTML=dtl;
  document.getElementById('modalBox').style.display='block';
}

function chk_login(u,p){
  var rval=false;
  //alert(u+' - '+p);
  if(!u || !p){ alert(3); return; }
  for(var i=0;i<DB_USER.length;i++){
    if(u==DB_USER[i]['userid'] && p==DB_USER[i]['pword']){      
      rval=true;
      break;
    }
  }
  if(rval){
    alert('yes');
  }else{        
    //alert('wala');
    document.getElementById('modalBox').style.display='none';
    snackBar('Access Denied...');
  }
}


