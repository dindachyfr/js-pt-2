import CryptoJS from "crypto-js";

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('never gonna come down', 'nanangismailismy247mood').toString();

// Decrypt
var bytes  = CryptoJS.AES.decrypt('U2FsdGVkX1+/+WTp6ODpRl5Er9OfqVxg7bjOW2RHW5kC7GwuQ0LgUkZRqafKGFTc', 'nanangismailismy247mood');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'