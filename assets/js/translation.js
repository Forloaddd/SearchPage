// texts
var greetingTimeMan
var greetingTimeTar
var ThanksConsole

let userLang = navigator.language || navigator.userLanguage

if (userLang.startsWith('es')){
    ThanksConsole = 'Gracias por usar starton browser'
    greetingTimeMan = 'Buenos días'
    greetingTimeTar = 'Buenas tardes'
}
else {
    ThanksConsole = 'Thanks for use starton browser'
    greetingTimeMan = 'Good days'
    greetingTimeTar = 'Good afternoon'
    //
    document.getElementById('close-modal1').innerHTML = 'Close'
    /*
    $('.lw-link-draw').innerHTML = 'like this wallpaper?'
    $('.lbl-cor').innerHTML = 'By <a href="https://github.com/Forloaddd/" class="link-cor" translate="no">Starton</p>'
    $('.modal-title').innerHTML = 'Settings'
    $('#openNWI').innerHTML = 'Open in new browser tab'
    $('#autocomplete-inp').innerHTML = 'Autocomplete'
    $('#show-wallpaper').innerHTML = 'Show Wallpaper'
    $('#clear-settings-btn').innerHTML = 'Restart'
    $('#close-modal1').html('Close')*/
}