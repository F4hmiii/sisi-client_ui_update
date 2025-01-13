import FormSignUp from "../components/Fragments/FormSignUp"
import AuthLayout from "../components/Layouts/AuthLayout"
import SignInPage from "./signin"

const SignUpPage = () => {
    return (
        <AuthLayout type="sign up">
            <FormSignUp/>
        </AuthLayout>
    )
}

export default SignUpPage