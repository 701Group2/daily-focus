const request = require('supertest')
const app = require('../app')
const firebase = require("firebase");
const database = require("./../firebase").database;
// const {mockUid, mockToken} = require("../test_utils/mocks/mockFirebase")

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



describe("signup user with valid email and password ", () => {
    
    it("return 201", async () => {

    //   await request(app)
    //     .post("/signup")
    //     .set("Accept", "application/json")
    //     .send(validPasswordAndEmailInput)
    //     .expect("Content-Type", "application/json; charset=utf-8")
    //     .expect(201)
    //     // console.log(firebase);

        const response = await request(app).post('/signup')
        .set("Accept", "application/json")
        .send(validPasswordAndEmailInput)

        expect(response.status).toBe(201);
        expect(response.body).toEqual({"token": "mockToken"});

        expect(firebase.auth).toHaveBeenCalled();
        expect(firebase.auth().createUserWithEmailAndPassword)
        .toHaveBeenCalledWith(validPasswordAndEmailInput.email, validPasswordAndEmailInput.password);

        expect(database.ref).toHaveBeenCalledWith('/');
        // expect(database.ref().update).toHaveBeenCalledWith({
        //     "mockUid" : {
        //         email: validPasswordAndEmailInput.email
        //     }
        // });



    });    
});