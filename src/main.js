function checkNumber(number) {
    return number > 0 ? number : 0;
}

function sayHello(name) {
    return "Hello " + name + "How Are You Today?";
}

function getNames() {
    return ["Ali","Hasan","Youssef"];
}

function getUser(userId,username) {
    return { id: userId, name: username, role: "Admin" };
}

function loginUser(email) {
    if(!email) {
        throw new Error("Email is required");
    }

    return { id: 1, email }
}

module.exports = {
    checkNumber,
    sayHello,
    getNames,
    getUser,
    loginUser
}  