// -----------------------------------------------------------------
// The view model
// -----------------------------------------------------------------
define('oakie.viewmodel',
    ['jquery', 'ko', 'oakie.models', 'oakie.duff'],
 
    function ($, ko, oakiemodels, oakieduff) {
    ////////////////////////////////////////////////////////
    // Data
    ////////////////////////////////////////////////////////
    // views == areas of functionality
    var views = ['Team', 'Manage', 'Leaderboard'],
        chosenViewId = ko.observable(),
        isItDirty = ko.observable(false),
        // Team
        players = ko.observableArray(oakieduff.JSONGetTeam()),
        // Table
        leaderBoard = oakieduff.JSONGetLeaderBoard(),
        // Manage
        playerList = oakieduff.JSONGetPlayerList(),
        transferCandidate = ko.observable(new oakiemodels.PlayerInfo('', 0, false)),  // oakie. // load with empty player
        okToTransfer = ko.observable(false),
        // Dirty flags
        dirtyFlag = new ko.DirtyFlag([players], false);

    ////////////////////////////////////////////////////////
    // Behaviours
    ////////////////////////////////////////////////////////
    var refreshData = function () {
        // reset the data by refreshing from server
        players(oakieduff.JSONGetTeam());
        transferCandidate(new oakiemodels.PlayerInfo('', 0, false)); // oakie.
        okToTransfer(false);
    },
        // Views
        goToView = function (view) {
            /*self.chosenViewId(view);*/
            location.hash = view;
        },
        // Team
        // none
            // Manage
        transferPlayer = function (player) {
            //alert('transfer player:' + player.name());
            if (transferCandidate()
                && transferCandidate().name()
                && transferCandidate().name() != '') {

                //alert('transfer candidate = ' + self.transferCandidate().name());
                var newPlayer = transferCandidate().name();

                // Check player not already in list
                for (var i = 0; i < players().length; i++) {
                    if (players()[i].name() === newPlayer) {
                        alert('Dude! You have already got ' + newPlayer + ' in your team. Try another player.');
                        return;
                    }
                }

                // transfer player
                player.name(newPlayer);
                transferCandidate(new oakiemodels.PlayerInfo('', 0, false)); // oakie.
                okToTransfer(false);
                isItDirty(true);
            }
            // var x = $("div#xferPlayers li.ui-selected");
            // alert(x.length);

        },
        chooseCaptain = function (player) {
            //alert('set captain to ' + player.name());
            for (var i = 0; i < players().length; i++) {
                if (players()[i].name() != player.name()) {
                    players()[i].isCaptain(false);
                } else {
                    players()[i].isCaptain(true);
                }
            }
            isItDirty(true);
        },
        selectPlayerForXfer = function (player) {
            //alert('you selected ' + player.name());
            //$("div#xferPlayers li").removeClass('ui-selected');
            //$(event.currentTarget).addClass('ui-selected');

            transferCandidate(player);

            okToTransfer(true);
            for (var i = 0; i < players().length; i++) {
                if (players()[i].name() === player.name()) {
                    okToTransfer(false);
                }
            }
        },
        //////////////////////////////////////////
        // Functionality  - save, cancel, leave
        //////////////////////////////////////////
        canLeave = function () {
            return !dirtyFlag().isDirty();
        },
        cancelCmd = ko.asyncCommand({
            execute: function (complete) {
                $("#debugCmd").html('todo - cancel command');
                refreshData();
                dirtyFlag().reset();
                complete();
            },
            canExecute: function (isExecuting) {
                return !isExecuting && dirtyFlag().isDirty();
            }
        }),
        saveCmd = ko.asyncCommand({
            execute: function (complete) {
                $("#debugCmd").html('todo - save command');
                dirtyFlag().reset();
                complete();
            },
            canExecute: function (isExecuting) {
                return !isExecuting && dirtyFlag().isDirty();
            }
        }),
        save = function () {
            alert('To do');
            isItDirty(false);
        };

    return {
        //props
        views: views,
        chosenViewId: chosenViewId,
        leaderBoard: leaderBoard,
        players: players,
        playerList: playerList,
        transferCandidate: transferCandidate,
        okToTransfer: okToTransfer,
        // methods
        goToView: goToView,
        transferPlayer: transferPlayer,
        chooseCaptain: chooseCaptain,
        selectPlayerForXfer: selectPlayerForXfer,
        canLeave: canLeave,
        cancelCmd: cancelCmd,
        saveCmd: saveCmd,
        save: save
    };

});