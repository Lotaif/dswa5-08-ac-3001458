angular.module('ifsp').controller('ContatosController',
    function($scope) {
        $scope.total = 0;
        $scope.incrementa = function() {
            $scope.total++;
        };

        $scope.contatos = [
            { "_id": 1, "nome": "Leandro Almeida", "email": "leandro_v22@hotmail.com" },
            { "_id": 2, "nome": "Matheus Gomes", "email": "vsgmatheus@gmail.com" },
            { "_id": 3, "nome": "Jonathan Dias", "email": "jonatha.ona@gmail.com" }
        ];
    });