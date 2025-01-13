import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import LabeledInput from "../Elements/LabeledInput"

const FormForgot = () => {
    return (
        <>
            <h3 className="text-center font-bold">Forgot Password?</h3>
            <h4 className="font-light text-center">Enter your email address to get the password reset link.</h4>
            <form action="">
                <div className="mb-6 mt-6">
                    <LabeledInput
                        label="Email Address"
                        type="email"
                        placeholder="Hello@example.com"
                        name="email"
                    />
                </div>
                <Link to="/login">
                    <Button variant="h-12 rounded-md text-sm bg-primary w-full text-white" type="submit">
                        Password Reset
                    </Button>
                </Link>
                <a href="/login">
                    <Button variant="h-12 pt-5 text-sm w-full text-gray-800" type="button">
                        Back To Login
                    </Button>
                </a>
            </form>
        </>
    )
}

export default FormForgot