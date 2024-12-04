const { z }  = require('zod');

const createToDo = z.object({
    title: z.string(),
    description: z.string(),
    completed: z.boolean(),
});

const updateToDo = z.object({
    id: z.number(),
})

module.exports = {
    createToDo: createToDo, updateToDo: updateToDo
}