
function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('tlc-clockdiv').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

var items;

function waitForMainContent() {
  items = document.getElementsByClassName('mainContent');
  
  if (items !== null && items !== undefined && items[0] !== undefined && items[0] !== null && items.length > 0) {
    const newClockDiv = document.createElement("div");

    newClockDiv.setAttribute("id", "tlc-clockdiv");
    items[0].appendChild(newClockDiv);
    startTime();
  } else {
    setTimeout(waitForMainContent, 500);
  }
}

waitForMainContent();




/* // some other action to take
for (var i = 0, l = items.length; i < l; i++) {
  items[i].addEventListener("click", function(e) {
    alert('Action to take here');
  }, false);
}
*/