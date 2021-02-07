function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
    const quiet = "I can't hear you!";
    const loud = "YES INDEED!";
    const love = "I love you, too." ;
    if (string.toUpperCase() === string){
        return loud;
    }
    else if (string.toLowerCase() === string) {
        return quiet;
    }
    else if ("I love you, Grandma." === string) {
        return love;
    }
}