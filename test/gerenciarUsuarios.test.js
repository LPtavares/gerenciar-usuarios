const {retornarUsuarios, adicionarNovoUsuario} = require ('../src/gerenciarUsuarios');
const {expect} = require('chai');

//Describe cria um grupo de teste, com duas entradas, sendo uma entrada o nome do grupo de teste e a outra uma função vazia = function ()
//it é o teste, com duas entradas, sendo uma entrada o nome do teste e a outra uma função vazia = function ()

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        //1. Adicionar um novo nome da lista de usuários
        adicionarNovoUsuario({
            nome:'Maria',
            email:'maria@gmail.com'
        });

        //2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        //3. Comparar se o novo nome está no fim da lista de usuários, to.equal para valores
        //expect(listaDeUsuarios.at(-1).nome).to.equal('Maria');
        //expect(listaDeUsuarios.at(-1).email).to.equal('maria@gmail.com');

        //Comparar em objeto 
        expect(listaDeUsuarios.at(-1)).to.eql({  // to.deep.equal abreviasao to.eql, para objetos, to.equal para valores
            nome:'Maria',
            email:'maria@gmail.com'
        }); 

    });
});