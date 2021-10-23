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
    } else {
        dsc()
        FocusIn()
    }
}

function dsc() {
    let vl = document.getElementById("search-input").value.toLowerCase()
    if (vl.startsWith('t ') || vl.startsWith('w ') || vl.startsWith('y ') || vl.startsWith('s ')) {
        document.getElementById('search-input').style = 'border-color: #D100FF;'
    } else {
        document.getElementById('search-input').style = 'border-color: gray;'
    }
}