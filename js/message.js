function showMsg(msg) {
    document.getElementById("message").innerHTML = '<div style=' +
        '"text-align: center;' +
        'margin: 0;' +
        'padding: 0">'
        + msg + '</div>'
    document.getElementById("message").style.top = "0"
    document.getElementById("nav").style.top = "20px"
}

function hideMsg() {
    document.getElementById("message").style.top = "-20px"
    document.getElementById("nav").style.top = "0"
}