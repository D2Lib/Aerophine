function showMsg(msg) {
    document.getElementById("message").innerHTML = '<div class="inner">'
        + msg + '<a onclick="hideMsg()" class="close-btn">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e6e6e6" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
        '</a></div>'
    document.getElementById("message").style.top = "0"
    document.getElementById("nav").style.top = "20px"
}

function hideMsg() {
    document.getElementById("message").style.top = "-20px"
    document.getElementById("nav").style.top = "0"
}