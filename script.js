



document.addEventListener('DOMContentLoaded', function () {




    function getParameterByName(name, url = window.location.href) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    
    
    
    var nameee = getParameterByName('name');
    
    var d = getParameterByName('date');
    var c = getParameterByName('course');
    console.log(nameee);
    document.getElementById('n').innerText=nameee;
    document.getElementById('d').innerText=d;
    document.getElementById('course').innerText=c;
    





    
  }, false);

  function printDiv(divName) {
    console.log("i'm Working FIne....");
    var printContents = document.getElementById(divName);
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
