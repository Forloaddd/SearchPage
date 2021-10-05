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

// save fav
$("#saveP-btn").click(function () {
    var ct = document.getElementById("saveP-inp").value
    localStorage.setItem("favs", ct)
    location.reload()
})

// show wallpaper
$(".lw-link-draw").click(function () {
    window.location.assign("assets/img/wallpapers/" + "w" + wnum + ".jpg")
})

// download Starton
$("#dwn-starton").click(function () {
    
})

/******************************************/
var secure = new Boolean()
secure = true
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
    }
}
