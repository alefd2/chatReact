import { Chat } from "./components/Chat";
import { Header } from "./components/Header";
import "./global.css";

function App() {
  return (
    <div>
      <div className="wrapperMain">
        <Header />
        <main>
          <Chat />
        </main>
      </div>
    </div>
  );
}

export default App;
