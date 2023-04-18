function showMsg(msg, color="#e6e6e6", bgcolor="#e34a4a") {
    if (document.getElementById("message").style.top === '-20.5px') {
        display(msg, color, bgcolor)
    } else {
        hideMsg()
        setTimeout(function() {
            display(msg, color, bgcolor)
        }, 200);
    }
}

function display(msg, color, bgcolor) {
    setColor(color, bgcolor)
    document.getElementById("message").innerHTML = '<div class="inner">'
        + msg + '<a onclick="hideMsg()" class="close-btn">' +
        '<svg id="close-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="' + color + '" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
        '</a></div>'
    setTimeout(function() {
        document.getElementById("message").style.top = "0"
        document.getElementById("nav").style.top = "20px"
    }, 40);
}

function setColor(color, bgcolor) {
    document.getElementById("message").style.transition = "none 0s ease 0s"
    document.getElementById("message").style.backgroundColor = bgcolor
    document.getElementById("message").style.color = color
    setTimeout(function() {document.getElementById("message").style.transition = 'all 0.2s ease 0s'}, 30);
}

function hideMsg() {
    document.getElementById("message").style.top = "-20.5px"
    document.getElementById("nav").style.top = "0"
}

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("message").innerHTML = '<div class="inner">msg<a onclick="hideMsg()" class="close-btn">' +
        '<svg id="close-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="#e6e6e6" fill="none" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
        '</a></div>'
})