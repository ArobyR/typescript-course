function sumar(a: number, b: number): number {
  return a + b;
}

// parametro por defecto, parametro opcionales
const saludar = (
  nombre: string,
  apellido: string = "",
  edad?: number
): void => {
  if (edad) {
    console.log(`Saludos ${nombre} ${apellido} ${edad}`);
    return;
  }
  console.log(`Saludos ${nombre} ${apellido} proporsione una edad`);
};

saludar("Fundamentos", "Programacion", 22);
saludar("Fundamentos", "Programacion");
