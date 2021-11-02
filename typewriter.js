// to write the sentence character by character with a certain delay between
// each one, we have to incremente the delay each time we want to call setTimeout
// 
const sentence = "hello there from lighthouse labs";
let delay = 0;
for(const char of sentence){
    delay += 50;
    setTimeout(() => {
        process.stdout.write(char);
    }, delay);
}