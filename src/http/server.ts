import fastify from "fastify";

const app = fastify();

app
  .listen({
    port: 3353,
  })
  .then(() => {
    console.log("Http server running.");
  });
