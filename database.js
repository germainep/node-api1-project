let users = [
    { id: '1', name: 'Germaine', bio: 'testing' },
    { id: '2', name: 'james', bio: 'testing 2' },
    { id: '3', name: 'jumper', bio: 'third' }
]

const getUsers = () => {
    return users
}

const getUserById = ( id ) => {
    return users.find(( user ) => {
        return user.id === id
    })
}

const createUser = ( data ) => {
    const payload = data
    users.push(payload)
    console.log(data)
    return payload
}

const updateUser = ( id, data ) => {
    const index = users.findIndex(( user ) => {
        return user.id === id
    })
    users[index] = {
        ...users[index],
        ...data
    }
    return users[index]
}

const deleteUser = ( id ) => {
    users = users.filter(( user ) => {
        return id !== user.id
    })
    console.log(users)
}
module.exports = {
    getUsers: getUsers,
    getUserById: getUserById,
    createUser: createUser,
    deleteUser: deleteUser,
    updateUser
}
