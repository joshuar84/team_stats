// The team object
const team = {

    // This method pushes player objects into the _players array and it takes parameters for the first and last name as well as age
    addPlayer(firstName, lastName, age) {
        this._players.push({
            firstName: firstName,
            lastName: lastName,
            age: age
        })
    },

    // This method pushes game objects into the _games array and it takes parameters for opponent, team points, and opponent team points
    addGame(opponentName, yourTeamsPts, opponentPts) {
        this._games.push({
            opponent: opponentName,
            teamPoints: yourTeamsPts,
            opponentPoints: opponentPts
        })
    },

    // Getter method to return the _games array
    get games() {
        return this._games;
    },

    // Getter method to return the _players array
    get players() {
        return this._players;
    }
};

// Assigning the key/value of _players/[] to the team object
team._players = [];

// Assigning the key/value of _games/[] to the team object
team._games= [];

// Pushing player objects into the _players array
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

// Pushing game objects into the _games array
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

// Used the addPlayer method to add new players to the team object
team.addPlayer('Joshua', 'Rios', 36);
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

// Used the addGame method to add new games to the team object
team.addGame('Redskins', 66, 20);
team.addGame('Beavers', 6, 21);
team.addGame('Bears', 31, 4);

// Printing out the team object to the console
console.log(team);