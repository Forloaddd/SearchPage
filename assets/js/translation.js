// texts
var greetingTimeMan
var greetingTimeTar
var ThanksConsole

let userLang = navigator.language || navigator.userLanguage

if (userLang.startsWith('es')){
    ThanksConsole = 'Gracias por usar starton'
    greetingTimeMan = 'Buenos días'
    greetingTimeTar = 'Buenas tardes'
}
else {
    ThanksConsole = ''
    greetingTimeMan = ''
    greetingTimeTar = ''
    //

}