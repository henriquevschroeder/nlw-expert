import { FastifyInstance } from "fastify"
import { prisma } from "../../lib/prisma"
import { z } from 'zod'

export async function createPoll(app: FastifyInstance) {
  app.post('/polls', async (request, reply) => {
    const bodySchema = z.object({
      title: z.string(),
    })
  
    const { title } = bodySchema.parse(request.body)
  
    const poll = await prisma.poll.create({
      data: {
        title
      }
    })
  
    return reply.status(201).send({ pollId: poll.id })
  })
}