import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./style.css";

import App from "./components/App";
import GraphiQL from "./components/playground/GraphiQL";
import RelayEnvironment from "./relay/RelayEnvironment";
import LoadingSpinner from "./components/LoadingSpinner";

function Routes() {
  if (window.location.pathname === "/playground") {
    return <GraphiQL />;
  }
  return (
    <RelayEnvironment>
      <React.Suspense fallback={<LoadingSpinner />}>
        <div className="app">
          <App />
        </div>
      </React.Suspense>
    </RelayEnvironment>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<Routes />);
