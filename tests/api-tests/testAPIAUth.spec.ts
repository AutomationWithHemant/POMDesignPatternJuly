import {test,expect} from '@playwright/test'
let tokenValue;
test.beforeAll('Basic Auth',async({request})=>{
    const respToken = await request.post('auth',{
         data:{
            "username" : "admin",
            "password" : "password123"
        }
    })
    const tokenizer = await respToken.json()
    tokenValue = tokenizer.token
})


test('Authentication for Patch request Call using basic Auth',async({request})=>{
    const respPatch = await request.patch('booking/12',{
        headers:{
            Cookie: "token="+tokenValue!
        },
        data: {
            "firstname": "Hemant",
            "lastname": "Gandhi"
        }
    })
    expect(respPatch.status()).toBe(200)
})