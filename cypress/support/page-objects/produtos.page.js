import produtosPage from '../support/pages/ProdutosPage';

describe('Funcionalidade de Produtos', () => {
  beforeEach(() => {
    produtosPage.visitarUrl();
  });

  it('Deve ser possível buscar por um produto', () => {
    const nomeDoProduto = 'Aether Gym Pant';
    produtosPage.buscarProduto(nomeDoProduto);
  });

  it('Deve ser possível navegar para a página de um produto', () => {
    const nomeDoProduto = 'Aether Gym Pant';
    produtosPage.visitarProduto(nomeDoProduto);
  });

  it('Deve ser possível adicionar um produto ao carrinho com atributos específicos', () => {
    const nomeDoProduto = 'Aether Gym Pant';
    const tamanho = 'G';
    const cor = 'Azul';
    const quantidade = '2';

    produtosPage.selecionarProdutoNaLista(nomeDoProduto);
    produtosPage.adicionarProdutoAoCarrinho(tamanho, cor, quantidade);
  });
});