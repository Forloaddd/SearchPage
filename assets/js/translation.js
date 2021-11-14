// texts
var greetingTimeMan
var greetingTimeTar
var ThanksConsole
var Startondownloadtitle
var error1characters

let userLang = navigator.language || navigator.userLanguage

if (userLang.startsWith('es')){
    ThanksConsole = 'Gracias por usar starton browser'
    greetingTimeMan = 'Buenos días'
    greetingTimeTar = 'Buenas tardes'
    Startondownloadtitle = 'Descarga el Navegador Starton'
    error1characters = 'No use caracteres especiales como "#" o "&".'
}
else {
    ThanksConsole = 'Thanks for use starton browser'
    greetingTimeMan = 'Good Morning'
    greetingTimeTar = 'Good afternoon'
    Startondownloadtitle = 'Download the Starton Browser'
    error1characters = 'Do not use special characters such as "#" or "&".'
    //
    $('.lw-link-draw').html('Do you like this wallpaper?')
    $('.lbl-cor').html('By <a href="https://github.com/Forloaddd/" class="link-cor" translate="no">Starton') 
    $('.modal-title').html('Settings') 
    $('#openNWI').html('Open in new browser tab')
    $('.openinNW').html('<input id="openNWI" type="checkbox" name="checkbox" style="margin-right: 5px;"> Open in new browser tab') 
    $('#show-wallpaper').html('Show Wallpaper') 
    $('#clear-settings-btn').html('Restart')
    $('#close-modal1').html('Close')
    $('.autocomser').html('<input type="checkbox" name="autocomplete" id="autocomplete-inp" style="margin-right: 5px; margin-top: 10px;"> Autocomplete searches <br>')
    $('.showwallp').html('<input type="checkbox" name="wallpaper-toogle" id="show-wallpaper" style="margin-right: 5px; margin-top: 10px;" data-toggle="tooltip" data-placement="top"' + 
    'title="Disabling this can help reduce RAM usage and have a faster site."> Show wallpaper')

    // change props
    $('.resetset').prop('title', 'Reset all settings to default')
    $('.like-wallp').prop('title', 'Show wallpaper')
    $('#search-input').prop('placeholder', 'Find or type a web address')
    $('#prev-w').prop('title', 'Web preview (F2)')
    $('#apps-menu').prop('title', 'Applications')
    $('#settingsPc').prop('title', 'Settings (Esc)')
    $('#change-wallpaper-btn').prop('value', 'Change Wallpaper')
}