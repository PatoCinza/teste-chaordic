var HttpClient = function() {
    this.get = function(url, callback) {
        var req = new XMLHttpRequest();
        
        req.onreadystatechange = function() { 
            if (req.readyState == 4 && req.status == 200)
                callback(req.responseText);
        }

        req.open( "GET", url, true );            
        req.send( null );
    }
}

var client = new HttpClient();

window.onload = function() {
  client.get('http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X', function(response) {
    console.log(response);
  });
};