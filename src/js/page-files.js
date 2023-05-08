import { uploadFile } from "./http-provider";

const body = document.body;
let inputfile;
let imgfoto;

const inputFileHtml = () => {
    const html = `
        <h2> Subir archivos</h2>
        <hr>
        <label>Selecciona un archivo: </label>

        <input type="file" accept="image/png, image/jpeg" />
        <br>
        <img id="foto" class="img-thumbnail" src="" />
    `;

    const div = document.createElement('div');
    div.classList.add('m-2');
    div.innerHTML = html;
    body.append( div );

    

}
const eventos = () => {
    
    imgfoto = document.querySelector('#foto');
    inputfile = document.querySelector('input');
    let status;    

    inputfile.addEventListener( 'change', ( event ) => {
      const file = event.target.files[0];
      imgfoto.src = 'https://cdn.dribbble.com/users/2973561/screenshots/5757826/media/c5083407af44c0753602fa3e7b025ba7.gif';


        uploadFile( file ).then( async resp => {
            imgfoto.src = await resp;
            
        }); 
    });
}



export const init = () => {
    
    inputFileHtml();
    eventos();

}