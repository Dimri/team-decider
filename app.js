var team1 = document.getElementById("team1");
var team2 = document.getElementById("team2");
var genBtn = document.getElementById("generate");

var players = [
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4"
];

(function () {
    genBtn.addEventListener("click", makeTeam);
}());

function chooseNplayers(list, n = 2) {
    // randomly sort list
    const shuffled_list = list.slice().sort(() => Math.random() - 0.5);
    // return first 'n' values
    return shuffled_list.slice(0, n);
}

function remainingPlayers(list, t1_list) {
    // empty list for team 2
    const t2_list = [];
    // select the players that are not there in team 1
    for (const player of list) {
        if (!t1_list.includes(player)) {
            t2_list.push(player);
        }
    }
    return t2_list;
}

function changeInnerHTML(teamDOM, list) {
    teamDOM.innerHTML = `${list[0]} & ${list[1]}`;
}

function makeTeam() {
    team1.innerHTML = '';
    team2.innerHTML = '';
    team1_players = chooseNplayers(players);
    team2_players = remainingPlayers(players, team1_players);
    changeInnerHTML(team1, team1_players);
    changeInnerHTML(team2, team2_players);
}

