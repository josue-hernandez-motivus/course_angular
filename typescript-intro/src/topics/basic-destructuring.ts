interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'Mess',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

const {song: anotherSong, songDuration: duration, details} = audioPlayer;
const {author, year} = details;

console.log({anotherSong, duration, author, year});

// Destructuración de arrays
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [, , trunks, p3 = 'Not found'] = dbz;
console.log({trunks, p3});

export {};