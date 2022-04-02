function hist_push(id,plate,xurl){
  //alert(history.state.plate);
  var url=JBE_SITE+plate;
  if(plate=='home'){ url=JBE_SITE; }
  if(history.state.plate==plate){
    //alert('recorded already'); 
    return false; 
  }

  history.pushState( { 
    plate_id: id, 
    plate: plate
  }, null, url);  
  return true;
}
// ===================== NAVIGATION ROUTINE =========================================

window.onpopstate = function (event) {  
  var content = "";
  if(event.state) {
    content = event.state.plate;
  }
  //gotoDiv(content);
  //alert('window.onpopstate: '+content);
  if(content){ 
    if(content=='home'){
      gotoDiv_Home('wrapper');
    }else if(content=='videos-all'){
      showVideos();
    }else if(content=='photos-all'){    
      showPhotos();
    }else if(content=='articles-all'){
      showArticles();
    }else{
      gotoDiv_Page(content);
    }
  }else{
    //alert('wala content');
  }
}

history.pushState( { 
  plate_id: 1, 
  plate: 'home' 
}, null, JBE_SITE);
gotoDiv('wrapper');

//********************************************************** */

function gotoDiv_Page(d){  
  hist_push(2,d,JBE_SITE+d);
  gotoDiv(d);
}

function gotoDiv_Home(d){
  hist_push(1,"home",JBE_SITE);
  gotoDiv(d);
}

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
  elmnt.classList.remove('w3-animate-opacity');
  elmnt.scrollIntoView();    
  elmnt.classList.add('w3-animate-opacity');
}

