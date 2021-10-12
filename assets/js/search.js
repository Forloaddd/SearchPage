// find if not got admited characters
function ComplexCar(a) {
    if (a.indexOf("#") > -1 || a.indexOf("&") > -1) {
        alert('No use caracteres especiales como "#" o "&".')
        return false
    } else {
        return true
    }
}

// special finds
function SpecialFinds(o, nw) {
    let i = o.toLowerCase()
    if (i.startsWith('trd=')) {
        if (ComplexCar(o)) {
            val = o.substr(4, Infinity)
            if (nw == true) {
                window.open("https://translate.google.cl/?hl=es&sl=auto&tl=es&text=" + val, '_blank').focus()
            }
            else{
                window.location.assign("https://translate.google.cl/?hl=es&sl=auto&tl=es&text=" + val)
            }
        }
        return false
    } else {
        return true
    }
}

// tipical search
function search() {

    invalue = document.getElementById("search-input").value

    if (ComplexCar(invalue)) {

        if (document.getElementById("engine-qwant")) {
            SearchEngine = "https://www.qwant.com/?q=";
        } else if (document.getElementById("engine-google")) {
            SearchEngine = "https://www.google.com/search?q=";
        }

        if (invalue.endsWith(".com")) {
            window.location.assign("http://www." + invalue)
        } else if (invalue.endsWith(".org")) {
            window.location.assign("http://www." + invalue)
        } else if (invalue == "") {} else {
            var search = new String(SearchEngine + invalue)
            window.location.assign(search)
        }

    }

}

// search in other tab
function searchNW() {

    invalue = document.getElementById("search-input").value

    if (ComplexCar(invalue)) {

        if (document.getElementById("engine-qwant")) {
            SearchEngine = "https://www.qwant.com/?q=";
        } else if (document.getElementById("engine-google")) {
            SearchEngine = "https://www.google.com/search?q=";
        }

        if (invalue.endsWith(".com")) {

            window.open("http://www." + invalue, '_blank').focus();
        } else if (invalue.endsWith(".org")) {
            window.open("http://www." + invalue, '_blank').focus();
        } else if (invalue == "") {} else {

            window.open(SearchEngine + invalue, '_blank').focus();
        }

    }

}

function newwindow() {
    invalue = document.getElementById("search-input").value

    if ($('#openNWI').prop('checked')) {
        if (SpecialFinds(invalue, true)) {
            searchNW()
        }

    } else {
        if (SpecialFinds(invalue, false)) {
            search()
        }
    }
}

$('#search-input').keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault()
        newwindow()
    }
})