// public/angularApp.js

// Criamos um módulo Angular chamado listaContatos
var listaContatos = angular.module('listaContatos', ['ngStorage']);
var end;

function mainController($scope, $http, $localStorage) {

    // Quando acessar a página, carrega todos os contatos e envia para a view($scope)
    var refresh = function (){
        $http.get('/api/contatos')
            .success(function(data) {
                $scope.contatos = data;
                $scope.formContato = {};
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    refresh();

    // Quando clicar no botão Criar, envia informações para a API Node
    $scope.criarContato = function() {
        $http.post('/api/contatos', $scope.formContato)
            .success(function(data) {
                // Limpa o formulário para criação de outros contatos
                $scope.formContato = {};
                $scope.contatos = data;
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Ao clicar no botão Remover, deleta o contato
    $scope.deletarContato = function(id) {
        $http.delete('/api/contatos/' + id)
            .success(function(data) {
                $scope.contatos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Ao clicar no botão Editar, edita o contato
    $scope.editarContato = function(id) {
        $http.get('/api/contatos/' + id)
            .success(function(data) {
                $scope.formContato = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // Recebe o JSON do contato para edição e atualiza
    $scope.atualizarContato = function() {
        $http.put('/api/contatos/' + $scope.formContato._id, $scope.formContato)
        .success( function(response){
            refresh();
        });
    };

    var r = "Ação e Aventura";
    var r2="Suspense";
    var r3="Comédia";


    $scope.compare = function(index){
      result = angular.equals(index,r);
      return result;
    }
    $scope.compare2 = function(index){
      result = angular.equals(index,r2);
      return result;
    }
    $scope.compare3 = function(index){
      result = angular.equals(index,r3);
      return result;
    }
    $scope.guard = function(index){
      $scope.algo = index;
      return end;
    }

    $scope.gravar = function(index){
      $localStorage.algo = index;
    }
    $scope.carreg = function(){
      $scope.algo = $localStorage.algo;
    }

    $scope.comp = function(index){
      result = angular.equals(index,$localStorage.algo);
      return result;
    }

    $scope.check = function(index,content){
        if(!angular.equals(index.nome,content.nome)){
            return angular.equals(index.categoria,content.categoria);
        }
    }

    $scope.teste = function(index){
      return $localStorage.algo;
    }
  }
