import "./App.css";
import Head from './head';
import InputBox from "./inputboxes";

function Login() {
  return (
    <div className="flex flex-col justify-center p-10 bg-white w-[500px]">
      <Head/>
      <InputBox/>
      <button className="mt-5 bg-[#0ab88c] p-3 font-bold text-lg text-white hover:bg-[#18d4a5] rounded-lg"> Login</button>
        <a href="#" className="text-center mt-5 text-blue-600">
            Forgot Password?
        </a>
    </div>
  );
}

export default Login;
