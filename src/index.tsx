import { hydrate, render } from "react-dom";
import "./index.css";
import App from "./App";
import GlobalStyles from "./base/globalStyles";

const rootElement = document.getElementById("root");
if (rootElement!.hasChildNodes()) {
  hydrate(
    <>
      <App />
    </>,
    rootElement
  );
} else {
  render(
    <>
      <App />
      <GlobalStyles />
    </>,
    rootElement
  );
}
