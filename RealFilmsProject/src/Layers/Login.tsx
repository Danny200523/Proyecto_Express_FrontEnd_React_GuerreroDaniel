import AuthCard from "../Components/AuthCard";
import AuthLayout from "../Components/AuthLayout";
import PrimaryButton from "../Components/PrimaryButton";
import TextInput from "../Components/TextInput";
import fondo from "../assets/img/fondo.jpg";
import logo from "../assets/img/RealFilms_Logo_Word.svg";

export default function Login() {
  return (
    <AuthLayout backgroundUrl={fondo}>
      <AuthCard>
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          <img
            src={logo}
            alt="RealFilms"
            className="w-36 sm:w-44 lg:w-52"
          />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Login to RealFilms
          </h2>
        </div>

        <form
          className="flex flex-col gap-4 sm:gap-5"
          onSubmit={(e)=>{ e.preventDefault(); }}
        >
          <TextInput id="email" label="User" type="email" placeholder="Email" />
          <TextInput id="password" label="Password" type="password" placeholder="Contraseña" />

          <PrimaryButton type="submit" className="mt-2">Login</PrimaryButton>
        </form>

        <button
          type="button"
          className="text-base sm:text-lg underline hover:opacity-80 self-center"
          onClick={()=>{}}
        >
          Sign Up
        </button>
      </AuthCard>
    </AuthLayout>
  );
}
