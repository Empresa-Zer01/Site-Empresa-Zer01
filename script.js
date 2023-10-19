AOS.init();

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
   console.log("document is ready");
     
   
     $( ".card" ).hover(
     function() {
       $(this).addClass('shadow-lg').css('cursor', 'pointer'); 
     }, function() {
       $(this).removeClass('shadow-lg');
     }
   );
     
   // document ready  
   });
   
   function enviarForm() {
    var nome = document.querySelector('input[name="nome"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var assunto = document.querySelector('input[name="assunto"]').value;
    var mensagem = document.querySelector('textarea[name="mensagem"]').value;
  
    var emailBody = `
      De: ${nome} <${email}>
      Assunto: ${assunto}
  
      ${mensagem}
    `;
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'mailto:contato@example.com');
    xhr.setRequestHeader('Content-Type', 'text/plain');
    xhr.send(emailBody);
  }
  
  document.querySelector('button[type="submit"]').addEventListener('click', enviarForm);

  window.onscroll = function() { myFunction() };

var navbar = document.getElementById("myNavbar");
var initialBackgroundColor = "#333"; // Cor de fundo inicial da barra de navegação

function myFunction() {
  var scrollPosition = window.scrollY;

  // Lógica para mudar a cor de fundo com base na posição de rolagem
  if (scrollPosition > 100) {
    navbar.style.backgroundColor = "lightblue"; // Nova cor de fundo quando a posição de rolagem é maior que 100 pixels
  } else {
    navbar.style.backgroundColor = initialBackgroundColor; // Cor de fundo inicial quando a posição de rolagem é menor que 100 pixels
  }
}

