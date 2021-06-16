const cartaPostre = (
  postre: string,
  diaLlegada: number,
  ...frutas: string[]
): void => {
  console.log(`El postre es ${postre}, su fecha de llegada fue el ${diaLlegada}
    y estas son las frutas:
    tienes ${frutas}`);
};

cartaPostre("postre 1", 22, "naranja", "manzana", "banana", "zanahoria");
