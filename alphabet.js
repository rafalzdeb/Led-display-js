function convert(char) {
  let alphabet = [[' ','00000000000000000000000000000000000'],
                  ['a','01110100011000111111100011000110001'],
                  ['b','11110100011000111110100011000111110'],
                  ['c','01110100011000010000100001000101110'],
                  ['d','11110100011000110001100011000111110'],
                  ['e','11111100001000011110100001000011111'],
                  ['f','11111100001000011110100001000010000'],
                  ['g','01110100011000010111100011000101110'],
                  ['h','10001100011000111111100011000110001'],
                  ['i','01110001000010000100001000010001110'],
                  ['j','00001000010000100001000011000101110'],
                  ['k','10001100101010011000101001001010001'],
                  ['l','10000100001000010000100001000011111'],
                  ['m','10001100011101110101100011000110001'],
                  ['n','10001100011100110101100111000110001'],
                  ['o','01110100011000110001100011000101110'],
                  ['p','11110100011000111110100001000010000'],
                  ['q','01110100011000110001101011001001101'],
                  ['r','11110100011000111110101001001010001'],
                  ['s','01110100011000001110000011000101110'],
                  ['t','11111001000010000100001000010000100'],
                  ['u','10001100011000110001100011000101110'],
                  ['v','10001100011000110001100010101000100'],
                  ['w','10001100011000110001101011010101010'],
                  ['x','10001100010101000100010101000110001'],
                  ['y','10001100011000101010001000010000100'],
                  ['z','11111000010001000100010001000011111'],
                  ['1','00100011000010000100001000010001110'],
                  ['2','01110100010000100110010001000011111'],
                  ['3','01110100010000100110000011000101110'],
                  ['4','00010001100101010010111110001000010'],
                  ['5','11111100001111000001000010000111110'],
                  ['6','01110100011000011110100011000101110'],
                  ['7','11111000010001000100010000100001000'],
                  ['8','01110100011000101110100011000101110'],
                  ['9','01110100011000101111000011000101110'],
                  ['0','01110100011100110101100111000101110'],
                  ['?','01110100010000100110001000000000100'],
                  ['!','00100001000010000100001000000000100'],
                  ['(','00010001000010000100001000010000010'],
                  [')','01000001000010000100001000010001000'],
                  ['<','00000000100010001000001000001000000'],
                  ['>','00000010000010000010001000100000000'],
                  ['.','00000000000000000000000000000000100'],
                  [':','00000000000010000000001000000000000'],
                  [',','00000000000000000000000000010001000'],
                  ['$','01110101011010001110001011010101110'],
                  ['|','11111111111111111111111111111111111'],
                  ['@','01110100011011111011101111000001110'],
                  ['/','00000000010001000100010001000000000'],
                  ['&','01100100101000001000101011001001101'],
                  ['\'','00010001000000000000000000000000000']
                ]

  for (var i = 0; i < alphabet.length; i++) {
    if(alphabet[i][0] === char) {
      return alphabet[i][1];
    }
  }
}
