var SearchEngine = new String()
var invalue = new String()

function search() {
    invalue = document.getElementById("search-input").value
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

function searchNW() {
    invalue = document.getElementById("search-input").value
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

function newwindow() {
    if ($('#openNWI').prop('checked')) {
        searchNW()
    } else {
        search()
    }
}

$('#search-input').keypress(function (e) {
    if (e.which == 13) {
        e.preventDefault()
        newwindow()
    }
})