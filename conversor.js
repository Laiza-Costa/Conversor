function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorNumericoDigitado = parseFloat(valor);
  
    var valorEmLitros = valorNumericoDigitado * 0.001;
    console.log(valorEmLitros);
  
    var ElementoValorConvertido = document.getElementById("valorConvertido");
    var ValorConvertido = "O valor em Litros é " + valorEmLitros;
    ElementoValorConvertido.innerHTML = ValorConvertido;
  }