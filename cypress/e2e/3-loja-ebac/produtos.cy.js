/// <reference types="cypress" />
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl();
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProduto('Aether Gym Pant');
        cy.get('.products li.product:contains("Aether Gym Pant") a.woocommerce-LoopProduct-link').click();
        cy.get('.single-product').should('be.visible');
    });

    it('Deve buscar um produto com sucesso', () => {
        const produto = 'Aether Gym Pant';
        produtosPage.buscarProduto(produto);
        // Alterei o seletor para ser mais robusto e menos dependente da estrutura exata
        cy.get('.products li.product:contains("Aether Gym Pant") a.woocommerce-LoopProduct-link').click();
        cy.get('.product_title').should('contain', produto);
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aether Gym Pant');
        cy.get('.product_title').should('contain', 'Aether Gym Pant');
        // Removi o clique
    });

    it('Deve adicionar produtos ao carrinho', () => {
        const qtd = 1; // Declarei a qtd aqui
        produtosPage.buscarProduto('Aether Gym Pant');
        cy.get('.products li.product:contains("Aether Gym Pant") a.woocommerce-LoopProduct-link').click();
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd); // Corrigi a cor para 'Blue'
        cy.get('.woocommerce-message').should('contain', 'Aether Gym Pant');
    });

    it('Deve adicionar produtos ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then((dados) => {
            const produtoDados = dados[1];
            produtosPage.buscarProduto(produtoDados.nomeProduto);
            cy.get('.products li.product:contains("' + produtoDados.nomeProduto + '") a.woocommerce-LoopProduct-link').click();
            produtosPage.addProdutoCarrinho(
                produtoDados.tamanho,
                produtoDados.cor,
                produtoDados.quantidade
            );
            cy.get('.woocommerce-message').should('contain', produtoDados.nomeProduto);
        });
    });
});