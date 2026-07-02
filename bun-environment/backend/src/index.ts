import { Elysia } from 'elysia';
import { db } from './db';

const app = new Elysia();

app.get('/', () => {
  const users = db.query('SELECT * FROM users;').all();
  return { users };
});

// A simple endpoint to add a new user for testing
app.post('/users', async ({ body }: { body: { name: string, email: string } }) => {
  const { name, email } = body;
  db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
  return { success: true };
});


app.listen(3000, () => {
  console.log('Backend is running on port 3000');
});
