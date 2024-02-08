import fastify from "fastify"
import { createPoll } from "./routes/create-poll"
import { getPoll } from "./routes/get-poll"

const app = fastify()

app.register(createPoll)
app.register(getPoll)

const port = 3333

app.listen({ port }).then(() => {
  console.log(`🚀 Server is running on port ${port}`)
})