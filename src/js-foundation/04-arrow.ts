interface User {
    id: number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe',
    }
];

/*const getUserById = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.id === id);

        if(!user){
            return reject(`User not found with id ${id}`);
        }
        return resolve(user);
    });
}*/

export const getUserById = ( id: number, callback: (err?: string, user?: User) => void ) => {

    const user = users.find( (user) => user.id === id);

    ( user )
      ? callback(undefined, user)
      : callback(`User not found with id ${id}`);
}