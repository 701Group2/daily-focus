# Focus Server 
The server of Focus is a node JS Express server, used alongside real-time database on Google Firebase

# Installation 
Install the [Firebase npm module][Firebase install]:
```bash
$ npm install --save firebase
```
Install [node JS Express server][Node JS Express install]: 
```bash
$ npm install express --save
```

[Firebase install]: https://www.npmjs.com/package/firebase
[Node JS Express install]: https://expressjs.com/en/starter/installing.html
# Data Model
Data will be stored in a JSON format in the real-time database:

```
{
	“user_id1” : {
		“email” : ______,
		“todolist” : [
			{
				“entry_id” : ____,
				“title” : ____,
				“date” : ____,
				“time” : ____,
				“description” : ____,
				“ticked” : True/False,
                                   },
			{
				“entry_id” : ____,
				“title” : ____,
				“date” : ____,
				“time” : ____,
				“description” : ____,
				“ticked” : True/False,
                                   },
		]
	},
	“user_id2” : {
		“email” : ______,
		“todolist” : [
			{
				“entry_id” : ____,
				“title” : ____,
				“date” : ____,
				“time” : ____,
				“description” : ____,
				“ticked” : True/False,
                                   },
		]
	},
	.
	.
	.
}

```
Reading and writing to database


https://firebase.google.com/docs/database/web/read-and-write

# Authentication
Authentication will be done by Google Firebase using email and password.
Once a user signups using their email and password, Firebase authentication will create a user.
Each user has a generate user id and token.


e.g
```
   firebase
        .auth()
        .createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((data) => {
            userId = data.user.uid;
            return data.user.getIdToken();
        })
```


For more information:
https://firebase.google.com/docs/auth/web/password-auth


Firebase authentication can identify the user based on this token and can return the user id.


This works as follows:

```
 admin
            .auth()
            .verifyIdToken(idToken)
```

Thus, this token should be sent in the HTTP Authorization request header for every API endpoint related to a user.

For more information:
https://firebase.google.com/docs/auth/admin/verify-id-tokens

# API endpoints
## Signing up an user
* Method: POST
* URI: /signup
* Request payload: user representation
  
> ```
>  {
>    email:
>    password:
>  }
>  ```
* Response payload: bearer token for the user
> ```
> {
>    token : xxxx
> }
>  
> ```
* Response code: 
 > * 201 if user is able to be created successfully
 > * 400 if email or password (must be at least 6 characters) is not in valid form or if a user with this email address already exists.

## User Logging in
* Method: POST
* URI: /login
* Request payload: user representation
  
> ```
>  {
>    email:
>    password:
>  }
>  ```
* Response payload: bearer token for the user
> ```
> {
>    token : xxxx
> }
>  
> ```
* Response code: 
 > * 200 if user is able to successfully login
 > * 401 if either email/ password does not match whats stored in firebase

## Getting to-do list entries
* Method: GET
* URI: /todo
* Query parameter: filter for entries
  
> * “today”
> ```.../todo?timeline=today```
> * “upcoming”
> ```.../todo?timeline=upcoming```

* Additional parameters:
> In the authorization header of the HTTP request, there should be the authentication token sent as a bearer token

* Response payload: to-do list entries

> * If timeline=today, return all entries due today
> ```
> [
>     {
>         "date": [today's date],
>         "description": _____,
>         "entry_id": _____,
>         "ticked": true/false,
>         "time": _____AM/PM,
>         "title": _____
>     }
>
>     ...
> ]
> ```
> * If timeline=upcoming, return upcoming entries excluding today’s (tasks on the same date are grouped together as shown below)
> ```
> {
>     "[after today's date]": [
>         {
>             "date": [after today's date],
>             "description": _____,
>             "entry_id": _____,
>             "ticked": true/false,
>             "time": _____AM/PM,
>             "title": _____
>         }
>
>         ...
>     ],
>
>     "[another after today's date]": [
>         {
>             "date": [another after today's date],
>             "description": _____,
>             "entry_id": _____,
>             "ticked": true/false,
>             "time": _____AM/PM,
>             "title": _____
>         }
>
>         ...
>     ],
>
>     ...
> }
> ```
> * If no query parameters, return all to-do list entries
> ```
> [
>     {
>         "date": _____,
>         "description": _____,
>         "entry_id": _____,
>         "ticked": true/false,
>         "time": _____AM/PM,
>         "title": _____
>     }
>
>     ...
> ]
> ```
* Response code: 
 > * 200 if entries are successfully returned
 > * 401 if the auth token is invalid

## Creating new to-do list entry
* Method: POST
* URI: /todo
* Request payload: new entry fields
  
> ```
>  {
>    “title” : ____,
>    “date” : ____,
>    “time” : ____,
>    “description” : ____,
>  }
>  ```

* Additional parameters:
> In the authorization header of the HTTP request, there should be the authentication token sent as a bearer token

* Response action: 
> New entry written to the database

* Response code: 
 > * 200 if entry creation is successful
 > * 401 if the auth token is invalid

## Updating a to-do list entry
* Method: PUT
* URI: /todo
* Request payload: entry id followed by any updated fields (non-updated fields will not be included in request)
  
> ```
>  {
>    “entry_id” : ____,
>    “title” : ____,
>    “date” : ____,
>    “time” : ____,
>    “description” : ____,
>    “ticked” : ____,
>  }
>  ```

* Additional parameters:
> In the authorization header of the HTTP request, there should be the authentication token 

* Response action: 
> Update the specific entry in the database

* Response code: 
 > * 200 if entry update is successful
 > * 401 if the auth token is invalid

## Deleting a to-do list entry
* Method: DELETE
* URI: /todo
* Request payload: entry id of the to-do list entry to be deleted
  
> ```
>  {
>    “entry_id” : ____
>  }
>  ```

* Additional parameters:
> In the authorization header of the HTTP request, there should be the authentication token 

* Response action: 
> Delete the specific entry in the database

* Response code: 
 > * 200 if entry deletion is successful
 > * 401 if the auth token is invalid


# Unit Testing 
Jest and Supertest will be used for unit testing the API endpoints

See:
https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest
https://jestjs.io/docs/25.x/mock-functions

Firebase instances and Firebase real-time database instances will be mocked

an example of a mocking the firebase instance is:
```
// mockFirebase.js

const mockFirebase = {
  auth: jest.fn(() => (mockAuthObject)),
  initializeApp: jest.fn(({}) => ({})) 

}

module.exports = mockFirebase;
```

To inject this mock when test scripts are ran, see the following example:

```
// signup.test.js

jest.mock('firebase', () => {
    const {mockFirebase} = require("../test_utils/mocks/mockFirebase")
    return mockFirebase
});
```

Function calls on this mock object can be tested:
```
//signup.test.js

 it("when a valid email and password is given it returns 201 and makes calls to firebase", async () => {
        const response = await request(app).post('/signup')
        .set("Accept", "application/json")
        .send(validPasswordAndEmailInput)

        expect(response.status).toBe(201);
        expect(response.body).toEqual(mockToken);

        //tests firebase method calls for creating a user
        expect(firebase.auth).toHaveBeenCalled();
        expect(firebase.auth().createUserWithEmailAndPassword)
        .toHaveBeenCalledWith(validPasswordAndEmailInput.email, validPasswordAndEmailInput.password);

        //tests database calls
        expect(database.ref).toHaveBeenCalledWith('/');
        expect(database.ref().update).toHaveBeenCalledWith({
            [mockUid] : {
                email: validPasswordAndEmailInput.email
            }
        });
    });
```


# Contributing & Licensing
Refer to the [Code of Conduct][Code of Conduct] wiki page for a full description.
This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.0, available at
[https://www.contributor-covenant.org/version/2/0/code_of_conduct.html][v2.0].

Community Impact Guidelines were inspired by 
[Mozilla's code of conduct enforcement ladder][Mozilla CoC].

[Code of Conduct]: https://github.com/SE701Group2/daily-focus/wiki/Code-of-Conduct
[homepage]: https://www.contributor-covenant.org
[v2.0]: https://www.contributor-covenant.org/version/2/0/code_of_conduct.html
[Mozilla CoC]: https://github.com/mozilla/diversity

