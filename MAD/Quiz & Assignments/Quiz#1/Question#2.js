let palindrome = (str) => {
  const array = str.split('');
  const reverse = array.reverse();
  const revStr = reverse.join('');
  if (str === revStr) {
    console.log('String is Palindrome');
  }
  else {
    console.log('String is not Palindrome')
  }
}

palindrome('baabbaab');
