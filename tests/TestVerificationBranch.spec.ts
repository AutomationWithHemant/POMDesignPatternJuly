import {test} from '../fixtures/common-fixtures'
import CommonUtils from '../utils/commonUtils';
test("Verification",async({page,loginPage,commonUtils})=>{
    //const CommonUtilObj = new CommonUtils();
    //CommonUtilObj.encryptData("standard_user")
    // CommonUtilObj.encryptData("secret_sauce")
    const decryptUserName = commonUtils.decryptData(process.env.USER_NAME!)
    const decryptPassword = commonUtils.decryptData(process.env.PASSWORD!)

    await loginPage.goToApplication(process.env.BASE_URL!)
    await loginPage.doLogin(decryptUserName,decryptPassword)
})