const app = require ('./server') 
const request = require('supertest')

test("test request with valid payload", function() {
    const testPayload = {
        name: "test name",
        email: "test.email@example.com",
        interests: "testing" 

    }
    const response =  await request(app)
        .post('/update-profile')
        .send(testPayload)

    console.log(response.body)    
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("info")
    expect(response.body.info).toBe("user profile data updated successfully")
})