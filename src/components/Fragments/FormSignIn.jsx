import Button from "../Elements/Button"
import Checkbox from "../Elements/Checkbox"
import LabeledInput from "../Elements/LabeledInput"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useContext } from "react"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
import { NotifContext } from "../../context/notifContext";

const FormSignIn = () => {
  const {setMsg, setOpen, setIsLoading} = useContext(NotifContext);
  const { setIsLoggedIn, setName} = useContext(AuthContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onError = (errors) => {console.log(errors)};

  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );

      const decode = jwtDecode(response.data.refreshToken);
      //console.log(decode);

      setOpen(true);
      setMsg({severity: "success", message: "Login success"});

      localStorage.setItem("refreshToken", response.data.refreshToken);

      setIsLoading(false);
      setOpen(true);
      setMsg({severity: "success", message: "Login success"});

      setIsLoggedIn(true);
      setName(decode.name);

      navigate("/");
    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        setOpen(true);
        setMsg({severity: "error", message: error.response.data.msg});
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onError)}>
      <div className="mb-6">
        <LabeledInput
          label="email"
          type="email"
          placeholder="Hello@example.com"
          name="email"
          register={{
            ...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address format",
              },
            }),
          }}
        />
        {errors?.email && (
          <div className="text-red-500">{errors.email.message}</div>
        )}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="password"
          type="password"
          placeholder="********"
          name="password"
          register={{
            ...register("password", {required: "Password is required"}),
          }}
        />
        {errors?.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
      </div>
      <div className="mb-3">
        <Checkbox />
        <label htmlFor="status" className="text-sm text-gray-01 ms-6">
          Keep me signed in
        </label>
      </div>
      <Button 
        variant={isValid ? "bg-primary w-full text-white zoom-in" : "bg-gray-05 w-full text-white"}
        type="submit"
        disabled={!isValid ? "disabled" : ""}
      >
        Login
      </Button>
    </form>
  )
}

export default FormSignIn