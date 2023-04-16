var caixaRespostaVazia = document.querySelector('.resultado-vazio')
var caixaRespostaPreenchida = document.querySelector('.resultado-preenchido')

var botaoCriptografa = document.querySelector('.criptografar')
var botaoDescriptografa = document.querySelector('.descriptografar')
var botaoCopia = document.querySelector('.botao-copiar')
var botaoLimpaTexto = document.querySelector('.limpar-tela')

var textarea = document.querySelector('.textarea')
var textoCodificado = document.querySelector('.texto-codificado')

function mostraCaixaResultado() {
  if (textarea.value !== '') {
    caixaRespostaVazia.style.display = 'none'
    caixaRespostaPreenchida.style.display = 'block'
  }
}

function criptografaTexto() {
  var conteudoTextarea = textarea.value


  var resultadoCriptografado = conteudoTextarea
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

  textoCodificado.innerHTML = resultadoCriptografado

  mostraCaixaResultado()
}

function descriptografaTexto() {
  conteudoTextarea = textarea.value


  var resultadoDescriptografado = conteudoTextarea
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')

  textoCodificado.innerHTML = resultadoDescriptografado

  mostraCaixaResultado()
}

function copiaTextoCaixa() {
  textoCodificado.select()
  document.execCommand('copy')
}

function limpaTexto() {
  textarea.value = ''
  caixaRespostaVazia.style.display = 'block'
  caixaRespostaPreenchida.style.display = 'none'
}

botaoCriptografa.onclick = criptografaTexto
botaoDescriptografa.onclick = descriptografaTexto
botaoCopia.onclick = copiaTextoCaixa
botaoLimpaTexto.onclick = limpaTexto
