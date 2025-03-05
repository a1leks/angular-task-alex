## Getting Started

- Install packages with `npm i`
- Serve the application using `npx nx run angular-task:serve`

## User Management Application

1. Home page should show a card view of users from [JSONplaceholder](https://jsonplaceholder.typicode.com/). The home page should allow you to click on a users card to navigate to their profile page.
2. The profile page should use the angular router and exist at `/users/:id` and display all of the user information for the id in the route path.
3. Add filter(s) to the home page to allow the user to filter the list.
4. Add a way to favorite users in both the card view and detail page.
5. Run the following command to verify that your changes lint, test, and build correctly: `npx nx affected -t lint test build`.
