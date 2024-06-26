function move() {
    var loader = document.getElementById('loading_screen');
    var login_screen = document.getElementById('loading_screen_hide');
    // var overall = document.querySelector('.overall');
    console.log('loader--->',loader)
    login_screen.style.display ='none';
    loader.style.display = 'block';
    // overall.style.display = 'none';

    var elem = document.getElementById("myBar");   
    var width = 1;
    var id = setInterval(frame, 450);
    function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }

    
  }

function cancel(){
  var loader = document.getElementById('loading_screen');
    var login_screen = document.getElementById('loading_screen_hide');
    // var overall = document.querySelector('.overall');
    console.log('loader--->',loader)
    login_screen.style.display ='block';
    loader.style.display = 'none';
  }