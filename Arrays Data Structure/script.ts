const a = new ArrayBuffer(6)
// ArrayBuffer { byteLength: 6 }

const a8 = new Uint8Array(a)
a8[0] = 45

// Arrays are O[1]
