



function load(htmll) {
  const myWindow = window.open("", "_self");
	
        g='\x3Cscript type="text/javascript" src="html.js">\x3C/script>'

	htmll=htmll+g

  myWindow.document.write(htmll);

//myWindow.eval(`for (var count = 0; count < document.querySelectorAll('script').length; count++) {eval(document.querySelectorAll('script')[count].innerHTML)}`)//
   
	
   for (var count = 0; count < document.querySelectorAll('script').length; count++) {eval(document.querySelectorAll('script')[count].innerHTML)}

	
	
	
	
  if(count==document.querySelectorAll('script').length){
  
	  if(typeof deldel=='undefined'){document.querySelectorAll('script')[document.querySelectorAll('script').length-1].remove()} else{setTimeout(deldel, 0000)}
	  
  //document.querySelectorAll('body')[0].onload()//
  
  }




}



function windowlocationhash(hashh) { thash=0; while (window.location.hash.slice(2)[thash] != '/') {thash++} thash=thash+4; if (typeof hashh!='undefined'){window.location.hash=window.location.hash.slice(0,-(window.location.hash.slice(thash).length))+hashh}; return decodeURIComponent(window.location.hash.slice(thash)); };
function deldel() {
document.body.onload();};document.querySelectorAll('script')[document.querySelectorAll('script').length-1].remove();



