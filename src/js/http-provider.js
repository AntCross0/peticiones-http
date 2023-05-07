const jokeurl =  "https://api.chucknorris.io/jokes/random";


export const obtenerChiste = async () => {
    
    try {
    const resp = await fetch( jokeurl );
        
    if( !resp ) return alert('No se pudo realizar la peticion');



    const { icon_url, id, value } = await resp.json();
        return { icon_url, id, value }
    }
     catch (err) {
        throw err;
     }
}



export const obtenerUsuarios = async () => {
    try {
        
        const resp = await fetch('https://reqres.in/api/users?page=2');
        const {data:usuarios} = await resp.json();
        
        return usuarios;


    } 
    catch (error) {
        throw error;
    }
}



// fetch( jokeurl ).then( resp => {
//   resp.json().then( data => {

//     console.log( data.id );
//     console.log( data.value );

    
//   });
// })

// //otra forma de hacerlo

// fetch(jokeurl)
//     .then(resp => resp.json)
//         .then( ({id, value })=> {


//             console.log(id, value);


//         })