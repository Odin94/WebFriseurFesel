/**
 * Created by Odin on 10.07.2017.
 */

var date = new Date();

$("#day" + date.getDay()).css("color", "brown");//"#1E81E0");  // brown is actually red-brown


// Highlight navbar items
var navItemColor = "white";

if (window.location.href.indexOf("kontakt") > -1) {
    $("#kontakt").css("color", navItemColor);
}
else if (window.location.href.indexOf("anfahrt") > -1) {
    $("#anfahrt").css("color", navItemColor);
}
else if (window.location.href.indexOf("preise") > -1) {
    $("#preise").css("color", navItemColor);
}
else if (window.location.href.indexOf("impressum") > -1) {

}
else {
    $("#home").css("color", navItemColor);
}
