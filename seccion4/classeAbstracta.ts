abstract class Operacion {
  public valor1: number;
  public valor2: number;
  public resultado: number = 0;

  constructor(v1: number, v2: number) {
    this.valor1 = v1;
    this.valor2 = v2;
  }

  abstract operar(): void;

  imprimir() {
    console.log(`Resultado: ${this.resultado}`);
  }
}

class Suma extends Operacion {
  constructor(v1: number, v2: number) {
    super(v1, v2);
  }

  operar() {
    this.resultado = this.valor1 + this.valor2;
  }
}

class Resta extends Operacion {
  constructor(v1: number, v2: number) {
    super(v1, v2);
  }

  operar() {
    this.resultado = this.valor1 - this.valor2;
  }
}

const sumando = new Suma(22, 30);
sumando.operar();
sumando.imprimir();
