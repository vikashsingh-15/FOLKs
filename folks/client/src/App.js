import "./App.css";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId = `1057983499398-m5asu43cci1kn0c8l08o1271ulr4stdr.apps.googleusercontent.com`;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
