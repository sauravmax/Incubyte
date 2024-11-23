describe('add calculator', () => {
    it('empty string should return 0', () => {
        expect(add('')).toBe(0);
    })

    it('Single number should return that no it self', () => {
        expect(add('2')).toBe(2);
    })

    
})

const add = (numbers) => {
    if(numbers == '') return 0
    if(numbers.length == 1) return parseInt(numbers)
}