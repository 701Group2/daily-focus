const mockToken = "mockToken";
const mockUid = "mockUid";


const mockCreateUserWithEmailAndPassword = jest.fn((inputEmail, inputPassword) => {
  if (inputPassword.length > 5) {
    return Promise.resolve(mockUserData) 
  } else {
    throw new Error("error");
  }
})

const mockUserData = {
  user: {
    uid: mockUid,
    getIdToken: jest.fn(() => Promise.resolve( mockToken))
  } 
}

const mockAuthObject  = {
  createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword
};

const mockFirebase = {
  auth: jest.fn(() => (mockAuthObject)),
  initializeApp: jest.fn(({}) => ({})) 

}

module.exports = mockFirebase;




