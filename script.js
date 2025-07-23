// Aside parte dois
// Contador de sorteios
let contador = 0;
const valorSpan = document.getElementById("valor");
const incrementarBotao = document.getElementById("numbers");

// Função para gerar números aleatórios
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; }

// Clique do botão
incrementarBotao.addEventListener("click", () => {
  contador++;
  valorSpan.textContent = contador;

  const el = document.getElementById("transitionRotate");
  const numero1 = document.getElementById("numero1");
  const numero2 = document.getElementById("numero2");

  // Etapas da animação de transição
  el.style.animation = "girarEsquerda 5s ease forwards";

  setTimeout(() => {
    el.style.animation = "moverEsquerda 6s ease forwards";
  }, 1500);

  setTimeout(() => {
    el.style.animation = "girarDireita 3.5s ease forwards";
  }, 3000);

  setTimeout(() => {
    el.style.animation = "moverDireita 5s ease forwards";
  }, 4500);

  // Reset dos números visuais
  numero1.classList.remove("numero1-animar");
  numero2.classList.remove("numero2-animar");
  numero1.style.opacity = 0;
  numero2.style.opacity = 0;
  numero1.style.transform = "translateX(0)";
  numero2.style.transform = "translateX(0)";
  numero1.style.color = "black";
  numero2.style.color = "black";

  // Atualiza os números sorteados
  numero1.textContent = gerarNumeroAleatorio(1, 100);
  numero2.textContent = gerarNumeroAleatorio(1, 100);

  // Anima número 1 (esquerda)
  setTimeout(() => {
    numero1.classList.add("numero1-animar");
  }, 400);

  // Anima número 2 (direita)
  setTimeout(() => {
    numero2.classList.add("numero2-animar");
  }, 1600);
});

