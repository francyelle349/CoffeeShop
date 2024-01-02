
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); /*A função togglePage só funciona se o script for inicializado antes de outras partes do código */
  }
  document.querySelector('#menu-btn').addEventListener('click', toggleNavbar);
  
  function toggleCart() {
    const cart = document.querySelector(' .cart-items-container');
    cart.classList.toggle('active');
  }
  
  document.querySelector('#cart-btn').addEventListener('click', toggleCart);
  
  
  function toggleSearch() {
    const cart = document.querySelector('.search-form');
    cart.classList.toggle('active');
  }
  
  document.querySelector('#search-btn').addEventListener('click', toggleSearch);
  
  function togglePage() {
    window.location.href = 'FormularioLogin.html';
              return false;
  }
function toggleSearch() {
  const searchForm = document.querySelector('.search-form');
  searchForm.classList.toggle('active');
}

// Adiciona um ouvinte de evento de clique ao botão de pesquisa para chamar a função toggleSearch
document.querySelector('#search-btn').addEventListener('click', toggleSearch);

// Função para redirecionar para a página 'FormularioLogin.html'











/* eu consegui porra*/





