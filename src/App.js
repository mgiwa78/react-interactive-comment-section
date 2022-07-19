import "./App.css";
import Home from "./component/home/home.component";
import ThemeProvider from "react-bootstrap/esm/ThemeProvider";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
