import { Link } from "react-router-dom";
import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";

const FormSignUp = () => {
  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="John Doe"
          name="name"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
        />
      </div>
      <Link to="/login">
        <Button variant="h-12 rounded-md text-sm bg-primary w-full text-white" type="submit">
          Register
        </Button>
      </Link>
    </form>
  );
};

export default FormSignUp;
