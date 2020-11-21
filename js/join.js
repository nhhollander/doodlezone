window.addEventListener('load', join_init);

function join_init() {
    document.getElementById("gamecode").addEventListener('input', join_codeinput);
    document.getElementById("backbutton").addEventListener('click', join_back_clicked);
    document.getElementById("gobutton").addEventListener('click', join_go_clicked);
}

function join_codeinput(event) {
    let input = event.target;
    let value = input.value;
    value = value.replace(/[^0-9]/gi, '');
    value = value.substr(0,6);
    input.value = value;
    if(input.value.length == 6) {
        document.getElementById("gobutton").setAttribute("locked","false");
    } else {
        document.getElementById("gobutton").setAttribute("locked","true");
    }
}

function join_back_clicked() {
    window.location = "index.html";
}

function join_go_clicked() {
    let code = document.getElementById("gamecode").value;
    if(code.length == 6) {
        window.location = "game.html#" + code;
    }
}