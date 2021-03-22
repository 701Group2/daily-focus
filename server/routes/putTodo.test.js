const request = require("supertest");
const app = require("../app");
const database = require("./../firebase").database;

let NZGmt = 13;
let todaysDate = new Date();
todaysDate.setHours(todaysDate.getHours() + NZGmt);
todaysDate = todaysDate.toISOString().slice(0, 10);

const expectedToDoListData = [
    {
        date: "2099-03-20",
        description: "Eat",
        entry_id: 1,
        ticked: false,
        time: "08:00",
        title: "Shopping",
    },
    {
        date: todaysDate,
        description: "sleep",
        entry_id: 1,
        ticked: false,
        time: "10:00",
        title: "Shopping",
    },
    {
        date: todaysDate,
        description: "Go shopping with bob",
        entry_id: 1,
        ticked: false,
        time: "08:00",
        title: "Shopping",
    },
    {
        date: "2030-03-20",
        description: "Changing description",
        entry_id: "a6722588-4f1c-4de1-aba0-ed597930871e",
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


describe("PUT todolist endpoint", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    

    it("Test PUT", async () => {
        const todolistItemInput = {
            date: "2030-03-20",
            description: "Changing description",
            entry_id: "a6722588-4f1c-4de1-aba0-ed597930871e",
            ticked: false,
            time: "08:00",
            title: "Shopping",
        };

        const response = await request(app)
            .put("/todo")
            .set("Accept", "application/json")
            .send(todolistItemInput)

        expect(response.status).toBe(200);
        expect(database.ref().child().child("to").set).toHaveBeenCalledWith(expectedToDoListData);
    });
});