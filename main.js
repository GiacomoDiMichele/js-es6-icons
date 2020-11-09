//creo l'array di oggetti di icone
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

//creo un array di colori per assegnarli poi in base al tipo di icona
const colors = ['red', 'purple', 'black'];

//creo un array vuoto dove pushare i tipi di icona che sono suddivisi in 3
const icon_types = [];

//creo un for each, per scorrere OGNI oggetto(icona)
icons.forEach((icon) => {
    //destrutturo l icona prendendomi solo il tipo, sarà l'elemento che mi servirà per pusharlo nell'array
    const {type} = icon;
    //VERIFICO SE l'array già include uno dei tipi già inseriti, in modo da non farli ripetere
    if (!icon_types.includes(icon.type)) {
        //se non è vero che il tipo è gia presente pusho l'elemento nell'array icon_types
        icon_types.push(icon.type);
    }
});

console.log(icon_types);



//scorro tutti gli oggetti nell'array icon
icons.forEach((icon) => {
    //destrutturo e mi prendo le proprietò per formare l'icona nell'ordine di fontawesome
    const {name, prefix, family} = icon;
    //creo con append un blocco da inserire nell html per rendere visibili poi le icone
    $('#icons-container').append(`
    <div>
        <i class="${family} ${prefix}${name}"></i>
        <p>${name}</p>
    </div>
    `);
});
