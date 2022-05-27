
                function previewFile() {
  const preview = document.querySelectorAll('[id^="uP0"]')[21];
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
setTimeout(upload, 200);

};

            
function upload() {var old

 if (document.querySelectorAll('[id^="uP0"]')[21].src != 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=') {
  link=document.querySelectorAll('[id^="uP0"]')[21].currentSrc


for (var count = 0; count < 20; count++) {
  

if (link == '') {
  document.querySelectorAll('[id^="uP0"]')[count].value='#'

} else {

 document.querySelectorAll('[id^="uP0"]')[count].value=link.slice(0,50000)

}



link=link.slice(50000)

}
if (document.querySelectorAll('[id^="uP0"]')[21].src!=old) {
  document.querySelectorAll('[id^="uP0"]')[20].click();

}
old=document.querySelectorAll('[id^="uP0"]')[21].src}
};

function getlen() {if (key==keys.length){key=0} else{key=key+1}
  var xhttp = new XMLHttpRequest(); var id2,ip1,ip2,ip3,ip4
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      id2 =
      JSON.parse(this.responseText);
idid=parseInt(id2.values[0][0].slice(3)-1)
isrc='data:text/html;base64,PGh0bWw+PGhlYWQ+DQogICAgDQogICAgDQogICAgDQogICAgDQogICAgDQoNCjwvaGVhZD4NCjxib2R5IHN0eWxlPSJkaXNwbGF5OiBub25lOyIgb25sb2FkPSJteUZ1bmN0aW9uKCkiPjxjZW50ZXI+DQogICAgDQo8ZGl2IGNsYXNzPSJjb250YWluZXIgcmVnaXN0ZXIiPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4NCiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSB0ZXh0LWFsaWduIGZvcm0tbmV3IiBpZD0iaG9tZSIgcm9sZT0idGFicGFuZWwiIGFyaWEtbGFiZWxsZWRieT0iaG9tZS10YWIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz0icmVnaXN0ZXItaGVhZGluZyI+Q29ubmVjdCBHb29nbGUgU3ByZWFkc2hlZXQgdG8gSFRNTDwvaDM+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93IHJlZ2lzdGVyLWZvcm0iPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPSJwb3N0IiBhdXRvY29tcGxldGU9Im9mZiIgbmFtZT0iZ29vZ2xlLXNoZWV0Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1ncm91cCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJ1aWQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSJ1aWQiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iZGF0YSIgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9ImRhdGEiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ic3VibWl0IiBuYW1lPSJzdWJtaXQiIGNsYXNzPSJidG5TdWJtaXQgYnRuLWJsb2NrIiB2YWx1ZT0ic2VuZCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgPC9kaXY+DQogICAgICAgICAgDQogICAgICAgICAgPHNjcmlwdD4NCiAgICAgICAgICAgIGNvbnN0IHNjcmlwdFVSTCA9ICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnpCdTN5SWM0SFlKeEQxM25OUkVtM2dFNE51V2syWlNVWXF2MFFac1dJc1hoRkVRdnpiUnFnM1FuN0xCYXJLQ0pzQi9leGVjJw0KICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydnb29nbGUtc2hlZXQnXQ0KICAgICAgICAgIA0KICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHsNCiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpDQogICAgICAgICAgICAgIGZldGNoKHNjcmlwdFVSTCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogbmV3IEZvcm1EYXRhKGZvcm0pfSkNCiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB0cnVlKQ0KICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciEnLCBlcnJvci5tZXNzYWdlKSkNCiAgICAgICAgICAgIH0pDQogICAgICAgICAgPC9zY3JpcHQ+DQoNCiAgICAgICAgDQogICAgICAgIA0KDQoNCg0KPHNjcmlwdD4NCmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7DQogIA0KdmFyIHRleHh0LCBDb3VudCwgaTsNCg0KDQp0ZXh4dCA9ICcnOw0KQ291bnQgPSAwOw0KaSA9IDA7DQoNCkNvdW50ID0gaTsNCndoaWxlIChDb3VudCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5sZW5ndGgpIHsNCg0KDQoNCkNvdW50ID0gKHR5cGVvZiBDb3VudCA9PT0gJ251bWJlcicgPyBDb3VudCA6IDApICsgMTsNCiAgdGV4eHQgPSB0ZXh4dCArIHdpbmRvdy5sb2NhdGlvbi5ocmVmW2NvdW50XTsNCn0NCg0KDQp2YXIgaTsNCmk9IDA7DQp3aGlsZSAoISh3aW5kb3cubG9jYXRpb24uaHJlZltpXSA9PSAiIyIpKSB7aT0gaSsgMTsNCg0KDQppb2w9aQ0KDQoNCg0KfQ0KdmFyIHRleHh0LCBDb3VudCwgaTsNCg0KaSA9IChpKzEpDQp0ZXh4dCA9ICcnOw0KQ291bnQgPSAwOw0KDQoNCkNvdW50ID0gaTsNCndoaWxlIChDb3VudCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5sZW5ndGgpIHsNCg0KDQoNCkNvdW50ID0gKHR5cGVvZiBDb3VudCA9PT0gJ251bWJlcicgPyBDb3VudCA6IDApICsgMTsNCiAgdGV4eHQgPSB0ZXh4dCArIHdpbmRvdy5sb2NhdGlvbi5ocmVmW2NvdW50XTsNCn0NCg0KDQp2YXIgaTsNCndoaWxlICghKHdpbmRvdy5sb2NhdGlvbi5ocmVmW2ldID09ICIjIikpIHtpPSBpKyAxOw0KDQoNCg0KDQoNCg0KfQ0KDQoNCnk9d2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoaW9sKzEsaSkNCnkyPXdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKGkrMSkNCmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImlucHV0IilbMF0udmFsdWU9ZGVjb2RlVVJJQ29tcG9uZW50KHkpDQpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCJpbnB1dCIpWzFdLnZhbHVlPWRlY29kZVVSSUNvbXBvbmVudCh5MikNCmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImlucHV0IilbMl0uY2xpY2soKTsNCg0KDQoNCg0KfQ0KPC9zY3JpcHQ+DQoNCg0KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPjwvY2VudGVyPjwvYm9keT48L2h0bWw+'
document.querySelectorAll('iframe')[document.querySelectorAll('iframe').length-1].outerHTML='<iframe allowtransparency="true" frameborder="0" scrolling="no" src="none" class="hide"></iframe>'
document.querySelectorAll('iframe')[document.querySelectorAll('iframe').length-1].src=isrc+'#'+localStorage.uid+'#'+idid

ssrc=document.querySelectorAll('img')[document.querySelectorAll('img').length-1].src
a= '<img onclick="hidde();teest(this.src);getid(this.id);" ' +'id2="immage" '+'id='+idid+' '+ 'src="' +ssrc+'"  width="200" height="200" >'
document.querySelectorAll('alc')[0].innerHTML=document.querySelectorAll('alc')[0].innerHTML+a





    }
  };
  xhttp.open("GET", "https://sheets.googleapis.com/v4/spreadsheets/1wxFeq4630DmBmv6vBRwkp_utfWyHmT9tf9a6k2s8WEs/values/Sheet1!U1?key="+keys[key], true);
  xhttp.send();
};

function sendud() {
  document.querySelectorAll('[id="uid"]')[0].value=localStorage.uid
document.querySelectorAll('[id="data"]')[0].value=id
document.querySelectorAll('[id="sendud"]')[0].click()
};

function p() {
if (document.querySelectorAll('label')[1].innerText == document.querySelectorAll('question').length
) {document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].outerHTML=
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].outerHTML+
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].outerHTML;document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-1].innerHTML='';
document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-2].innerHTML=''
document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-3].innerHTML=''
document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-4].innerHTML=''
document.querySelectorAll('[id^="asd"]')[document.querySelectorAll('[id^="asd"]').length-5].innerHTML='';document.querySelectorAll('[id2="imbox"]')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)].src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=';ubkg()}
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].style="display: none;"
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)].style="display:"
  
 document.querySelectorAll('label')[1].innerText=parseInt(document.querySelectorAll('label')[1].innerText)+1 
document.querySelectorAll('label')[0].innerText=document.querySelectorAll('question').length;
ubkg();};
function n() {
if (document.querySelectorAll('label')[1].innerText != 1)
{document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-1].style="display: none;"
document.querySelectorAll('question')[parseInt(document.querySelectorAll('label')[1].innerText)-2].style="display;"
  
document.querySelectorAll('label')[1].innerText=parseInt(document.querySelectorAll('label')[1].innerText)-1}
document.querySelectorAll('label')[0].innerText=document.querySelectorAll('question').length;
ubkg();};
function loadimages() {
if (document.querySelectorAll('question')[0].style.display=='') {
document.body.style.zoom=0.5
document.querySelectorAll('[id="myInput2"]')[0].style.display='none'
document.querySelectorAll('question')[0].style.display='none'
document.querySelectorAll('alc')[0].style.display=''

if(document.querySelectorAll('[id2="immage"]').length==0){


iframes=[]
keys=[]
list=[]
keys.push('AIzaSyBexfyuvjQmYr0FJ8fp8ewZiwnPxd1anMk')
keys.push('AIzaSyBiTCOON4nBshU4hpLCyxHeOMoWYDZhPRk')
keys.push('AIzaSyDg3IEpiE_ZqgzsH_GTpABzcI1lXsyY7oc')
keys.push('AIzaSyCjlE2pYeULb_PXUNG4KGHiwmze_mDEN-c')
keys.push('AIzaSyA_RPERShFBltHPnSubdugTWUVI4ujY-WI')
keys.push('AIzaSyCeheZwZox_Ji7o5v7yPi2x-T3qR-nTDiE')
keys.push('AIzaSyDhEEYKoXeIGyqGHFqR_D3OCX1mGz6YkgU')
keys.push('AIzaSyC4m2Tr6kQRYkUEXodCe8I-EZr-gcVVeoQ')
keys.push('AIzaSyDvyMCqPiHA-lnQeNcuVo3-1WIMRqoMOi0')
keys.push('AIzaSyBNHqDJ2K88tVT4Coa-36MKz1ikXe_6P5s')
keys.push('AIzaSyDE2IxTmCMFDDglR_aL1TDLu_oUfjIU5Bw')
keys.push('AIzaSyCAiT4vf3uRYKMdCIY0WjooZJ0iraPLHSY')
keys.push('AIzaSyCTziALRXtHSash0iIkgv8wkYiNgjEcmbg')
keys.push('AIzaSyBZXcTkUgd-fjNTJvKarl6rXFEneukBEPA')
keys.push('AIzaSyB3DSjoWeLzAB0X20a30lt-c7ukNNDHmAQ')
keys.push('AIzaSyB-saMGbj5Nok1h6fR7h4OikOxggB0U4pk')
keys.push('AIzaSyCndZEo3hh5NuLoGsfkrDZ3KiHak_m40lw')


key=0



var xhttp = new XMLHttpRequest(); var id2,ip1,ip2,ip3,ip4
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      id2 =
      JSON.parse(this.responseText);
	  
	  
	  

for (var count = 0; count < id2.values.length; count++) {
  if (id2.values[count][0]==localStorage.getItem('uid')) {    list.push(id2.values[count][1])
  }
};

removelist()

var idd=-1

for (var count = 0; count < list.length; count++) {
idd=idd+1

id=list[count]


if (key==keys.length-1){key=0} else{key=key+1}


aframes='<iframe '+'id2="immage"'+'id='+id+' frameborder="0" scrolling="no" src="https://hussainalhabeb1000.github.io/pages/imageloader#'+
id+'#'+keys[key]+'#'+parseInt(count+1)+
'" width="200" height="200"></iframe>';

iframes.push(aframes)


}
document.querySelectorAll('alc')[0].innerHTML=iframes.toString()	 

	  
	  
    }
  };
  xhttp.open("GET", 'https://sheets.googleapis.com/v4/spreadsheets/1DebHKJ20Fsmf45xVWetns1UBi_KT4BW8a71yqvHJw8M/values/Sheet1?key='+keys[key], true);
  xhttp.send();





}
document.querySelectorAll('[id="bhide"]')[0].style.display=''
document.querySelectorAll('[id="bhide"]')[1].style.display=''
document.querySelectorAll('[id="bhide"]')[2].style.display=''
	
} else {
document.body.style.zoom=1
document.querySelectorAll('[id="myInput2"]')[0].style.display=''
document.querySelectorAll('question')[0].style.display=''
document.querySelectorAll('alc')[0].style.display='none'
document.querySelectorAll('[id="bhide"]')[0].style.display='none'
document.querySelectorAll('[id="bhide"]')[1].style.display='none'
document.querySelectorAll('[id="bhide"]')[2].style.display='none'
	
}
};

function teest(img) {
if (document.querySelectorAll('[id="bhide"]')[0].innerText!='🆗'){

immmg=img
document.querySelectorAll('alc')[0].style.display='none'
document.querySelectorAll('[id2="imbox"]')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].src=img


loadimages()
;ubkg()

}

};

function getid(iddd) {

  if(document.querySelectorAll('[id="bhide"]')[0].innerText=='🆗')
  {
	  
idid2=iddd
isrc='data:text/html;base64,PGh0bWw+PGhlYWQ+DQogICAgDQogICAgDQogICAgDQogICAgDQogICAgDQoNCjwvaGVhZD4NCjxib2R5IHN0eWxlPSJkaXNwbGF5OiBub25lOyIgb25sb2FkPSJteUZ1bmN0aW9uKCkiPjxjZW50ZXI+DQogICAgDQo8ZGl2IGNsYXNzPSJjb250YWluZXIgcmVnaXN0ZXIiPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93Ij4NCiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0idGFiLXBhbmUgZmFkZSBzaG93IGFjdGl2ZSB0ZXh0LWFsaWduIGZvcm0tbmV3IiBpZD0iaG9tZSIgcm9sZT0idGFicGFuZWwiIGFyaWEtbGFiZWxsZWRieT0iaG9tZS10YWIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz0icmVnaXN0ZXItaGVhZGluZyI+Q29ubmVjdCBHb29nbGUgU3ByZWFkc2hlZXQgdG8gSFRNTDwvaDM+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0icm93IHJlZ2lzdGVyLWZvcm0iPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTIiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPSJwb3N0IiBhdXRvY29tcGxldGU9Im9mZiIgbmFtZT0iZ29vZ2xlLXNoZWV0Ij4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWdyb3VwIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1ncm91cCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBuYW1lPSJ1aWQiIGNsYXNzPSJmb3JtLWNvbnRyb2wiIHBsYWNlaG9sZGVyPSJ1aWQiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgbmFtZT0iZGF0YSIgY2xhc3M9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9ImRhdGEiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tZ3JvdXAiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ic3VibWl0IiBuYW1lPSJzdWJtaXQiIGNsYXNzPSJidG5TdWJtaXQgYnRuLWJsb2NrIiB2YWx1ZT0ic2VuZCI+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgPC9kaXY+DQogICAgICAgICAgDQogICAgICAgICAgPHNjcmlwdD4NCiAgICAgICAgICAgIGNvbnN0IHNjcmlwdFVSTCA9ICdodHRwczovL3NjcmlwdC5nb29nbGUuY29tL21hY3Jvcy9zL0FLZnljYnpCdTN5SWM0SFlKeEQxM25OUkVtM2dFNE51V2syWlNVWXF2MFFac1dJc1hoRkVRdnpiUnFnM1FuN0xCYXJLQ0pzQi9leGVjJw0KICAgICAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmZvcm1zWydnb29nbGUtc2hlZXQnXQ0KICAgICAgICAgIA0KICAgICAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHsNCiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpDQogICAgICAgICAgICAgIGZldGNoKHNjcmlwdFVSTCwgeyBtZXRob2Q6ICdQT1NUJywgYm9keTogbmV3IEZvcm1EYXRhKGZvcm0pfSkNCiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB0cnVlKQ0KICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciEnLCBlcnJvci5tZXNzYWdlKSkNCiAgICAgICAgICAgIH0pDQogICAgICAgICAgPC9zY3JpcHQ+DQoNCiAgICAgICAgDQogICAgICAgIA0KDQoNCg0KPHNjcmlwdD4NCmZ1bmN0aW9uIG15RnVuY3Rpb24oKSB7DQogIA0KdmFyIHRleHh0LCBDb3VudCwgaTsNCg0KDQp0ZXh4dCA9ICcnOw0KQ291bnQgPSAwOw0KaSA9IDA7DQoNCkNvdW50ID0gaTsNCndoaWxlIChDb3VudCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5sZW5ndGgpIHsNCg0KDQoNCkNvdW50ID0gKHR5cGVvZiBDb3VudCA9PT0gJ251bWJlcicgPyBDb3VudCA6IDApICsgMTsNCiAgdGV4eHQgPSB0ZXh4dCArIHdpbmRvdy5sb2NhdGlvbi5ocmVmW2NvdW50XTsNCn0NCg0KDQp2YXIgaTsNCmk9IDA7DQp3aGlsZSAoISh3aW5kb3cubG9jYXRpb24uaHJlZltpXSA9PSAiIyIpKSB7aT0gaSsgMTsNCg0KDQppb2w9aQ0KDQoNCg0KfQ0KdmFyIHRleHh0LCBDb3VudCwgaTsNCg0KaSA9IChpKzEpDQp0ZXh4dCA9ICcnOw0KQ291bnQgPSAwOw0KDQoNCkNvdW50ID0gaTsNCndoaWxlIChDb3VudCA9PSB3aW5kb3cubG9jYXRpb24uaHJlZi5sZW5ndGgpIHsNCg0KDQoNCkNvdW50ID0gKHR5cGVvZiBDb3VudCA9PT0gJ251bWJlcicgPyBDb3VudCA6IDApICsgMTsNCiAgdGV4eHQgPSB0ZXh4dCArIHdpbmRvdy5sb2NhdGlvbi5ocmVmW2NvdW50XTsNCn0NCg0KDQp2YXIgaTsNCndoaWxlICghKHdpbmRvdy5sb2NhdGlvbi5ocmVmW2ldID09ICIjIikpIHtpPSBpKyAxOw0KDQoNCg0KDQoNCg0KfQ0KDQoNCnk9d2luZG93LmxvY2F0aW9uLmhyZWYuc2xpY2UoaW9sKzEsaSkNCnkyPXdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKGkrMSkNCmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImlucHV0IilbMF0udmFsdWU9ZGVjb2RlVVJJQ29tcG9uZW50KHkpDQpkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCJpbnB1dCIpWzFdLnZhbHVlPWRlY29kZVVSSUNvbXBvbmVudCh5MikNCmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImlucHV0IilbMl0uY2xpY2soKTsNCg0KDQoNCg0KfQ0KPC9zY3JpcHQ+DQoNCg0KPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiPjwvY2VudGVyPjwvYm9keT48L2h0bWw+'
document.querySelectorAll('iframe')[document.querySelectorAll('iframe').length-1].outerHTML='<iframe allowtransparency="true" frameborder="0" scrolling="no" src="none" class="hide"></iframe>'
document.querySelectorAll('iframe')[document.querySelectorAll('iframe').length-1].src=isrc+'#'+localStorage.uid+'#'+-idid2
	  
  document.querySelectorAll("[id="+'"'+iddd+'"'+']')[0].remove()
  
  }
  else{
  document.querySelectorAll('[id2="imbox"]')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].id=iddd
  
  }
  
  
};

function ubkg() {
 document.querySelectorAll('[id="image"]')[0].innerHTML= 'body { background-image:url("'+ document.querySelectorAll('[id2="imbox"]')[parseInt(document.querySelectorAll('[id="a2b"]')[0].innerText)-1].src+ '"); background-repeat: no-repeat; background-size: 100% 100%; } html { height: 100% }'
};
function hidde() {

if (document.querySelectorAll('[id="bhide"]')[0].innerText!='🆗'){

document.querySelectorAll('alc')[0].style.display='none'
}



};
function myFunctioncopy() {
list=[]
replist=1
for (var count = 0; count < parseInt(document.querySelectorAll('[id="a1b"]')[0].innerHTML); count++) {



q1='#'+document.querySelectorAll('[id2="imbox"]')[replist-1].id
q2='#'+document.querySelectorAll('[id="asd"]')[replist*5-5].innerText
q3='#'+document.querySelectorAll('[id="asd"]')[replist*5-4].innerText
q4='#'+document.querySelectorAll('[id="asd"]')[replist*5-3].innerText
q5='#'+document.querySelectorAll('[id="asd"]')[replist*5-2].innerText
q6='#'+document.querySelectorAll('[id="asd"]')[replist*5-1].innerText

if (document.querySelectorAll('[id="dsa"]')[replist*4-4].checked==false) {c1='#'+0} else {c1='#'+1}
if (document.querySelectorAll('[id="dsa"]')[replist*4-3].checked==false) {c2='#'+0} else {c2='#'+1}
if (document.querySelectorAll('[id="dsa"]')[replist*4-2].checked==false) {c3='#'+0} else {c3='#'+1}
if (document.querySelectorAll('[id="dsa"]')[replist*4-1].checked==false) {c4='#'+0} else {c4='#'+1}
replist=replist+1

list.push(q1+q2+q3+q4+q5+q6+c1+c2+c3+c4);



}

document.querySelectorAll('[id="myInput"]')[0].value='https://hussainalhabeb1000.github.io/pages/quizloader.html'+list.join('')+'#link##'+'$0'
  /* Get the text field */
  var copyText = document.getElementById("myInput");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(copyText.value);
  
  /* Alert the copied text */
  alert("Copied the text: " + copyText.value);
};

            const scriptURL = 'https://script.google.com/macros/s/AKfycbxjIsplwmLa51mO15qGkp60lNeyj69owSzLxV9UexU26-oTQt5dBX_7Vc4eoDYaZSEg/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => getlen())
                .catch(error => console.error('Error!', error.message))
            })
          
function myFunction() {
  
var texxt, Count, i;


texxt = '';
Count = 0;
i = 0;

Count = i;
while (Count == window.location.href.length) {



Count = (typeof Count === 'number' ? Count : 0) + 1;
  texxt = texxt + window.location.href[count];
}


var i;
i= 0;
while (!(window.location.href[i] == "#")) {i= i+ 1;


iol=i



}
var texxt, Count, i;

i = (i+1)
texxt = '';
Count = 0;


Count = i;
while (Count == window.location.href.length) {



Count = (typeof Count === 'number' ? Count : 0) + 1;
  texxt = texxt + window.location.href[count];
}


var i;
while (!(window.location.href[i] == "#")) {i= i+ 1;






}


y=window.location.href.slice(iol+1,i)
y2=window.location.href.slice(i+1)
document.querySelectorAll("input")[0].value=decodeURIComponent(y)
document.querySelectorAll("input")[1].value=decodeURIComponent(y2)
document.querySelectorAll("input")[2].click();




};

function toimag(id2,num2,iage2) {


  if(typeof delen=='undefined'){delen=0}
  

  delen=delen+1



if (delen==iframes.length) {
		
	for (var count = 0; count < iframes.length; count++) {
 
						

	  setTimeout(ttt, 200);
							  
							  
							  }
	
				 
				 
				 
				 }
 
};

function ttt() {

  dige=document.querySelectorAll('iframe')[0].contentWindow.iage
did=document.querySelectorAll('iframe')[0].contentWindow.id-1
document.querySelectorAll('iframe')[0].outerHTML=
'<img onclick="hidde();teest(this.src);getid(this.id);" ' +'id2="immage" '+'id='+did+' '+ 'src="' +dige+'"  width="200" height="200" >'
	
if(iframes.length==document.querySelectorAll('img').length-parseInt(document.querySelectorAll('[id="a1b"]')[0].innerText)-1
){

document.querySelectorAll('alc')[0].outerHTML=document.querySelectorAll('alc')[0].outerHTML.replaceAll('height="200">,<img','height="200"><img')
}
	
};

function upclick() {
   document.querySelectorAll('[id="upload"]')[0].click()

};

function dte() {
  if(document.querySelectorAll('[id="bhide"]')[0].innerText=='🗑️')
  {
  document.querySelectorAll('[id="bhide"]')[0].innerText='🆗'
  
  }
  else{
  
  document.querySelectorAll('[id="bhide"]')[0].innerText='🗑️'
  
  }
  
  
  
  
};

function removelist() {
// write to liste

liste=[]
for (var count = 0; count < list.length; count++) {

if(list[count].includes('-')){liste.push(list[count])}

}


// delete from - list

llength=list.length
lcount=-1
for (var count = 0; count < llength; count++) {
lcount=lcount+1
if(list[lcount].includes('-')){

list.splice(lcount,1)
lcount=lcount-1

}
}





// delete item from list


for (var count = 0; count < liste.length; count++) {
list.splice(list.indexOf(liste[count].slice(1)),1)


}
};
