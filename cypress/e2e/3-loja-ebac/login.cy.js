/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => 
{

    beforeEach(() => {
    cy.visit('minha-conta')
    });
    
    afterEach(() => {
        //cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('levy@eu.com')
        cy.get('#password').type('123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')//.should('contain' , 'Olá, levy (não é levy? Sair)')
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

    it(' Deve fazer login com sucesso Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)')//.should('contain' , 'Olá, levy (não é levy? Sair)')
    });

    it(' Deve fazer login com sucesso Usando fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario, {log: false })
            cy.get('#password').type(dados.senha, {log: false })
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)')//.should('contain' , 'Olá, levy (não é levy? Sair)')
        });

    });

    it('deve fazer o login com sucesso - usando comandos customizados', () => {
      cy.login('levy@eu.com', '123')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
      });
});
