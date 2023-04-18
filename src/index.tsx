import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./style.css";

import App from "./components/App";
import GraphiQL from "./components/playground/GraphiQL";
import RelayEnvironment from "./relay/RelayEnvironment";

function Routes() {
  if (window.location.pathname === "/playground") {
    return <GraphiQL />;
  }
  return (
    <RelayEnvironment>
      <App />
    </RelayEnvironment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Routes />);
