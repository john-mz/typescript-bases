interface MediaPlayer {
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const mediaPlayer = {
    songDuration: 36,
    song: 'messed up',
    detail: {
        author: 'Stiven TC',
        year: 2000
    }
}
        // aqui estoy renombrando la var songDuration a duration, es opcional, solo se hace si el nombre de la variable songDuration ya hubiera sido usado por otra provocando asi un error
// const {songDuration:duration, song:songName, detail:detailReal} = mediaPlayer
// const {author:authorReal} = detailReal

// console.log(duration);
// console.log(songName);
// console.log(authorReal);

        // aqui no estoy renombrando ninguna propiedad/atributo
// const {songDuration, song, detail} = mediaPlayer
// const {author} = detail
// console.log(songDuration, song, author);

const dbz: string[] = ['Gokum', 'Vegeta', 'Trunks']
            // si la posicion no existe(undefined, 0, false, null) retorna 'No existe'
console.log(dbz[3] || 'No existe')

const [p1,p2,p3] = dbz
console.log('este veneco es ' + p3);

    // ignoramos primeras 2 posiciones
const [, , miPersonaje, test = 'not found'] = dbz
console.log('Este venekian es ' + miPersonaje);
console.log('Este otro venekian es ' + test);




