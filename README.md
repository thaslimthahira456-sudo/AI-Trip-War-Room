# AI Trip War Room — MERN Prototype

Independent internship project prototype based on the provided requirements. Not affiliated with Airbnb.

## Stack
React + Vite, Node.js + Express, MongoDB + Mongoose, Socket.IO, JWT, Jest.

## Implemented prototype features
- Register/login with bcrypt password hashing and JWT
- Create trip rooms and join by invite code
- Roles: Viewer, Planner, Leader, Admin (server-side checks for key actions)
- Itinerary items with optimistic position version, locking and move actions
- Live room chat and Socket.IO board/chat broadcasts
- Venue seed dataset for Lisbon
- Deterministic Concierge filters budget, dietary tags, opening hours and distance; responses cite source venue IDs
- Schedule-overlap and budget conflict detection
- Voting open/cast/resolve endpoints
- Budget split utility and basic recommendation baseline
- Responsive React dashboard

## Honest limitations
This is a working starter prototype, not proof that every PRD acceptance criterion is complete. Concierge uses deterministic grounded responses, not a hosted LLM/vector RAG. Recommendations are a content-based baseline, not a trained hybrid model. Performance targets, all moderation controls, refresh-token flow, admin upload UI, and full reconnect/load testing need further implementation and verification.

## Setup
1. Install Node.js 18+ and have MongoDB local or Atlas ready.
2. Copy `server/.env.example` to `server/.env`, then set `MONGO_URI` and a strong `JWT_SECRET`.
3. Copy `client/.env.example` to `client/.env` if desired.
4. In terminal 1:
   ```bash
   cd server
   npm install
   npm run seed
   npm run dev
   ```
5. In terminal 2:
   ```bash
   cd client
   npm install
   npm run dev
   ```
6. Open the Vite URL shown in the terminal. Register an account, create a Lisbon trip, then test board, chat, voting and Concierge.

## API
`POST /api/auth/register`, `POST /api/auth/login`, `GET /api/auth/me`
`GET /api/venues`, `POST /api/venues` (Admin)
`GET/POST /api/trips`, `POST /api/trips/join`, `GET /api/trips/:id`
`POST /api/trips/:id/items`, `PATCH /api/trips/:id/items/:itemId/move`, `PATCH /api/trips/:id/items/:itemId/lock`
`GET/POST /api/trips/:id/chat`
`POST /api/trips/:id/votes`, `POST /api/trips/:id/votes/:voteId/cast`, `POST /api/trips/:id/votes/:voteId/resolve`
`POST /api/trips/:id/concierge`, `GET /api/recommendations`, `GET /api/dashboard`, `GET /api/health`

Never commit `.env` files or credentials.
