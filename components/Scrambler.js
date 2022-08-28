
const notations = ["R", "U", "L", "D", "F", "B"];
const types = ["", "'", "2"]

export default function scrambler(len = 23) {
    let scramble = [];
    for (let i = 0; i < len; i++) {
        scramble.push(noteGen(i, scramble));
    }
    scramble = scramble.filter((n) => { return n !== undefined});
    return scramble;

}

function noteGen(i, scramble){
    let note = notations[Math.floor(Math.random() * 6)]+types[Math.floor(Math.random() * 3)];
    if(scramble[i-1] === undefined){
        return "";
    }
    else if(note[0] === scramble[i-1][0]){
        noteGen(i,scramble);
    }
    else if(i === 0){
        return note;
    }
    else{
        return note;
    }
}



