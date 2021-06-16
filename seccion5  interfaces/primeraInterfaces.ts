interface Persona {
  readonly nombre: string;
  readonly apellido?: string;
}

function caminar(persona: Persona) {
  console.log(`Esta persona ${persona.nombre} esta caminando`);
}

let nueva_persona = { nombre: "Fifi", caminar: false };

caminar(nueva_persona);

interface General {
  (raza: string, numeroPatas: number): void;
  // repelerAgua(): void;
}

const functionUno: General = (raza: string, numeroPatas: number) => {
  console.log(`Raza: ${raza} numero de patas: ${numeroPatas}`);
};

functionUno("Felino", 4);

class HoHo implements Persona {
  nombre: string;
  apellido?: string;
  constructor() {}
  funcionaBien: General = (raza: string, numeroPatas: number) => {
    console.log(raza + " " + numeroPatas);
  };
}
