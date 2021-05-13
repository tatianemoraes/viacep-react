export const cepMask = value => {
  return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d{3})(\d{3})/, '$1.$2-$3') // captura 3 grupos de numero o primeiro de 2, o segundo de 3 e o terceiro de 3, apos capturar o primeiro grupo ele adiciona um traço antes do segundo grupo de numero, e ao capturar o segundo grupo ele adiciona um ponto antes do terceiro grupo de numero
}