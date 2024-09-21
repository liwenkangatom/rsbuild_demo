import { delay, http, HttpResponse } from 'msw';
import { factory, primaryKey } from '@mswjs/data';
import { nanoid } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
const firstFromArray = <T>(items: T | T[] | readonly T[]) => {
  return ([] as T[]).concat(items)[0];
};

const ARTIFICIAL_DELAY_MS = 2000;
faker.seed(123);
export const db = factory({
  todo: {
    id: primaryKey(nanoid),
    content: String,
    title: String,
    date: String,
  },
});
type Todo = ReturnType<typeof db.todo.create>;

db.todo.create({
  id: faker.string.uuid(),
  content: faker.lorem.sentences(),
  title: faker.lorem.word(),
  date: faker.date.recent().toISOString(),
});
export const handlers = [
  http.get('/todos', async () => {
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(db.todo.getAll());
  }),
  http.post('/todos', async ({ request }) => {
    const data = (await request.json()) as Todo;
    const result = db.todo.create({
      ...data,
      date: faker.date.recent().toISOString(),
    });
    return HttpResponse.json(result);
  }),
  http.delete('/todos/:id', ({ params }) => {
    const id = firstFromArray(params.id);
    console.log(`Captured a "DELETE /posts/${params.id}" request`);
    const result = db.todo.delete({
      where: {
        id: {
          in: [id],
        },
      },
    });
    return HttpResponse.json(result);
  }),
];
