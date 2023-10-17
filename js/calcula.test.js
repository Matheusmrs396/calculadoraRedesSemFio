import{calculaDelta, calculaBhaskara} from './funcoes.js'

it('Calcula delta',()=>{
    expect(calculaDelta(2,4,1)).toBe(8);
})

it('Calcula delta',()=>{
    expect(calculaBhaskara(1,2,64)).toEqual({x: 3,x2: -5});
})
