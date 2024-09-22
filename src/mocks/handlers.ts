import { delay, http, HttpResponse } from 'msw';
import { factory, primaryKey } from '@mswjs/data';
import { nanoid } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
const firstFromArray = <T>(items: T | T[] | readonly T[]) => {
  return ([] as T[]).concat(items)[0];
};

const ARTIFICIAL_DELAY_MS = 500;
faker.seed(123);
export const db = factory({
  todo: {
    id: primaryKey(nanoid),
    text: String,
    date: String,
  },
});
type Todo = ReturnType<typeof db.todo.create>;

db.todo.create({
  id: faker.string.uuid(),
  text: faker.lorem.sentences(),
  date: faker.date.recent().toISOString(),
});
export const handlers = [
  http.get('/fakeApi/todos', async () => {
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(db.todo.getAll());
  }),
  http.post('/fakeApi/todos', async ({ request }) => {
    const data = (await request.json()) as Todo;
    const result = db.todo.create({
      ...data,
      date: faker.date.recent().toISOString(),
    });
    console.log('data', data);
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(result);
  }),
  http.delete('/fakeApi/todos/:id', async ({ params }) => {
    const id = firstFromArray(params.id);
    const result = db.todo.delete({
      where: {
        id: {
          in: [id],
        },
      },
    });
    console.log('result: ', result);
    await delay(ARTIFICIAL_DELAY_MS);
    return HttpResponse.json(result);
  }),
];
