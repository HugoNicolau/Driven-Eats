function selecionarComida(classSelect) {
  const botaoSelecionado = document.querySelector(".pratos .selecionado");

  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
  }

  const seletor = "." + classSelect;
  const botao = document.querySelector(seletor);
  botao.classList.add("selecionado");
  botaoFinal();
}

function selecionarBebida(classSelect) {
  const botaoSelecionado = document.querySelector(".bebidas .selecionado");

  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
  }

  const seletor = "." + classSelect;
  const botao = document.querySelector(seletor);
  botao.classList.add("selecionado");
  botaoFinal();
}

function selecionarSobremesa(classSelect) {
  const botaoSelecionado = document.querySelector(".sobremesas .selecionado");

  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove("selecionado");
  }

  const seletor = "." + classSelect;
  const botao = document.querySelector(seletor);
  botao.classList.add("selecionado");

  botaoFinal();
}

function botaoFinal() {
  const countAll = document.querySelectorAll(".selecionado").length;

  if (countAll === 3) {
    const parag = document.querySelector(".texto-b-inf");
    parag.innerHTML = "Fechar Pedido";
    const seletor = "." + "botao-inf";
    const botao = document.querySelector(seletor);
    botao.classList.add("habilitado");
    console.log("1");
  }
}

function wpp() {
  const botao = document.querySelector(".botao-inf");
  console.log(botao);

  if (botao.classList.contains("habilitado")) {
    let selecionarComida = document
      .querySelector(".pratos")
      .querySelector(".selecionado")
      .querySelector(".preco").innerHTML;
    let selecionarBebida = document
      .querySelector(".bebidas")
      .querySelector(".selecionado")
      .querySelector(".preco").innerHTML;
    let selecionarSobremesa = document
      .querySelector(".sobremesas")
      .querySelector(".selecionado")
      .querySelector(".preco").innerHTML;

    comida = document
      .querySelector(".pratos")
      .querySelector(".selecionado")
      .querySelector(".nome-alimento").innerHTML;
    bebida = document
      .querySelector(".bebidas")
      .querySelector(".selecionado")
      .querySelector(".nome-alimento").innerHTML;
    sobremesa = document
      .querySelector(".sobremesas")
      .querySelector(".selecionado")
      .querySelector(".nome-alimento").innerHTML;

    let precoComida = Number(
      selecionarComida.replace(",", ".").replace("R$", "")
    );
    let precoBebida = Number(
      selecionarBebida.replace(",", ".").replace("R$", "")
    );
    let precoSobremesa = Number(
      selecionarSobremesa.replace(",", ".").replace("R$", "")
    );

    let precoTotal = precoComida + precoBebida + precoSobremesa;

    let textMessage = `Olá, gostaria de fazer o pedido: \n- Prato: ${comida}\n- Bebida: ${bebida}\n- Sobremesa: ${sobremesa}\nTotal: R$ ${precoTotal.toFixed(
      2
    )}\n`;
    let params = encodeURIComponent(textMessage);
    let numRest = 55989898989;
    url = `https://wa.me/${numRest}?text=${params}`;
  }
}
