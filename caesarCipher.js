function caseCheck(ch) {
  return ch === ch.toUpperCase();
}
function alpha(ch) {
  const code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}
function caesarCipher(str, num) {
  let newstr = '';
  for (const ch of str) {
    if (alpha(ch)) {
      let base;
      if (caseCheck(ch)) {
        base = 'A'.charCodeAt(0);
      } else {
        base = 'a'.charCodeAt(0);
      }
      let newChar = String.fromCharCode(
        base + ((ch.charCodeAt(0) - base + num) % 26),
      );
      newstr += newChar;
    } else {
      newstr += ch;
    }
  }
  return newstr;
}

export { caesarCipher };
