const app = "I don't do much.";
const digitalClock = {
  time: Math.round(new Date().getTime() / 1000),
  startTicking: function (){
    setInterval(() => this.time++, 1000);
  }
};

function censor(word, string) {
  const regWord = new RegExp(word, "gi")
  return string.replace(regWord, "BLEEP");
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
