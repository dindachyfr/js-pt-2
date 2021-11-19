import CryptoJS from "crypto-js";

// Encrypt

export const encryptText = (textToEncrypt) =>{
    if(textToEncrypt !== ''){
        let encrypted = CryptoJS.AES.encrypt(textToEncrypt, 'nanangismailismy247mood').toString();
        return encrypted
        }
    else 
        return 'Please fill in variable textToEncrypt with string'
    }




export const decryptText = (textToDecrypt) =>{
    if(textToDecrypt !==''){
        let bytes  = CryptoJS.AES.decrypt(textToDecrypt, 'nanangismailismy247mood');
        let decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return decrypted
    }
    else
        return 'Please fill in variable textToDecrypt with string'
}