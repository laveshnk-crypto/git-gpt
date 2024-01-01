import "./styles/globals.css";

export default function LoginPage() {
  return (
    <div className="bg-gradient">
      <div className="flex items-center justify-center mt-auto">
        <h1 className="bg-text1 mt-60 scroll-animate">
          Welcome to GitGPT
        </h1>
      </div>
      <div className=" flex items-center justify-center mt-10">
        <button className="cool-button mr-8">Log in</button>
        <button className="cool-button">Sign up</button>
      </div>
    </div>
  );
}


