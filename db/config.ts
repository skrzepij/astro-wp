import {column, defineDb, defineTable} from 'astro:db';

const Comment = defineTable({
  columns: {
    id: column.number({primaryKey: true}),
    postId: column.number(),
    author: column.text(),
    content: column.text(),
    createdAt: column.date(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Comment
  }
});
