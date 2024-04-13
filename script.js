var lampimage = document.getElementById('lampimage');
var clickid = document.getElementById('click');
let one_click = 0;
let second_click = 0;
let click = 0;

function Changing() 
{
    click++;
    clickid.innerHTML=click;
    if (one_click == second_click) {
        second_click = 0;
        one_click++;
        click = 0;
        if (lampimage.src == "http://127.0.0.1:5500/off.gif") {
            lampimage.src = "on.gif";
        }
        else {
            lampimage.src = "off.gif";
        }
    }
    else {
        second_click++;
    }
}