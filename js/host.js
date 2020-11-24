window.addEventListener('load', host_init);

function host_init() {
    setTimeout(host_dummy, 1500);
}

function host_dummy() {
    let code = Math.floor(Math.random() * 999999) + "";
    code.padStart(6, '0');
    window.location = "game.html#" + code;
}