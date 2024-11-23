describe('add calculator', () => {
    it('empty string should return 0', () => {
        expect(add('')).toBe(0);
    })
})

const add = (numbers) => {
    if(numbers == '') return 0
}