function togglePanel2() {
    var panel = document.getElementById("myPanel2");
    var change = document.getElementsByClassName("closebtn2");
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