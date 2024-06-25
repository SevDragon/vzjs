/* function logEvent() {
  let p = event.target;

  if (p.name == "firstname") {
    message("First name change" + p.value);
  } else {
    message("Last name change" + p.value);
  }
}

function sendInfo() {
  let p = event.target.parentElement;
  message("welcmoe" + p.firstname.value + p.lastname.value);
}

function message(m) {
  document.getElementById("welcome").innerHTML = m;
}
 */

function logEvent() { 
    let p = event.target;
    console.log(event.target, p.value);
    if (p.name == "firstname") {
        message("First Name Changed to " + p.value); 
      } else {
        message("Last Name Changed to " + p.value); 
      }
    }
    function sendInfo() {
      let p = event.target.parentElement;
     
      message("Welcome " + p.firstname.value + " " + p.lastname.value); 
    }
    function message(m) {
      document.getElementById("welcome").innerHTML = m; 
    }