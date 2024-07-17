function togglePanel() {
    var panel = document.getElementById("myPanel");
    var change = document.getElementsByClassName("closebtn");
    if (panel.style.height === "100%") {
        panel.style.height = "0";
    } else {
        panel.style.height = "100%";
    }
}

