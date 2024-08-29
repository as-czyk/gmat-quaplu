import { sql } from "@vercel/postgres";

export default function handler(req, res) {
  const { email } = req.body;
  console.log(email);
  sql`INSERT INTO EMAIL (email) VALUES (${email})`
    .then(() => res.send(true))
    .catch(() => res.send(false));
}
