// Contador de sorteios.
let contador = 0;
const valorSpan = document.getElementById("valor");
const btn = document.getElementById("numbers");
const el = document.getElementById("transitionRotate");
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

btn.addEventListener("click", () => {
  contador++;
  valorSpan.textContent = contador;

  // Oculta o botão.
  btn.classList.add("ocultar");

  // Reset visual.
  numero1.classList.remove("numero1-animar");
  numero2.classList.remove("numero2-animar");
  numero1.style.opacity = 0;
  numero2.style.opacity = 0;
  numero1.style.transform = "translate(-50%, -50%) translateX(0)";
  numero2.style.transform = "translate(-50%, -50%) translateX(0)";
  numero1.style.color = "black";
  numero2.style.color = "black";

  el.classList.remove("rotate-left", "rotate-right");
  el.style.animation = "none";
  el.style.opacity = 1;
  el.style.filter = "brightness(1)";

  // Gera dois números aleatórios.
  numero1.textContent = gerarNumeroAleatorioUnico(1, 100);
  numero2.textContent = gerarNumeroAleatorioUnico(1, 100);

  el.classList.add("rotate-left");

  setTimeout(() => {
  numero1.style.opacity = 1;
  }, 2000);

  setTimeout(() => {
   numero1.classList.add("numero1-animar");
   }, 3000);

  setTimeout(() => {
    el.style.opacity = 0;
    }, 4000);

  setTimeout(() => {
    el.classList.remove("rotate-left");
    el.classList.add("rotate-right");
    el.style.opacity = 1;
    }, 5000);

  setTimeout(() => {
    numero2.style.opacity = 1;
    }, 7000);

  setTimeout(() => {
    numero2.classList.add("numero2-animar");
    }, 8000);

  setTimeout(() => {
    el.style.animation = "brilhoDesaparece 1.5s forwards";
    el.style.opacity = 0;
    }, 9000);

  // Reexibe o botão ao final da sequência.
  setTimeout(() => {
  btn.classList.remove("ocultar");
  }, 10500);
  });


    //Alternar entre Asides.
    function alternarSecoes() {
    const asideOne = document.getElementById("asideOne");
    const asideTwo = document.getElementById("asideTwo");
    const botaoNumbers = document.getElementById("numbers");
 
    if (asideOne && asideTwo) {
    asideOne.style.display = "none";
    asideTwo.style.display = "block";
    }

    // Acionamento das animações do Aside 2 pelo botão Sortear do Aside 1.
    setTimeout(() => {
    if (botaoNumbers) {
    botaoNumbers.click();
    }
    })   }

  // Histórico para controlar números únicos
  const numerosUnicos = new Set();

// Função para gerar números sem repetição, caso o botão #chk ( Não repetir número) esteja marcado.
function gerarNumeroAleatorioUnico(min, max) {
const chkAtivo = document.getElementById("chk").checked;

  let numero;
  do {
  numero = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (chkAtivo && numerosUnicos.has(numero));

  // Com o botão ativo armazena o número.
  if (chkAtivo) {
  numerosUnicos.add(numero);
  }

  return numero;
  }

