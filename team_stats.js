const team = {};
team._players = [];
team._games= [];
team._players.push({
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 29
});
team._players.push({
    firstName: 'Derek',
    lastName: 'Rodriguez',
    age: 24
});
team._players.push({
    firstName: 'Michael',
    lastName: 'Johnson',
    age: 30
});
team._games.push({
    opponent: 'Broncos',
    teamPoints: 42,
    opponentPoints: 27
});
team._games.push({
    opponent: 'Cowboys',
    teamPoints: 16,
    opponentPoints: 52
});
team._games.push({
    opponent: 'Wolverines',
    teamPoints: 35,
    opponentPoints: 21
});
Object.defineProperties(team, {
    games: {get: function() {
        return this._games;
    }}
});
Object.defineProperties(team, {
    players: {get: function() {
        return this._players;
    }}
});
team.addPlayer = function(firstName, lastName, age) {
    this._players.push({
        firstName: firstName,
        lastName: lastName,
        age: age
    })
};
team.addGame = function(opponentName, yourTeamsPts, opponentPts) {
    this._games.push({
        opponent: opponentName,
        teamPoints: yourTeamsPts,
        opponentPoints: opponentPts
    })
};
team.addPlayer('Joshua', 'Rios', 36);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
team.addGame('Redskins', 66, 20);
team.addGame('Beavers', 6, 21);
team.addGame('Bears', 31, 4);
console.log(team.games);