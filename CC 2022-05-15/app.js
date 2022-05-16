// Clock showsÂ hÂ hours,Â mÂ minutes andÂ sÂ seconds after midnight.
// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
}

const past = (h, m, s) => ((h*3600)+(m*60)+s)*1000;
