const { checkNumber,sayHello,getNames,getUser,loginUser } = require("../src/main");

describe("checkNumber", () => {
  test("should return the number itself if input is positive", () => {
    const result = checkNumber(2);
    expect(result).toBe(2);
  });

  test("should return 0 if input is negative", () => {
    const result = checkNumber(-2);
    expect(result).toBe(0);
  });

  test("should return 0 if input is 0", () => {
    const result = checkNumber(0);
    expect(result).toBe(0);
  });
});

describe("sayHello", () => {
  test("should return the hello message", () => {
    const result = sayHello("Youssef");
    // Assertion
    expect(result).toContain("Youssef");
    expect(result).toMatch(/youssef/i);
  });
});

describe("getNames", () => {
  test("should return an array of names", () => {
    const result = getNames();

    expect(result).toEqual(expect.arrayContaining(["Ali", "Youssef", "Hasan"]));
    expect(result).toHaveLength(3);

    expect(result).toBeDefined();
    expect(result).not.toBeNull();
  });
});

describe("getUser", () => {
  test("should return the user with the given id and name", () => {
    const result = getUser(1, "Youssef");

    expect(result).toEqual({ id: 1, name: "Youssef", role: "Admin" });
    expect(result).toMatchObject({ id: 1, name: "Youssef" });
    expect(result).toHaveProperty("id", 1);
  });
});

describe("loginUser", () => {
  test("should throw an error(exception) if email is falsy", () => {
    const falsyValues = [null, undefined, NaN, "", 0, false];

    falsyValues.forEach((value) => {
      expect(() => { loginUser(value) }).toThrow();
    });
  });

  test("should return a user object if valid email is passed", () => {
    const result = loginUser("youssef@email.com");
    expect(result).toMatchObject({ email: "youssef@email.com" });
    expect(result.id).toBeDefined();
    expect(result.id).toBeGreaterThan(0);
  })
});
