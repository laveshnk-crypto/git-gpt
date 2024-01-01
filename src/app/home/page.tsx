import "../styles/globals.css"
import ChatComponent from "./components/chatComponent";

export default function HomePage() {

// ChatComponent

  return (
    <div>
      <div className="bg-gradient">
        <div className="flex items-center justify-center">
          <h1 className="bg-text1 mt-16 scroll-animate">
            GitGPT
          </h1>
        </div>
        <div className="flex items-center justify-center">
         <div className="bg-slate-950 p-3 h-[800px] w-[800px] overflow-y:auto rounded-md text-white mt-10">
            <ChatComponent/>
         </div>  
        </div>
      </div>
    </div>
  );
}