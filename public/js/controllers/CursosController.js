angular.module('ifsp').controller('CursosController',
	function ($resource, $scope) {
		$scope.cursos = [];
		var Curso = $resource('/cursos');
		function buscaCursos() {
			Curso.query(
				function (cursos) {
					$scope.cursos = cursos;
				},
				function (erro) {
					console.log("Não foi possível obter a lista de contatos");
					console.log(erro);
				}
			);
		}
		buscaCursos();
	});