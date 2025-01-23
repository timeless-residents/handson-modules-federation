import React from "react";
const RemoteButton = React.lazy(() => import("remote/Button"));

const App = () => (
  <div>
    <h1>Host Application</h1>
    <React.Suspense fallback="Loading...">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;