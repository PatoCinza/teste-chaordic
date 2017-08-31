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