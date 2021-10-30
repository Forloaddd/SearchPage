// search btn
$("#search-btn").click(function () {
    newwindow()
})

// menu - reset btn
$("#clear-settings-btn").click(function () {
    localStorage.clear()
})

// menu - change wallpaper
$("#change-wallpaper-btn").click(function () {
    randomWll(20)
})

// show wallpaper
$(".lw-link-draw").click(function () {
    window.open("assets/img/wallpapers/w" + wnum + ".jpg", '_blank').focus()
})

// download starton browser
$("#dwn-starton").click(function () {
    // window.open("browser/starton/starton.html", '_blank').focus()
})

var shw = false
// web preview
$("#prev-w").click(function () {
    shwPrev()
})

/******************************************/
var secure = true
window.addEventListener("keydown", shortcuts)

function shortcuts(e) {
    if (e.keyCode == 27) {
        if (secure) {
            secure = false
            document.getElementById("settingsPc").click()
            var stime = setTimeout(function () {
                secure = true
            }, 1000)
        }
    } else if (e.keyCode == 113) {
        shwPrev()
    } else {
        dsc()
        FocusIn()
    }
}

function dsc() {
    let vl = document.getElementById("search-input").value // .toLowerCase()
    document.getElementById('view-i').setAttribute('src', 'https://' + vl)

    if (vl.startsWith('t ') || vl.startsWith('w ') || vl.startsWith('y ') || vl.startsWith('s ')) {
        document.getElementById('search-input').style = 'border-color: #D100FF;'
    } else {
        document.getElementById('search-input').style = 'border-color: gray;'
    }
}

function shwPrev() {
    if (shw) {
        $("#content-preview").hide()
        document.getElementById("view-i").Disabled = true
        shw = false
    } else {
        $("#content-preview").show()
        document.getElementById("view-i").Disabled = false
        shw = true
    }
}