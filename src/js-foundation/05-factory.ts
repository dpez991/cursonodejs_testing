// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins/index');
interface BuildMakerPersonOptions {
    getUUID: () => string;
    getAge: (birthdate: string) => number;
}

interface PersonOptions {
    name: string;
    birthdate: string;
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakerPersonOptions) => {
    return ({ name, birthdate }: PersonOptions) => {
    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}
}

/*const buildPerson = ({ name, birthdate }) => {
    return {
        id: getUUID(),
        name: name,
        birthdate: birthdate,
        age: getAge(birthdate),
    }
}*/

//const obj = { name: 'John', birthdate: '2006-08-14' };

//const john = buildPerson( obj );

//console.log(john);