# Love Pizza

### SPA with Vue.js and C# using .NET Core
A web app where users can signup/login, and just tell us how much they love pizzas by pressing an "I love it" button.
There are no restrictions on the number of times each user can tell us their appreciation, the only requirement is that only logged in users can vote.
In the home page, along with the signup/login buttons, we can put a little bar-chart displaying the top 10 users with the highest appreciation (in the X-axis) and in the Y-axis the number of votes.


### Users

Register a new one via SIGN UP option on the login screen.

### Frontend

#### Project setup
From root project directory:
```
cd /frontend && npm install
```

#### Compiles and hot-reloads for development
From root project directory:
```
cd /frontend && npm run serve
```

#### Compiles and minifies for production
From root project directory:
```
cd /frontend && npm run build
```

#### Run your unit tests
From root project directory:
```
cd /frontend && npm run test:unit
```


### Backend
#### To run the server app:
```
cd /backend && dotnet run
```

#### To run the back-end tests:
```
cd /backend/tests && dotnet test
```

###### Note:
The frontend URL is: https://localhost:5001/.

## Challenges (no particular order)
- Build and run the application
- Run frontend & backend tests
- Fix any failing tests
- Replace the bar chart for a pie chart
- Any other improvements