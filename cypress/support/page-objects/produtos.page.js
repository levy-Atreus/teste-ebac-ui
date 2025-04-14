class ProdutosPage {

  visitarUrl() 
  {
      cy.visit('produtos')
  }

  buscarProdutos()
  {
    cy.get('[name="s"]').eq(1).type(nomeProduto)
    cy.get('cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search')').eq(1).click()
  }//.button-search

  buscarProdutosLista()
  {
    cy.get('.products > . row')
    .contains(nomeProduto)
    .click()
  }

  visitarProduto()
  {

  }

  addProdutoCarrinho()
  {

  }
}

export default new ProdutosPage()