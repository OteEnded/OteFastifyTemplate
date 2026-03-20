import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const landingHtmlPath = path.resolve(__dirname, '../../views/landing.html')

export default async function landingRoute(fastify) {
    fastify.get("/", async (request, reply) => {
        try {
            const html = await fs.promises.readFile(landingHtmlPath, 'utf-8')
            reply.type("text/html; charset=utf-8").send(html)
        } catch (error) {
            reply.code(500).send({ error: 'Failed to load landing page' })
        }
    });
}
