import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();

db.snippet.create({
  data: {
    title: 'Hello World',
    code: '<h1>Hello world!</h1>'
  }
})