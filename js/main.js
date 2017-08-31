window.onload = function() {  
    var script = document.createElement('script');
    script.src = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X';
    var header = document.getElementsByTagName('script')[0];
    header.parentNode.insertBefore(script, header);
    
};

function X(data) { //callback
  var dataFromServer = data;
  console.log(dataFromServer.data);
}

function nextPage() {
    var element = document.getElementById('list');
    var currentPosition = parseFloat(element.style.left.replace(/[^0-9\.\-]+/g, ""));
    var finalPosition = currentPosition + (-17.5);
    var id = setInterval(frame, 5);
    function frame() {
      if (currentPosition <= finalPosition) {
        clearInterval(id);
      } else {
        currentPosition--; 
        element.style.left = currentPosition + 'vw'; 
      }
    }
}

function previousPage() {
    var element = document.getElementById('list');
    var currentPosition = parseFloat(element.style.left.replace(/[^0-9\.\-]+/g, ""));
    var finalPosition = currentPosition + (17.5);
    var id = setInterval(frame, 5);
    function frame() {
      if (currentPosition >= finalPosition) {
        clearInterval(id);
      } else {
        currentPosition++; 
        element.style.left = currentPosition + 'vw'; 
      }
    }
}