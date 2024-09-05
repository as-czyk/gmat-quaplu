"use client";

import { TYPEFORM_URL } from "../../../utils/constants";
import Button from "../Button";
import Input from "../Input";
import { useRef } from "react";
import { toast } from "react-hot-toast";

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
      if (res) {
        formRef.current?.reset();
        toast.success("Added to the waitlist successfully", {
          duration: 4000,
          icon: "🚀",
          iconTheme: {
            primary: "var(--primary-600)",
          },
          style: {
            border: "1px solid var(--primary-600)",
          },
        });
        window.open(TYPEFORM_URL, "_blank");
      } else {
        toast.error("Something went wrong, please try again.", {
          duration: 4000,
          icon: "🧐",
          iconTheme: {
            primary: "var(--primary-600)",
          },
          style: {
            border: "1px solid var(--primary-600)",
          },
        });
      }
    } catch (error) {
      toast.error("Something went wrong, please try again.", {
        duration: 4000,
        icon: "🧐",
        iconTheme: {
          primary: "var(--primary-600)",
        },
        style: {
          border: "1px solid var(--primary-600)",
        },
      });
      console.log("An error occurred" + error);
    }
  };

  return (
    <>
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
          <small>By signing up you agree to our data privacy statement.</small>
        </div>
        <div className="pt-1">
          <Button className="w-full text-white bg-primary-600 hover:bg-primary-800">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
