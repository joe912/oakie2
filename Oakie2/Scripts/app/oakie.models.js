define('oakie.models',
    ['ko'],
    function(ko) {

        TeamPosition = function (position, teamName, weekPoints, totalPoints, trend) {
            var self = this;
            self.position = position;
            self.teamName = teamName;
            self.weekPoints = weekPoints;
            self.totalPoints = totalPoints;
            self.trend = trend;
        },
        PlayerInfo = function(name, points, isCaptain) {
            var self = this;
            self.name = ko.observable(name);
            self.points = points;
            self.isCaptain = ko.observable(isCaptain);
        };

        return {
            TeamPosition: TeamPosition,
            PlayerInfo: PlayerInfo
        };
    });
