const request = require("supertest");
const app = require("../../app");

const expectedAllTodo = [
    {
        date: "21/03/2021",
        description: "sleep",
        entry_id: 1,
        ticked: false,
        time: "10:00",
        title: "Shopping",
    },
    {
        date: "21/03/2021",
        description: "Go shopping with bob",
        entry_id: 2,
        ticked: false,
        time: "08:00",
        title: "Shopping",
    },
];

const expectedAfterDeleteTodo = [
    {
        date: "21/03/2021",
        description: "sleep",
        entry_id: 1,
        ticked: false,
        time: "10:00",
        title: "Shopping",
    }
];

jest.mock("./../../firebase", () => {
    const mockDatabase = require("../../test_utils/mocks/mockDatabase");
    return {
        database: mockDatabase,
    };
});

jest.mock("../../auth", () => {
    return jest.fn(() => Promise.resolve("mockValidToken"));
});

describe("/todo endpoint", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Delete a todo item by pass in userId and todoId", async () => {
        const response = await request(app)
            .delete("/todo/userId/1/entryId/2")
            .set("Accept", "application/json");

        expect(response.status).toBe(200);
        expect(response.body).toEqual(expectedAfterDeleteTodo);
    });
});
