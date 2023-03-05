function reverse(str = 'madam im adam') {
    let lettersArray = str.split('').reverse().join('');
    console.log(lettersArray);
}

reverse();