import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
  return {
    status: 200,
    body: todos
  }
}

export const post = async (request) => {
  const data = await request.request.formData();
  todos.push({
    created_at: new Date(),
    text: data.body.get("text").toString(),
    done: false
  });

  return {
    status: 303,
    headers: {
      location: "/"
    }
  }
}