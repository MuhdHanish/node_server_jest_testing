let DB = {
    users: [
        {
            id: "1",
            username: "JaneDoe",
            password: "Jane@123"
        }
    ]
};

function getUsers() {
    return DB.users;
}

function findUserByUsername(username) {
    return DB.users.find(user => user.username === username);
}

function addUser(user) {
    const newUser = { id: (DB.users.length + 1).toString(), ...user };
    DB.users.push(newUser);
    return newUser;
}

module.exports = {
    getUsers,
    findUserByUsername,
    addUser
};
