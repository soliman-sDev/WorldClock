import { DarkModeProvider } from "./components/Provider/AppContext";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <DarkModeProvider>
      <Wrapper />
    </DarkModeProvider>
  );
}

export default App;
