# Daily Focus Server
An API server containing endpoints for logging in and signing up a user, as well as CRUD endpoints required for the To-Do List widget in the client.
## Installation

Install node.js from https://nodejs.org/en/.

```bash
npm install
npm install -g firebase-tools.
firebase login
```

You will need to login with an email that has access to this 
[firebase console](https://console.firebase.google.com/u/2/project/daily-focus-a7423/overview).

To request access to the firebase console you must first open a Github issue as per the [guidelines](https://console.firebase.google.com/u/2/project/daily-focus-a7423/overview) in the wiki.


## Usage

```bash
npm start
```

## Contributing
Pull requests are welcome. Please open an issue first as per the guidelines in the [wiki](https://github.com/SE701Group2/daily-focus/wiki).

Please make sure to update unit tests as appropriate.  
For unit testing Jest and Supertest are being used and firebase instances are being mocked. 

## License
[MIT](https://choosealicense.com/licenses/mit/)