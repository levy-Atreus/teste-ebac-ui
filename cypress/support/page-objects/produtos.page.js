// produtos.page.js
class ProdutosPage {
    visitarUrl() {
      cy.visit('produtos');
    }
  
    buscarProduto(nomeProduto) {
      cy.get('[name="s"]').eq(1).type(nomeProduto);
      cy.get('.button-search').eq(1).click();
          // funcionando
    }
  
    buscarProdutosLista(nomeProduto) {
      cy.get('.produtos > .row')
      .contains(nomeProduto)
      .click()
          // funcionando
    }
  
    visitarProduto(nomeProduto) {
      const urlFormatada = nomeProduto.replace(/ /g, '-');
      cy.visit(`produtos/${urlFormatada}`)
    }
  
    addProdutoCarrinho(tamanho, cor, quantidade) {
      cy.get('.button-variable-item-' + tamanho).click
      cy.get('.button-variable-item-' + cor).click
      cy.get('.input-text').clear().type(quantidade)
      cy.get('.single_add_to_cart_button').click
    }
  
    selecionarProdutoPorNome(nomeProduto) {
      cy.wait(2000);
      cy.get('.product-loop__item') // Se este for o seletor para cada item da lista
        .find('a.woocommerce-LoopProduct-link') // Se esta for a classe do link do título
        .contains(nomeProduto, { matchCase: true })
        .should('be.visible')
        .click();
    }
  }
  
  export default new ProdutosPage();
