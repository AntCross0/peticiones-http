const urlCrud = 'https://reqres.in/api/users';


//leer usuario
const getUser = async ( id ) => {
    //modifica el endpoint dependiendo del id que le pasemos para retornar un unico usuario
    const resp = await fetch(`${ urlCrud }/${ id }`);
    const { data }  = await resp.json();
    return data;
}   


const createUser = async ( user ) => {
    //para acceder a las configuraciones del fetch, despues del parametro colocamos {} y aqui podemos acceder a sus propiedades
    //el method es para determinar el tipo de peticion que queremos hacer
    //el body para convertir la informacion a string porque de esa manera la ve el servidor
    //headers es para una configuracion adicional que pueda necesitar el servidor, por ejemplo tokens, etc
    //el content type le estamos diciendo al servidor que insertaremos informacion de tipo json.
    const resp = await fetch( urlCrud,
        {
            method: 'POST',
            body: JSON.stringify( user ),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await resp.json();
}


const updateUser = async ( id, user ) => {
    //para actualizar utilizamos el metodo put
    const resp = await fetch( `${ urlCrud }/${ id }`,
        {
            method: 'PUT',
            body: JSON.stringify( user ),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        return await resp.json();
}


const deleteUser = async ( id ) => {
    const resp = await fetch( `${ urlCrud }/${ id }`, {
        method: 'DELETE'
    });

    return ( resp.ok) ? 'Se ha eliminado el registro' : 'No se pudo eliminar';
}

export {
    getUser,
    createUser,
    updateUser,
    deleteUser
}