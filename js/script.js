// функция, которая хранит имя посетителя в переменной cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// функция, которая возвращает значение указанного файла cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// функция, которая проверяет, установлен ли файл cookie
function checkCookie() {
    var username = getCookie("username");
    if (username != "") {
        alert("Welcome again " + username);
    } else {
        username = prompt("Please enter your name:", "");
        if (username != "" && username != null) {
            setCookie("username", username, 365);
        }
    }
}
// защита email от спам-ботов
window.addEvent('load', function() {
    var regEmail = /\/([a-zA-Z0-9\-\.]+)\.m\.([a-zA-Z0-9\-\.]+)\/([a-zA-Z]{2,6})\//g;
    $document.body.innerHTML = document.body.innerHTML.replace(regEmail, '$1@$2.$3');
  });

    
  