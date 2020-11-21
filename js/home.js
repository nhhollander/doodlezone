window.addEventListener('load', home_init);

function home_init() {
    document.getElementById("join").addEventListener("click", home_join_clicked);
    document.getElementById("host").addEventListener("click", home_host_clicked);
}

function home_join_clicked() {
    window.location = "join.html";
}

function home_host_clicked() {
    window.location = "host.html";
}