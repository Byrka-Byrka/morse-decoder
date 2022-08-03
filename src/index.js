const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let lettersArr = expr.match(/.{1,10}/g)
    let morseArr = []
    lettersArr = lettersArr.map(e=>e.replace(/00/g, ''))
    lettersArr.forEach(e=>{
      let morseLetter = ''
      if (e === '**********'){
        morseLetter = ' '
        morseArr.push(morseLetter)
      } else {
        morseLetter = e.match(/.{1,2}/g)
        morseLetter = morseLetter.map(e=> e === '10' ? '.' : '-').join('')
      }
      if (morseLetter !== ' '){
        morseArr.push(MORSE_TABLE[morseLetter])
      }
    })
    return morseArr.join('')
  }

module.exports = {
    decode
}