const {retornarUsuarios, adicionarNovoUsuario} = require ('../src/gerenciarUsuarios');
const {expect} = require('chai');

//Describe cria um grupo de teste, com duas entradas, sendo uma entrada o nome do grupo de teste e a outra uma função vazia = function ()
//it é o teste, com duas entradas, sendo uma entrada o nome do teste e a outra uma função vazia = function ()

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //1. Adicionar um novo nome da lista de usuários
        adicionarNovoUsuario('Maria');

        //2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de usuários
        expect(listaDeUsuarios.at(-1)).to.equal('Maria');
    });
});