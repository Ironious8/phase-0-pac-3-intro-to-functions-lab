function shout(string) {
    return string.toUpperCase();
}
 shout("hello");

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}
 logShout("HELLO");


function logWhisper(string) {
    console.log(string.toLowerCase());
}
 logWhisper("hello");

 
 
 function sayHiToHeadphonedRoommate(string) {
    if(string===string.toLowerCase()) {
       return "I can't hear you!";
    }
    else if(string===string.toUpperCase()){
        return "YES INDEED!";
    }
    else if(string==="Let's have dinner together!"){
        return "I would love to!";
    }
  }
    console.log("I can't hear you!");
    console.log("YES INDEED!");
    console.log("I would love to!");