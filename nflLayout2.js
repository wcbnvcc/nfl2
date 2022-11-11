const nfcArray = [
    {name: "Cardinals", location: "Arizona", logoImage: "cardinals.png", wins: 0, losses: 0, ties: 0},
    {name: "Falcons", location: "Atlanta", logoImage: "falcons.png", wins: 0, losses: 0, ties: 0},
    {name: "Panthers", location: "Carolina", logoImage: "panthers.png", wins: 0, losses: 0, ties: 0},
    {name: "Bears", location: "Chicago", logoImage: "bears.png", wins: 0, losses: 0, ties: 0},
    {name: "Cowboys", location: "Dallas", logoImage: "cowboys.png", wins: 0, losses: 0, ties: 0},
    {name: "Lions", location: "Detroit", logoImage: "lions.png", wins: 0, losses: 0, ties: 0},
    {name: "Packers", location: "Green Bay", logoImage: "packers.png", wins: 0, losses: 0, ties: 0},
    {name: "Rams", location: "Los Angeles", logoImage: "rams.png", wins: 0, losses: 0, ties: 0},
    {name: "Vikings", location: "Minnesota", logoImage: "vikings.png", wins: 0, losses: 0, ties: 0},
    {name: "Saints", location: "New Orleans", logoImage: "saints.png", wins: 0, losses: 0, ties: 0},
    {name: "Giants", location: "New York", logoImage: "giants.png", wins: 0, losses: 0, ties: 0},
    {name: "Eagles", location: "Philadelphia", logoImage: "eagles.png", wins: 0, losses: 0, ties: 0},
    {name: "49ers", location: "San Francisco", logoImage: "49ers.png", wins: 0, losses: 0, ties: 0},
    {name: "Seahawks", location: "Seattle", logoImage: "seahawks.png", wins: 0, losses: 0, ties: 0},
    {name: "Buccaneers", location: "Tampa Bay", logoImage: "buccaneers.png", wins: 0, losses: 0, ties: 0},
    {name: "Commanders", location: "Washington", logoImage: "commanders.png", wins: 0, losses: 0, ties: 0}
  ];
    
function displayTeams() {
  for(let i = 0; i < nfcArray.length; i++) {
    document.getElementById("nfcTeams").innerHTML +=
    "<div class=\"teamDivBackground\" id=\"background" + nfcArray[i].name + "\">" +
    "<div class=\"teamDiv\" id=\"div" + nfcArray[i].name + "\">" +
    "<h2>" + nfcArray[i].location + " " + nfcArray[i].name + "</h2>" +
    "<img src=\"logos/" + nfcArray[i].logoImage + "\" alt=\"logo\">" +
    "<div class=\"statsDiv\">" +
    "<p>Win: </p>" + "<p>" + nfcArray[i].wins + "</p>" +
    "<p>Loss: </p>" + "<p>" + nfcArray[i].losses + "</p>" +
    "<p>Tie: </p>" + "<p>" + nfcArray[i].ties + "</p>" +
    "</div>" +
    "</div>" +
    "</div>";
  }
};

document.getElementById("addGame").addEventListener("click", addGame);

function addGame() {
  let homeTeam = document.getElementById("homeTeam").value;
  let homePoints = document.getElementById("homePoints").value;
  let awayTeam = document.getElementById("awayTeam").value;
  let awayPoints = document.getElementById("awayPoints").value;
  let gameDate = document.getElementById("gameDate").value;

  if(homeTeam === awayTeam) {
    alert("Home Team and Away Team cannot be the same");
    return;
  }

  document.getElementById("gameDisplay").innerHTML += 
  "<div class=\"gameResults\">" +
  "<h2>" + homeTeam + " (Home) vs " + awayTeam + " (Away)</h2>" + 
  "<p class=\"dateP\">Date: " + gameDate + "</p>" + 
  "<img src=\"logos/" + homeTeam.toLowerCase() + ".png\" alt=\"\">" + 
  "<p class=\"scoreP\">" + homePoints + " - " + awayPoints + "</p>" +
  "<img src=\"logos/" + awayTeam.toLowerCase() + ".png\" alt=\"\">" + 
  "</div>"
}

displayTeams();