class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }
  obterNomeAtleta() {
    return this.nome;
  }
  obtemIdadeAtleta() {
    return this.idade;
  }
  obtemPesoAtleta() {
    return this.peso;
  }
  obtemAlturaAtleta() {
    return this.altura;
  }
  obtemNotasAtleta() {
    return this.notas;
  }
  calculaCategoria() {
    if (this.idade > 8 && this.idade < 12) return "Infantil";
    if (this.idade > 11 && this.idade < 14) return "Juvenil";
    if (this.idade > 13 && this.idade < 16) return "Intermediário";
    if (this.idade > 15 && this.idade < 31) return "Adulto";
  }

  CalculaIMC() {
    let CalculaIMC = this.peso / (this.altura * this.altura);
    return CalculaIMC;
  }

  calculaMediaValida() {
    let mediaValida = Atleta.notas.sort((a, b) => {
      return a - b;
    });

    let notasSlice = mediaValida.slice(1, 4);

    let somaNota = 0;
    for (let i = 0; i <notasSlice.length; i++) {
      somaNota += notasSlice[i];
    }
    return somaNota / notasSlice.length;
  }
}
const Atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88]
);

console.log(`Nome:${Atleta.obterNomeAtleta()}`);
console.log(`Idade:${Atleta.obtemIdadeAtleta()}`);
console.log(`Peso:${Atleta.obtemPesoAtleta()}`);
console.log(`Altura:${Atleta.obtemAlturaAtleta()}`);
console.log(`Notas:${Atleta.obtemNotasAtleta()}`);
console.log(`Categoria:${Atleta.calculaCategoria()}`);
console.log(`IMC:${Atleta.CalculaIMC()}`);
console.log(`Media Valida:${Atleta.calculaMediaValida()}`);
