import { query } from '@/lib/db/conn';

export async function GET(req: Request) {
  console.log(req);

  const results = await query('SELECT * FROM Users');

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}