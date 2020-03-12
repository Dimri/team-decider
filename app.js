var team1 = document.getElementById("team1");
var team2 = document.getElementById("team2");
var genBtn = document.getElementById("generate");

var players = [
    "Trout",
    "Shén",
    "Kartik",
    "BotKilla"
];

(function () {
    genBtn.addEventListener("click", makeTeam);
}());

function makeTeam() {
    team1.innerHTML = '';
    team2.innerHTML = '';
    let playersCopy = [...players];
    let length = players.length;
    let count = 0;

    while (length !== 0) {
        let r = Math.floor(Math.random() * length);

        switch (count) {
            case 0: team1.innerHTML += `${playersCopy[r]} & `;
                break;
            case 1: team1.innerHTML += `${playersCopy[r]}`;
                break;
            case 2: team2.innerHTML += `${playersCopy[r]} & `;
                break;
            case 3: team2.innerHTML += `${playersCopy[r]}`;
                break;
        }

        for (let i = 0; i < length; i++) {
            if (i === r) {
                playersCopy.splice(i, 1);
            }
        }

        length--;
        count++;
    }
}

