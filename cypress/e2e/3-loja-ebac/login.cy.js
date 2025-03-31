/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('levy@eu.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, levy (não é levy? Sair)')
        
    })

    it('deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.get('#username').type('lev@eu.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
    });

    it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.get('#username').type('levy@eu.com')
        cy.get('#password').type('000')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail levy@eu.com está incorreta. Perdeu a senha?')
        
    });

})