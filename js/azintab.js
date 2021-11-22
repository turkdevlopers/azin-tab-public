let isMoudleOpen = false;
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

window.onscroll = function () { scrollProgress() };
function scrollProgress() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scrollBar").style.width = scrolled + "%";
}

var elem = window;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var win = window,
    doc = document,
    docElem = doc.documentElement,
    body = doc.getElementsByTagName('body')[0],
    x = win.innerWidth || docElem.clientWidth || body.clientWidth,
    y = win.innerHeight || docElem.clientHeight || body.clientHeight;
  disableOn = document.querySelector(".azi-demo-button").getAttribute('screenmode') * 1;
  if (x == disableOn) {
    document.querySelector(".azi-demo-button").style.display = 'none';
  } else {
     /* Close fullscreen */
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }

  function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }


    document.querySelector("#makefullscreen").addEventListener('click', function () {
      isMoudleOpen = false;
      toggleFullScreen();
      document.querySelector('.azi-demo-button').style.display = "none";
    });

  if (document.addEventListener) {
    document.addEventListener('fullscreenchange', exitHandler, false);
    document.addEventListener('mozfullscreenchange', exitHandler, false);
    document.addEventListener('MSFullscreenChange', exitHandler, false);
    document.addEventListener('webkitfullscreenchange', exitHandler, false);
  }

  function exitHandler() {
    if (window.webkitIsFullScreen || window.mozFullScreen || window.msFullscreenElement !== null) {

      var full_screen_element = document.fullscreenElement;

      // If no element is in full-screen
      if (full_screen_element !== null) {
        console.log('FullScreen mode is activated');
        setCookie('azintab', '1', 3);
      } else {
        console.log('FullScreen mode is not activated');
        setCookie('azintab', '0', 3);
      }

    }
  }
  if (getCookie('azintab') == '1') {
    toggleFullScreen();
  }

  document.querySelector(".azi-demo-button").addEventListener('click',function () { 
    isMoudleOpen = true;
   });

  setTimeout(function () {
    if (getCookie('azintab') !== '1' && isMoudleOpen == false) {
      document.querySelector(".azi-demo-button").click();
    }
  }, 13500)
  }
});