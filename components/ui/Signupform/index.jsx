"use-client";

import { useRef } from "react";
import Input from "../Input";
import Button from "../Button";
import addEmail from "../../../actions/actions";

const SignupForm = () => {
  const ref = useRef(null);

  return (
    <form
      action={async (formData) => {
        ref.current?.reset();
        const res = await addEmail(formData);

        if (res) {
          console.log("ADDED");
        } else {
          console.log("NOT ADDED");
        }
      }}
      className="space-y-5 font-medium"
    >
      <div>
        <label>Email *</label>
        <Input
          aria-label="Email"
          type="email"
          required
          className="mt-2 focus:border-indigo-600"
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
