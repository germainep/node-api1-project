const users = [];

getUsers = () => {
    return users;
};

getUserById = (id) => {
    users.find((user) => {
        return user.id === id;
    });
};

module.exports = {
    getUsers: getUsers,
    getUserById: getUserById

};
