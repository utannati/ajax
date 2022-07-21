 // STEP 1: setup thexml http request object
 var ajax = new XMLHttpRequest();
 // STEP 2: prepare the open ajax request
 ajax.open('GET', 'content_1.html');
 //STEP 3: define the ajax response callback method
 ajax.onreadystatechange = function() {
     if (ajax.readyState = 4) {
         document.getElementById('content').innerHTML = ajax.responseText;
     }
 }
 // STEP 4: send the ajax reques for data
 function getContent() {
     ajax.send();
     document.getElementById('btn_content').style.display = content_1.html;
 }

 function loadDoc() {
    const ajax = new XMLHttpRequest();
    ajax.onload = function() {
      document.getElementById("content_1.html").innerHTML =
      ajax.responseText;
    }
    ajax.open("GET", "content_1.html");
    ajax.send();
  }