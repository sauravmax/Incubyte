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
});

const add = (numbers) => {
  let sum = 0;
  if (numbers == "") return 0;
  else {
    const numArray = numbers.split(",");

    numArray.forEach((n) => {
      sum = sum + parseInt(n);
    });
    return sum;
  }
};
