import fastify from "fastify"
import cookie from "@fastify/cookie"
import websocket from "@fastify/websocket"
import { createPoll } from "./routes/create-poll"
import { getPoll } from "./routes/get-poll"
import { voteOnPoll } from "./routes/vote-on-poll"
import { pollResults } from "./ws/poll-results"

const app = fastify()

// Plugins
app.register(cookie, {
  secret: 'polls-app-nlw', // no need to use .env for this project
  hook: 'onRequest',
  parseOptions: {}
})
app.register(websocket)

// Routes
app.register(createPoll)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)

const port = 3333

app.listen({ port }).then(() => {
  console.log(`🚀 Server is running on port ${port}`)
})