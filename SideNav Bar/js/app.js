var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.studentData = {
        student01: {name : "FordHenry", department : "ECE", subjects :{subject01:"EDC",subject02: "DSP"},EDC:{description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},DSP:{description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}},
        student02: {name : "Steve", department : "IT", subjects :{subject01:"COA",subject02: "AI"},COA:{description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},AI:{description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}},
        student03: {name : "Michale", department : "CSC", subjects :{subject01:"POC",subject02: "ADC"},POC:{description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},ADC:{description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}}
    }
});