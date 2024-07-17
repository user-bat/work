function togglePanel1() {
    var panel = document.getElementById("myPanel1");
    var change = document.getElementsByClassName("closebtn1");
    if (panel.style.height === "100%") {
        panel.style.height = "0";
    } else {
        panel.style.height = "100%";
    }
    // if (change.innerHTML === "name"){
    //     change.innerHTML = 'close';
    // }
    // else {
    //     change.innerHTML = "open";
    // }
}

