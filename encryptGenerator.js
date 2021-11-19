import {encryptText, decryptText} from './mod/generator.js'

const textToEncrypt = 'ritaraturatatuli';

const encrypt = (textToEncrypt) =>{
    return encryptText(textToEncrypt)  
}

console.log(encrypt(textToEncrypt))





//decrypt

const textToDecrypt = 'U2FsdGVkX1/I+9lkOHRID9cH6u9Ih6KQ8ruSPnQvI3dezp3Eot8MWKidQpUbnTp0';

const decrypt = (textToDecrypt) =>{
    return decryptText(textToDecrypt)
}

console.log(decrypt(textToDecrypt))