const chai = window.chai
const expect = chai.expect

describe('Las variables en Javascript', () => {
  it('pueden contener strings', () => {
    // Añade la línea que falta

    expect(a).to.be.a("string");
    expect(a).to.equal("Javascript");
  })
  it('pueden contener números', () => {
    // Añade la línea que falta

    expect(b).to.be.a("number");
    expect(b).to.equal(14.64);
  })
  it('pueden contener booleanos', () => {
    // Añade la línea que falta

    expect(c).to.be.a("boolean");
    expect(c).to.equal(false);
  })
})

describe('Comparaciones en Java', () => {
    it("usando ===", () => {
        const number = 20;
        //completa la asignación usando number y el comparador ===

        expect(expresion).to.equal(false)
    })

    it("usando !==", () => {
        const language = "Javascript";
        //completa la asignación usando language y el comparador !==

        expect(expresion).to.equal(false)
    })
})

describe("Operaciones aritméticas", () => {
    it("Usando suma", () => {
        const a = 10;

        expect(a+b).to.equal(100);
    })
    it("Usando multiplicación", () => {
        const a = 10;

        expect(a*b).to.equal(13);
    })
    it("Usando división", () => {
        const a = 10;

        expect(a*b).to.equal(2.5);
    })
})

describe('Algebra booleana', () => {
    it("Usando el operador AND (&&)", () => {
        const a = true;
        //completa la asignación de b

        const expression = a && b;
        expect(expression).to.equal(true);
    })
    it("Usando el operador OR (||)", () => {
        const a = false;
        //completa la asignación de b

        const expression = a || b;
        expect(expression).to.equal(false);
    })
})

