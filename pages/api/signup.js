import { sql } from "@vercel/postgres";

export default function handler(req, res) {
  const { email } = req.body;
  sql`INSERT INTO EMAIL (email) VALUES (${email})`
    .then(() => true)
    .catch((error) => console.log(error))
    .finally();
}
