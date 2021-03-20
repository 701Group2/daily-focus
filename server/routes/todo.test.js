const request = require("supertest");
const app = require("../app");
const firebase = require("firebase");
const database = require("./../firebase").database;
const { mockToken, mockUid } = require("../test_utils/mocks/mockFirebase");

const userId = "test_user";

jest.mock("firebase", () => {
    const { mockFirebase } = require("../test_utils/mocks/mockFirebase");
    return mockFirebase;
});

jest.mock("./../firebase", () => {
    const mockDatabase = require("../test_utils/mocks/mockDatabase");
    return {
        database: mockDatabase,
    };
});

describe("to do list endpoint  ", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("when a valid email and password is given it returns 201 and makes calls to firebase", async () => {
        const response = await request(app)
            .get("/todo")
            .set("Accept", "application/json")
            .send(userId);

        expect(response.status).toBe(201);
    });
});
