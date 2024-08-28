import { sql } from "@vercel/postgres";
import Button from "../Button";
import Input from "../Input";

const SignupForm = () => {
  const handleSubmit = async (email) => {
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

  return (
    <form onSubmit={handleSubmit} className="space-y-5 font-medium">
      <div>
        <label>Email *</label>
        <Input
          aria-label="Email"
          type="email"
          required
          className="mt-2 focus:primary-600"
        />
      </div>
      <div className="pt-1">
        <Button className="w-full text-white bg-primary-600 hover:bg-primary-800">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default SignupForm;
