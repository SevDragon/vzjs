function sendInfo() {
    let p = event.target.parentElement
    let form = document.querySelector(".myForm");
    console.log('form', form);
    console.log('p', p);
    console.log(p.firstname, form.firstname);
    console.log("event", event.target);
 
    message(`<h1> Welcome ${p.firstname.value.charAt(0).toUpperCase() + p.firstname.value.slice(1)} 
    ${p.lastname.value.charAt(0).toUpperCase() + p.lastname.value.slice(1)} </h1>`)
}

function message(m) {
    document.getElementById("welcome").innerHTML = m
}