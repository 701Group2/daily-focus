const request = require('supertest')
const app = require('../app')
const firebase = require("firebase");
const database = require("./../firebase").database;

jest.mock('firebase', () => {
    const mockFirebase = require("../test_utils/mocks/mockFirebase")
    return mockFirebase
});

jest.mock("./../firebase", () => {
    const mockDatabase = require("../test_utils/mocks/mockDatabase")
    return {
        database: mockDatabase
    }
});


const validPasswordAndEmailInput = { 
    email: 'hello@gmail.com',
    password: '123456' 
}


describe("signup user endpoint  ", () => {
    it("returns 201 and makes calls to firebase", async () => {
        const response = await request(app).post('/signup')
        .set("Accept", "application/json")
        .send(validPasswordAndEmailInput)

        expect(response.status).toBe(201);
        expect(response.body).toEqual({"token": "mockToken"});

        //tests firebase method calls for creating a user
        expect(firebase.auth).toHaveBeenCalled();
        expect(firebase.auth().createUserWithEmailAndPassword)
        .toHaveBeenCalledWith(validPasswordAndEmailInput.email, validPasswordAndEmailInput.password);

        //tests database calls
        expect(database.ref).toHaveBeenCalledWith('/');
        expect(database.ref().update).toHaveBeenCalledWith({
            "mockUid" : {
                email: validPasswordAndEmailInput.email
            }
        });
    });    
});