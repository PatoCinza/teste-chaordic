window.onload = function() {  
    var script = document.createElement('script');
    script.src = 'http://roberval.chaordicsystems.com/challenge/challenge.json?callback=X';
    var header = document.getElementsByTagName('script')[0];
    header.parentNode.insertBefore(script, header);
    
};

function X(data) { //callback
    var reference = data.data.reference;
    var recommendation = data.data.recommendation;
    buildReference(reference);
    buildRecomm(recommendation);
}

function buildRecomm(recomm) {
    var txt = "";
    for (var i = 0; i < recomm.length; i++) {
        txt += '<article>';
        txt += '<img src="http:' + recomm[i].imageName + '" alt="reference">';
        var name = (recomm[i].name);
        txt += '<p>'+ (recomm[i].name).substring(0, 99) +'... </p>';
        if(recomm[i].oldPrice)
            txt += '<p> De: '+recomm[i].oldPrice+'</p>';
        txt += '<p class="t-font-red">Por: '+recomm[i].price+ ' ' + recomm[i].productInfo.paymentConditions + '</p>';
        txt += '</article>';
    }

    var element = document.getElementById("list").innerHTML = txt;
}

function buildReference(ref) {
    var txt = '<article>';
    txt += '<img src="http:' + ref.item.imageName + '" alt="reference">';
    var name = (ref.item.name);
    txt += '<p>'+ (ref.item.name).substring(0, 99) +'... </p>';
    if(ref.item.oldPrice)
        txt += '<p> De: '+ref.item.oldPrice+'</p>';
    txt += '<p class="t-font-red">Por: '+ref.item.price+ ' ' + ref.item.productInfo.paymentConditions + '</p>';
    txt += '</article>';

    var element = document.getElementById("reference").innerHTML = txt;

}

function nextPage() {
    var element = document.getElementById('list'); 
    var currentPosition = parseFloat(element.style.transform.replace(/[^0-9\.\-]+/g, ""));
    var finalPosition = currentPosition + (-17.5);
    var id = setInterval(frame, 5);
    function frame() {
      if (currentPosition <= finalPosition) {
        clearInterval(id);
      } else {
        currentPosition--; 
        element.style.transform = 'translateX(' + currentPosition + 'vw)'; 
        element.style.WebkitTransform = 'translateX(' + currentPosition + 'vw)'; 
        element.style.msTransform = 'translateX(' + currentPosition + 'vw)'; 
      }
    }
}

function previousPage() {
    var element = document.getElementById('list');
    var currentPosition = parseFloat(element.style.transform.replace(/[^0-9\.\-]+/g, ""));
    var finalPosition = currentPosition + (17.5);
    var id = setInterval(frame, 5);
    function frame() {
      if (currentPosition >= finalPosition) {
        clearInterval(id);
      } else {
        currentPosition++; 
        element.style.transform = 'translateX(' + currentPosition + 'vw)'; 
        element.style.WebkitTransform = 'translateX(' + currentPosition + 'vw)'; 
        element.style.msTransform = 'translateX(' + currentPosition + 'vw)'; 
      }
    }
}