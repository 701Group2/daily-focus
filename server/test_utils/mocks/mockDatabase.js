// let todaysDate = new Date().setHours(todaysDate.getHours() + NZGmt);
// todaysDate = todaysDate.toISOString().slice(0, 10);

const mockToDoListData = [
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
        entry_id: 1,
        ticked: false,
        time: "08:00",
        title: "Shopping",
    },
];

const mockSnapshot = {
    exists: jest.fn(() => true),
    val: jest.fn(() => mockToDoListData),
};

const mockDatabaseLocation = {
    update: jest.fn(() => ({})),
    child: jest.fn(() => mockDatabaseLocation),
    get: jest.fn(() => Promise.resolve(mockSnapshot)),
    set: jest.fn(() => {}),
};

const mockDatabase = {
    ref: jest.fn(() => mockDatabaseLocation),
};

module.exports = mockDatabase;//{mockDatabase: mockDatabase, mockToDoListData: mockToDoListData};
