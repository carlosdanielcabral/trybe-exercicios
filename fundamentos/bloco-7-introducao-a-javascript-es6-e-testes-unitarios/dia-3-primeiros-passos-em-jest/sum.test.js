const {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
} = require("./sum");

describe("1) Função soma", () => {
  test("1 - Testa se o retorno de sum(4, 5) é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("2 - Testa se o retorno de sum(0, 0) é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('3 - Testa se a função lança um erro quando os parametros são 4 e "5"', () => {
    () => expect(sum(4, "5")).toThrow();
  });

  test('4 - Testa se a mensagem de erro é "parameters must be numbers" ', () => {
    () => expect(sum(4, "5")).toThrowError("parameters must be numbers");
  });
});

describe("2) Função myRemove", () => {
  test("1 - Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test("2 - Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array[1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  test("3 - Verifica se a chamada myRemove[1, 2, 3, 4, 5] retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("3) Função myFizzBuzz", () => {
  test("1 - Verifica se o retorno é fizzbuzz", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });

  test("2 - Verifica se o retorno é fizz", () => {
    expect(myFizzBuzz(6)).toBe("fizz");
  });

  test("3 - Verifica se o retorno é buzz", () => {
    expect(myFizzBuzz(10)).toBe("buzz");
  });

  test("4 - Verifica se o retorno é 11", () => {
    expect(myFizzBuzz(11)).toBe(11);
  });

  test("5 - Verifica se o retorno é false", () => {
    expect(myFizzBuzz("")).toBe(false);
  });
});

describe("4) Funções encode e decode", () => {
  test("1 - Verifica se encode e decode são funções", () => {
    expect(typeof encode && typeof decode).toBe("function");
  });

  test("2 - Verifica se as vogais são codificadas corretamente", () => {
    expect(encode("a, e, i, o, u")).toBe("1, 2, 3, 4, 5");
  });

  test("3 - Verifica se os números são decodificados corretamente", () => {
    expect(decode("1, 2, 3, 4, 5")).toBe("a, e, i, o, u");
  });

  test("4 - Verifica se as demais letras/numeros não são codificados/decodificados", () => {
    const letters =
      "b, c, d, f, g, h, j, k, l, m, n, p, q, r, s, t, v, w, x, y, z";
    const numbers = "0, 6, 7, 8, 9";
    expect(encode(letters)).toBe(letters);
    expect(decode(numbers)).toBe(numbers);
  });

  test("5 - Verifica se a string retornada tem o mesmo numero de caracteres que o parametro", () => {
    const stringTeste = "Testando a função";
    expect(encode(stringTeste)).toHaveLength(stringTeste.length);
  });
});

describe("5) Função techList", () => {
  it("1 - Testa se a função techList é definida", () => {
    expect(techList).toBeDefined();
  });
  it("2 - Testa se techList é uma função", () => {
    expect(typeof techList).toBe("function");
  });
  it("3 - Lista com 5 tecnologias deve retornar uma lista de objetos ordenados", () => {
    expect(
      techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas")
    ).toEqual([
      {
        tech: "CSS",
        name: "Lucas",
      },
      {
        tech: "HTML",
        name: "Lucas",
      },
      {
        tech: "JavaScript",
        name: "Lucas",
      },
      {
        tech: "Jest",
        name: "Lucas",
      },
      {
        tech: "React",
        name: "Lucas",
      },
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], "Lucas")).toBe("Vazio!");
  });
});

describe("6) Função hydrate", () => {
  it("1 - Testa se a função hydrate é definida", () => {
    expect(hydrate).toBeDefined();
  });

  it("2 - Testa se hydrate é uma função", () => {
    expect(typeof hydrate).toBe("function");
  });

  it("3 - Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber", () => {
    expect(hydrate("1 cerveja")).toBe("1 copo de água");

    expect(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho")).toBe(
      "7 copos de água"
    );

    expect(hydrate("2 shots de tequila, 2 cervejas e 1 corote")).toBe(
      "5 copos de água"
    );

    expect(hydrate("1 copo de catuaba, 1 cervejas e 1 copo de vinho")).toBe(
      "3 copos de água"
    );

    expect(hydrate("4 caipirinhas e 2 cervejas")).toBe("6 copos de água");
  });
});
