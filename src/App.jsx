import { Chat } from "./components/Chat";
import { Header } from "./components/Header";
import "./global.css";

import styles from "./app.module.css";

function App() {
  return (
    <div>
      <div className={styles.wrapperMain}>
        <Header />
        <main>
          <Chat />
        </main>
      </div>
    </div>
  );
}

export default App;
