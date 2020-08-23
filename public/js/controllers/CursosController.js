angular.module('ifsp').controller('CursosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.cursos  = [
            {"_id": 1, "curso": 'Engenharia de Produção', "coordenador": 'Leonardo Lopes Lotaif'},
            {"_id": 2, "curso": 'Tecnologia em Análise e Desenvolvimento de Sistemas', "coordenador": 'Leandro Almeida'},
            {"_id": 3, "curso": 'Licenciatura em Letras Português/Inglês', "coordenador": 'Jonathan Dias'},
            {"_id": 4, "curso": 'Tecnologia em Gestão Pública', "coordenador": 'Matheus Gomes'}
        ];
});