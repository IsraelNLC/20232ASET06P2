const irrf = require('./irrf')

describe('[Obter faixas IRRF]', () => {
    test('deve retornar 05 elementos', () => {
        const faixas = irrf.obterFaixas();
        expect(faixas.length).toEqual(5);
    });
});

describe('[Encontrar aliquota IRRF]', () => {
    test('deve retornar zero', () => {
        const faixas = irrf.obterFaixas();
        const result = irrf.faixaContemplaValor(100, faixas[0]);
        expect(result).toEqual(true);
    });
});

//  O teste deverá passar com os seguintes valores: salário-base = 2722.61 e retorno esperado = 45.80
describe('[Calcular desconto IRRF]', () => {
   test('O teste deve retornar 45.80', () => {
        const desconto = irrf.calculardesconto(2772.61);
        expect(desconto).toEqual(45.80)
    });
});

