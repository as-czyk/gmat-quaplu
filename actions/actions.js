"use server";

import { sql } from "@vercel/postgres";

export const addEmail = async (formData) => {
  const email = formData.get("email");
  console.log(email);
  try {
    await sql`
      INSERT INTO EMAIL (email)
      VALUES (${email})
    `;
    return true;
  } catch (error) {
    console.error("Failed to insert email:", error);
    return false;
  }
};
