import cryptoJs from 'crypto-js'

export default class CommonUtils {
    public secretKey: string

    constructor(){
        if(process.env.SECRET_KEY){
            this.secretKey = process.env.SECRET_KEY;
        }else {
            throw new Error("Please provide me secret key while starting the execution")
        }
    }
    public encryptData(data:string){
        const encryptData = cryptoJs.AES.encrypt(data,this.secretKey).toString()
        console.log(encryptData)
        return encryptData
    }

    public decryptData(data:string){
        const decryptData = cryptoJs.AES.decrypt(data,this.secretKey).toString(cryptoJs.enc.Utf8)
        console.log(decryptData)
        return decryptData
    }
}