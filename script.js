const today = new Date();

const knownNewMoon =
new Date("2026-05-31");

const days =
(today - knownNewMoon) /
(1000 * 60 * 60 * 24);

const moonAge =
(days % 29.53);

let phase = "";
let icon = "";

if(moonAge < 2){

    phase = "New Moon";
    icon = "●";

}
else if(moonAge < 7){

    phase = "Waxing Crescent";
    icon = "◔";

}
else if(moonAge < 10){

    phase = "First Quarter";
    icon = "◑";

}
else if(moonAge < 15){

    phase = "Waxing Gibbous";
    icon = "◕";

}
else if(moonAge < 18){

    phase = "Full Moon";
    icon = "○";

}
else if(moonAge < 22){

    phase = "Waning Gibbous";
    icon = "◕";

}
else if(moonAge < 26){

    phase = "Last Quarter";
    icon = "◑";

}
else{

    phase = "Waning Crescent";
    icon = "◔";

}

document.getElementById("symbol").innerText =
icon;

document.getElementById("message").innerText =
phase;

document.getElementById("moonage").innerText =
`Moon Age ${moonAge.toFixed(1)}`;
