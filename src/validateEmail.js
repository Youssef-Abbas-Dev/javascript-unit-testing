function validateEmail(email) {
  if(!email || typeof email !== "string") {
    return "invalid email";
  }

  if(email.trim().length < 8) {
    return "email should be at least 8 characters";
  }

  if(!email.includes("@") || !email.includes(".com")) {
    return "please enter valid email";
  }

  return "valid email, success";
}

module.exports = { validateEmail }