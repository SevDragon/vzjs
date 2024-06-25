function valForm() {
    let p = event.target.children

    if (p.firstName.value == "") {
        message("Need a first Name!")
        return false
    }

    if (p.lastName.value == "") {
        message("Need a last Name!")
        return false
    }

    if (p.age.value == "") {
        message("Need an age!")
        return false
    }
    return true
}


function message(m) {
    document.getElementById("wrapper").innerHTML = m
}