const { validateEmail } = require("../src/validateEmail");

describe("validateEmail", () => {
  test("should return a message if no email is provided", () => {
    const result = validateEmail();
    expect(result).toBe("invalid email");
  });

  test("should return a message if email is not string", () => {
    const result = validateEmail(1);
    expect(result).toBe("invalid email");
  });

  test("should return a message if email length is less than 8 characters", () => {
    const result = validateEmail("abcd");
    expect(result).toBe("email should be at least 8 characters");
  });

  test("should return a message if invalid email is passed", () => {
    expect(validateEmail("youssef.email.com")).toBe("please enter valid email");
    expect(validateEmail("youssef@email")).toBe("please enter valid email");
  });
  
  test("should return success message if valid email is passed", () => {
    const result = validateEmail("youssef@email.com");
    expect(result).toBe("valid email, success");
  });
});
