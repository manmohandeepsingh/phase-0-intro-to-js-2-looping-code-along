// Code your solutions in this file
function writeCards(name, reason) {
    const names = []
    let i = 0;
    while (i < name.length) {
        names.push(`Thank you, ${name[i]}, for the wonderful ${reason} gift!`);
        i++
    }
    return names;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n--)
    }
}






