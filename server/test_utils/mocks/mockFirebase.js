const mockToken = {
  token: "mockToken"
};
const mockUid = "mockUid";
const shortPasswordErrorMessage  = {
  message: "Password should be at least 6 characters"
}; 

const mockCreateUserWithEmailAndPassword = jest.fn((inputEmail, inputPassword) => {
  if (inputPassword.length > 5) {
    return Promise.resolve(mockUserData) 
  } else {
    return Promise.reject(new Error(shortPasswordErrorMessage.message))
  }
})

const mockUserData = {
  user: {
    uid: mockUid,
    getIdToken: jest.fn(() => Promise.resolve( mockToken.token))
  } 
}

const mockAuthObject  = {
  createUserWithEmailAndPassword: mockCreateUserWithEmailAndPassword
};

const mockFirebase = {
  auth: jest.fn(() => (mockAuthObject)),
  initializeApp: jest.fn(({}) => ({})) 

}

module.exports = {mockFirebase, mockToken, mockUid, shortPasswordErrorMessage};