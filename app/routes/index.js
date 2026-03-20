import pageRoutes from "./page/index.js";
import apiRoutes from "./api/index.js";

export default async function routes(fastify) {
    await fastify.register(apiRoutes, { prefix: '/api' });
    await fastify.register(pageRoutes);
}
