interface Generico<T> {
  altura: T;
}

const obj: Generico<string> = { altura: "alto" };
const numberOne: Generico<number> = { altura: 22 };
