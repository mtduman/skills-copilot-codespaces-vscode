function skillsMember() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app/components/skills/member.html',
        controller: 'SkillsMemberCtrl',
        controllerAs: 'vm',
        scope: {
            member: '='
        }
    };
}