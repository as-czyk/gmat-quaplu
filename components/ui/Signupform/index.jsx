import Button from "../Button";
import Input from "../Input";
import { useRef } from "react";

const SignupForm = () => {
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const email = formData.get("email");

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (res.ok) {
        formRef.current?.reset();
      } else console.log(data.error);
    } catch (error) {
      console.log("An error occurred" + error);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-5 font-medium"
    >
      <div>
        <label>Email *</label>
        <Input
          aria-label="Email"
          type="email"
          required
          className="mt-2 focus:primary-600"
          name="email"
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
