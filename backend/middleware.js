const z = require("zod");

const create = z.object({
  title: z.string().min(1, "Title is required"),
  desc: z.string().min(1, "Description is required"),
  done: z.boolean(),
});

const update = z.object({
  id: z.string().min(1, "ID is required"),
});

module.exports = { create, update };
