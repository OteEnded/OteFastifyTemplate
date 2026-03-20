import landingRoute from "./landing.route.js";

export default async function pageRoutes(fastify) {
    await fastify.register(landingRoute);
}
