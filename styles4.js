function togglePanel4() {
    var panel = document.getElementById("myPanel4");
    var change = document.getElementsByClassName("closebtn4");
    if (panel.style.height === "100%") {
        panel.style.height = "0";
    } else {
        panel.style.height = "100%";
    }
    // if (change.innerHTML === "nomber"){
    //     change.innerHTML = '&times';
    // }
    // else {
    //     change.innerHTML = "nomber";
    // }
}