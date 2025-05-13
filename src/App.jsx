import { DarkModeProvider } from "./components/Provider/AppContext";
import Wrapper from "./components/Wrapper/Wrapper";
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <DarkModeProvider>
      <Wrapper />
      <Analytics />
    </DarkModeProvider>
  );
}

export default App;
