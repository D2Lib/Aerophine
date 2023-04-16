function showMsg(msg) {
    document.getElementById("message").innerHTML = '<div class="inner">'
        + msg + '<a onclick="hideMsg()" class="close-btn">&#10006;</a></div>'
    document.getElementById("message").style.top = "0"
    document.getElementById("nav").style.top = "20px"
}

function hideMsg() {
    document.getElementById("message").style.top = "-20px"
    document.getElementById("nav").style.top = "0"
}