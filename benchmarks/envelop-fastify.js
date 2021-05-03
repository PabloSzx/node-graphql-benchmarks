"use strict";

const Fastify = require("fastify");
const { CreateApp } = require("@pablosz/envelop-app/fastify");

const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { useParserCache } = require("@envelop/parser-cache");
const { useValidationCache } = require("@envelop/validation-cache");
const schema = createApolloSchema();

/**
 * @type {import("fastify").FastifyInstance}
 */
const app = Fastify();

app.register(
  CreateApp({
    schema,
    jit: false,
    plugins: [useParserCache(), useValidationCache()],
    ide: false,
  }).buildApp().plugin,
);

app.listen(4001);
