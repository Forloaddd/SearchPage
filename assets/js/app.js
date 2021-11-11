/*$.get("https://ipinfo.io", function (response) {
    document.getElementById("time-txt").title = response.city + "" + response.country;
    console.log(response.city, response.country);
}, "jsonp") */

// browser check
if (/MSIE 10/i.test(navigator.userAgent)) {

    window.location.assign('error-browser.html')

} else if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
    
    window.location.assign('error-browser.html')

} else if (navigator.userAgent.indexOf("Starton") > -1) {
    
    console.log(ThanksConsole)

} else {
    let st = '<img src="assets/img/download_27px.png" alt="Download" class="dwst"' +
        'title="Descarga Starton" id="dwn-starton">'
    document.getElementById("dowst").innerHTML = st
}

function Start() {
    startTime()
    if (localStorage.getItem("wallpaper") == "1") {
        randomWll(20)
    } else {
        blankWall()
    }
}
Start()

var wnum

function randomWll(c) {
    let c2 = Math.random() * c;
    let result = Math.floor(c2) + 1
    const sl = document.createElement('style')
    sl.innerHTML = ".wp {background-image: url(" + "assets/img/wallpapers/w" + result + ".jpg" + ");" +
        "z-index: -99; bottom: 0; top: 0; position: absolute; right: 0; left: 0; background-size: cover;}"
    document.body.appendChild(sl)
    wnum = result.toString()
}

function blankWall() {
    document.getElementById("wll-go").parentNode.removeChild(document.getElementById("wll-go"))
    document.getElementById("change-wallpaper-btn").parentNode.removeChild(document.getElementById("change-wallpaper-btn"))

    const sl = document.createElement('style')
    sl.innerHTML = ".wp {background-color: #2E2E2E;" +
        "z-index: -99; bottom: 0; top: 0; position: absolute; right: 0; left: 0; background-size: cover;}"
    document.body.appendChild(sl)
}

/*---------------------*/

function startTime() {
    let t = new Date()
    let hr = t.getHours()
    let min = t.getMinutes()
    let sec = t.getSeconds()
    min = checkTime(min)
    sec = checkTime(sec)
    document.getElementById("time-txt").innerHTML = hr + " : " + min + " : " + sec
    // -------
    let sh = new String()
    if (t.getHours() > "12") {
        sh = greetingTimeTar
    } else {
        sh = greetingTimeMan
    }
    document.getElementById('gt-txt').innerHTML = sh
    let time = setTimeout(function () {
        startTime()
    }, 500)
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i
}

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


// Guardado

// new tab?
if (localStorage.getItem("openNW")) {
    $('#openNWI').prop('checked', (localStorage.getItem("openNW") == "1" ? true : false))
} else {
    localStorage.setItem("openNW", "0")
}


$('#openNWI').change(function () {
    localStorage.setItem('openNW', ($(this).is(':checked') ? "1" : "0"))
})


// autocom
if (localStorage.getItem("autoinp")) {} else {
    localStorage.setItem("autoinp", "1")
}

if (localStorage.getItem("autoinp") == "1") {
    $('#autocomplete-inp').prop('checked', true)
    document.getElementById('search-input').setAttribute("autocomplete", "on")
} else {
    $('#autocomplete-inp').prop('checked', false)
    document.getElementById('search-input').setAttribute("autocomplete", "off")
}
$('#autocomplete-inp').change(function () {
    if ($(this).is(':checked')) {
        localStorage.setItem("autoinp", "1")
        document.getElementById('search-input').setAttribute("autocomplete", "on")
    } else {
        localStorage.setItem("autoinp", "0")
        document.getElementById('search-input').setAttribute("autocomplete", "off")
    }
})
$('autocomplete-inp').prop('checked', (localStorage.getItem("autoinp") == "1") ? true : false)


// wallpaper
if (localStorage.getItem("wallpaper")) {} else {
    localStorage.setItem("wallpaper", "1")
}
$('#show-wallpaper').prop('checked', (localStorage.getItem("wallpaper") == "1") ? true : false)
$('#show-wallpaper').change(function () {
    if ($(this).is(':checked')) {
        localStorage.setItem("wallpaper", "1")
        location.reload()
    } else {
        localStorage.setItem("wallpaper", "0")
        location.reload()
    }
})