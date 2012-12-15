

define('oakie.duff',
    ['amplify', 'oakie.models'],
    function (amplify, oakiemodels) {
        
        var init = function() {

            amplify.request.define('players', 'ajax', {
                url: '/api/players',
                dataType: 'json',
                type: 'GET'
            });
        },
        
        JSONGetTeam = function () {
            // todo get from api
                return [
                    new oakiemodels.PlayerInfo('Joe', 1, false), // i removed oakie. from all these
                    new oakiemodels.PlayerInfo('Mark', 1, true),
                    new oakiemodels.PlayerInfo('Phil', 1, false),
                    new oakiemodels.PlayerInfo('Pete', 1, false)
                ];
        },
        JSONGetLeaderBoard = function () {
            return [
                new oakiemodels.TeamPosition(1, "team 1", 12, 48, 0),
                new oakiemodels.TeamPosition(2, "team 2", 7, 46, 0),
                new oakiemodels.TeamPosition(3, "team 3", 22, 39, 1),
                new oakiemodels.TeamPosition(4, "team 4", 4, 38, -1),
                new oakiemodels.TeamPosition(5, "team 5", 4, 35, 1),
                new oakiemodels.TeamPosition(6, "team 6", 6, 27, 1),
                new oakiemodels.TeamPosition(7, "team 7", 12, 26, -1),
                new oakiemodels.TeamPosition(8, "team 8", 10, 25, -1),
                new oakiemodels.TeamPosition(9, "team 9", 9, 19, 0),
                new oakiemodels.TeamPosition(10, "team 10", 2, 18, -1)
        /*
                            new oakie.TeamPosition( 1, "team 1", 12, 48, 0),
                            new oakie.TeamPosition( 2, "team 2", 7, 46, 0),
                            new oakie.TeamPosition( 3, "team 3", 22, 39, 1),
                            new oakie.TeamPosition( 4, "team 4", 4, 38, -1),
                            new oakie.TeamPosition( 5, "team 5", 4, 35, 1),
                            new oakie.TeamPosition( 6, "team 6", 6, 27, 1),
                            new oakie.TeamPosition( 7, "team 7", 12, 26, -1),
                            new oakie.TeamPosition( 8, "team 8", 10, 25, -1),
                            new oakie.TeamPosition( 9, "team 9", 9, 19, 0),
                            new oakie.TeamPosition( 10, "team 10", 2, 18, -1)
        */
            ];
        },
        JSONGetPlayerList = function () {

/*            $.ajax({
                url: '/api/players',
                dataType: 'json',
                success: function (result) {
                    debugger;
                    alert('dude, your data has arrived');
                },
                error: function (result) {
                    alert('dude, we fucked up. Sorry.');

                }
            });*/
            
            amplify.request({
                resourceId: 'players',
                success: function (result) {
                    //debugger;
                    alert('dude, your data has arrived');
                },
                error: function (result) {
                    alert('dude, we fucked up. Sorry.');

                }
            });

            return [
                new oakiemodels.PlayerInfo('Joe', 1),   // ii removed oakie. from all these
                new oakiemodels.PlayerInfo('Mark', 45),
                new oakiemodels.PlayerInfo('Phil', 5),
                new oakiemodels.PlayerInfo('Pete', 34),
                new oakiemodels.PlayerInfo('Dave', 12),
                new oakiemodels.PlayerInfo('Eric', 12),
                new oakiemodels.PlayerInfo('Ivan', 17),
                new oakiemodels.PlayerInfo('Paul', 10),
                new oakiemodels.PlayerInfo('Tom', 8),
                new oakiemodels.PlayerInfo('Brian', 18),
                new oakiemodels.PlayerInfo('John', 9),
                new oakiemodels.PlayerInfo('Chris', 23),
                new oakiemodels.PlayerInfo('Jason', 11),
                new oakiemodels.PlayerInfo('Bert', 13),
                new oakiemodels.PlayerInfo('Arthur', 31),
                new oakiemodels.PlayerInfo('Rick', 12),
                new oakiemodels.PlayerInfo('Mart', 8),
                new oakiemodels.PlayerInfo('Gaz', 5),
                new oakiemodels.PlayerInfo('Jack', 2),
                new oakiemodels.PlayerInfo('Al', 16),
                new oakiemodels.PlayerInfo('Jimmy', 19)
            ];
        };
        
        init();
        
        return {
            JSONGetTeam: JSONGetTeam,
            JSONGetLeaderBoard: JSONGetLeaderBoard,
            JSONGetPlayerList: JSONGetPlayerList
        };
});



