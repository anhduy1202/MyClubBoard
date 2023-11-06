# MyClubBoard Backend

## Tech Stacks:

- [Elysia.js](https://elysiajs.com/) (Bun HTTP framework)
- [PlanetScale](https://planetscale.com/) (MySQL Platform)
- mysql2 (MySQL Client to write SQL query)

## Getting Started

- [Install Bun](https://bun.sh/docs/installation)
- For Mac/Linux user:

`curl -fsSL https://bun.sh/install | bash `

- Install packages from Bun (Elysia.js)

`bun install`

## Development

- Before you run the server, you'll need to create a .env file (refer to .env.example for the variables)
- For **DATABASE_URL**, contact me to get the PlanetScale URL
- After you have all of the .env variables, then you can run the server by the command:

```
bun run dev
```

Open http://localhost:8080/ with your browser to see the result.

## Available Endpoints
| Method  | Endpoints  | Response Schema |
| ------------- | ------------- | ------------- |
| GET  | /universities  | id, location, state, name, logo, num_clubs |
| GET | /clubs  | id, name, logo, university_id, state  |
| GET | /universities/{id}  | id, title, qualification, tools, responsibilities, posted_date, posted_by, club_id, club_name, club_logo  |