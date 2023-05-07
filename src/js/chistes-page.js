import { obtenerChiste } from "./http-provider";

let olHtml;
let btnGenerator;
let snackbarHTMl = `<div class="position-absolute bottom-0 start-0">
    <div class="alert alert-success" style="" role="alert"> Se ha generado un chiste! </div>
</div>`;

const htmlChistesCreator = () => {
    const html = `
    <h1 class="mt-5">Chistes</h1>
    <hr>

    <button class="btn btn-primary" >Generar otro chiste</button>

    <ol class="mt-2 list-group">
    </ol>`;

    const containerDiv = document.createElement('div');

    containerDiv.innerHTML = html;

    document.body.append(containerDiv);
}


const eventos = () => {
    olHtml = document.querySelector('ol');
    btnGenerator = document.querySelector('button');
    




    btnGenerator.addEventListener('click', async (event) => {
        

        try{

            btnGenerator.disabled = true;
            dibujarChiste( await obtenerChiste());
            btnGenerator.disabled = false;

            snackbar();
        }
        catch (err) {
            throw err;
        }
        
    })
    
}


const snackbar = () => {
    const snackbarDiv = document.createElement('div');
    snackbarDiv.classList.add('position-absolute', 'bottom-0' , 'start-0');
    snackbarDiv.innerHTML = snackbarHTMl;


    document.body.append(snackbarDiv);

    setTimeout(() => {
        snackbarDiv.innerHTML = '';
    }, 1000);

}

const dibujarChiste = ( chiste ) => {
    const chisteLi = document.createElement('li');
    chisteLi.innerHTML = `<li class="list-group-item">${ chiste.value}</li>`;

    olHtml.append( chisteLi);
    
    
}



export const init = () => {
    htmlChistesCreator();
    eventos();
}

