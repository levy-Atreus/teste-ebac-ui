/// <reference types="cypress"/>
//npx cypress open (para abrir o cypress)

describe('funcionalidade: detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
        
    });
    
    it('deve completar detalhes da conta sucesso', () => {
        cy.detalhesConta('Levy', 'Atreus', 'zer0')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});