const jokeurl =  "https://api.chucknorris.io/jokes/random";
const cloudUrl = 'https://api.cloudinary.com/v1_1/diccwoblx/upload';
const cloudKey = 'da96tjlc';

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


export const uploadFile = async ( file ) => {
    //formData es por asi decirlo un formulario ya hecho
    const formData = new FormData();
    formData.append('upload_preset', cloudKey);
    formData.append('file', file);

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData

        });

        
         if(resp.ok) {
          const cloudResp = await resp.json();
          return cloudResp.secure_url;
        }
        else {
            throw await resp.json();
        }

        
    } catch (err) {
        throw err
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