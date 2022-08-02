

alert()
function windowlocationhash(hashh) { thash=0; while (window.location.hash.slice(2)[thash] != '/') {thash++} thash=thash+4; if (typeof hashh!='undefined'){window.location.hash=window.location.hash.slice(0,-(window.location.hash.slice(thash).length))+hashh}; return decodeURIComponent(window.location.hash.slice(thash)); };
function deldel() {
document.body.onload();};document.querySelectorAll('script')[document.querySelectorAll('script').length-1].remove();



