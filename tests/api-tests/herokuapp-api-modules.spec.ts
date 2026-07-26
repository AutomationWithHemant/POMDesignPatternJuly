import {expect} from '@playwright/test'
import {test} from '../../fixtures/common-fixtures'
import restfulAPIData from '../../data/restful-booker-api-module-data.json'
import apiPathData from '../../data/api-path-data.json'

test('API Testing 1',async({request})=>{
    const bookingIds = await request.get("https://restful-booker.herokuapp.com/booking")
    console.log(await bookingIds.json())
})

test('API Testing 2',async({request})=>{
    const bookingIds = await request.get("https://restful-booker.herokuapp.com/booking")
    console.log(await bookingIds.json())
})

test('Verify restfull bookings and getting valid responses',
    {
        tag:['@API','@UAT'],
        annotation: {
            type: "Test case link",
            description: "Journeytoautomation.org"
        }
    },async({request})=>{
   const bookingIdResp = await request.get(apiPathData['booking_path']+apiPathData['booking_id'])
   const bookingIdJsonResp = await bookingIdResp.json();
   console.log(bookingIdJsonResp)
   expect(bookingIdResp.status()).toBe(200)
   //expect(bookingIdJsonResp).not.tobeNull()
   expect(bookingIdResp.headers()['content-type']).toBe(restfulAPIData['content-type'])
   expect(bookingIdJsonResp.firstname).toEqual(restfulAPIData.first_name)
   expect(bookingIdJsonResp).toMatchObject({
    "firstname": "Josh",
    "lastname": "Allen",
    "totalprice": 111,
    "depositpaid": true,
    "bookingdates": {
        "checkin": "2018-01-01",
        "checkout": "2019-01-01"
    },
    "additionalneeds": "super bowls"
   })
})

test('Id - 10 [Restful Booker > Booking] Verify that user is able to create  a new booking',
    {
    tag:['@API','@UAT','@Regression'],
    annotation: {
        type: "Test new booking",
        description: "adding new booking"
    }
},async({request})=>{
    const createBookingResp = await request.post(apiPathData.booking_path,{
        data: restfulAPIData.create_booking
    })
    const createBookingJsonResp = await createBookingResp.json()
    expect(createBookingResp.status()).toBe(200)
    expect(createBookingJsonResp.booking).toMatchObject(restfulAPIData.create_booking)
}
)