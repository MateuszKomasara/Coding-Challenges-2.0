// given a string as a paramter, write a function that returns a string with every word replaced with 'sex'.

function toFreud(str){
    return str.split('').map(e => 'sex').join('');
}

const toFreud = str => str === '' ? '' : str.split(' ').map(e => 'sex').join(' ')

