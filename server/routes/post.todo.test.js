const request = require("supertest");
const app = require("../app");
const database = require("./../firebase").database;

const expectedToDoListData = [
    {
        date: "2000-03-20",
        description: "do something desc",
        entry_id: "a6722588-4f1c-4de1-aba0-ed597930871e",
        ticked: false,
        time: "12:00",
        title: "do something",
    },
    {
        date: "2021-03-20",
        description: "Go shopping with bob",
        entry_id: 3,
        ticked: false,
        time: "08:00",
        title: "Shopping",
    },
    {
        date: "2021-03-20",
        description: "sleep",
        entry_id: 2,
        ticked: false,
        time: "10:00",
        title: "Shopping",
    },
    {
        date: "2030-03-20",
        description: "Eat",
        entry_id: "1234",
        ticked: false,
        time: "08:00",
        title: "Shopping",
    },
];

jest.mock("./../firebase", () => {
    const mockDatabase = require("../test_utils/mocks/mockDatabase");
    return {
        database: mockDatabase,
    };
});


jest.mock("../auth", () => {
    return jest.fn(() => Promise.resolve("mockValidToken"));
});

jest.mock("uuid", () => ({
    v4: jest.fn(() => "1234")
}));

describe("POST todolist endpoint", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });


    it("Test POST", async () => {
        const todolistItemInput = {
            date: "2030-03-20",
            description: "Eat",
            time: "08:00",
            title: "Shopping",
        };

        const response = await request(app)
            .post("/todo")
            .set("Accept", "application/json")
            .send(todolistItemInput)

        expect(response.status).toBe(200);
        expect(database.ref().child().child("to").set).toHaveBeenCalledWith(expectedToDoListData);
    });
});