import fastify from "fastify"
import { createPoll } from "./routes/create-poll"

const app = fastify()

app.register(createPoll)

const port = 3333

app.listen({ port }).then(() => {
  console.log(`🚀 Server is running on port ${port}`)
})