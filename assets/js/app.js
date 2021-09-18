    // comprobar navegador 
    if (/MSIE 10/i.test(navigator.userAgent)) {
        // This is internet Explorer 10
        window.location.assign('error-browser.html')
    } else if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
        // This is internet Explorer 9 or 11
        window.location.assign('error-browser.html')
    } else if (navigator.userAgent.indexOf("Starton") > -1) {
        console.log("gracias por usar starton")
    } else {
        let st = '<img src="assets/img/download_27px.png" alt="Download" class="dwst"' +
            'title="Descarga Starton" id="dwn-starton">'
        document.getElementById("dowst").innerHTML = st
    }

    function Start() {
        startTime()
        randomWll(20)
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

    
    /*---------------------*/

    function startTime() {
        var t = new Date()
        var hr = t.getHours()
        var min = t.getMinutes()
        var sec = t.getSeconds()
        min = checkTime(min)
        sec = checkTime(sec)
        document.getElementById("time-txt").innerHTML = hr + " : " + min + " : " + sec
        // -------
        var sh = new String()
        if (t.getHours() > "12") {
            sh = "Buenas tardes"
        } else {
            sh = "Buenos días"
        }
        document.getElementById('gt-txt').innerHTML = sh
        var time = setTimeout(function () {
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
        $('[data-toggle="tooltip"]').tooltip();
    })

    // Guardado
    // elemento creado? == no, se crea
    if (localStorage.getItem("openNW")) {} else {
        localStorage.setItem("openNW", "0")
    }

    if (localStorage.getItem("autoinp")) {} else {
        localStorage.setItem("autoinp", "1")
    }

    if (localStorage.getItem("openNW") == "1") {
        $('#openNWI').prop('checked', true)
    } else {
        $('#openNWI').prop('checked', false)
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


    $('#openNWI').change(function () {
        if ($(this).is(':checked')) {
            localStorage.setItem("openNW", "1")
        } else {
            localStorage.setItem("openNW", "0")
        }
    })