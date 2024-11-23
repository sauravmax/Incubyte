describe("add calculator", () => {
  it("empty string should return 0", () => {
    expect(add("")).toBe(0);
  });

  it("Single number should return that no it self", () => {
    expect(add("2")).toBe(2);
  });

  it("two number should return sum", () => {
    expect(add("2,3")).toBe(5);
  });

  it("any numbers of string should return sum", () => {
    expect(add("1,2,3,3,5,6")).toBe(20);
  });

  it("negative numbers not allowed", () => {
    expect(add("1,2,-3, -100")).toBe("negative numbers not allowed -3, -100");
    ;
  });

  

});

const add = (numbers) => {
  let sum = 0;
  if (numbers == "") return 0;
  else {
    const numArray = numbers.split(",");
    const negativeArray = numArray.filter(e => e < 0);
    if(negativeArray.length > 0){
        return `negative numbers not allowed ${negativeArray.join(',')}`
    }
    numArray.forEach((n) => {
      sum = sum + parseInt(n);
    });
    return sum;
  }
};
