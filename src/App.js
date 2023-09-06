import { useState } from "react";
import { createGlobalStyle } from "styled-components"

export const ToggledGlobalStyle = createGlobalStyle`
  body::after {
    content: "Some extra content"
  }
`;

const Font = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    src: url("/Roboto-Regular.ttf");
  }
  body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
  }
`;

function App() {
  const [toggled, setToggled] = useState(true);

  return (
    <div>
      <h1>This text flashes when some unrelated global style is added / removed</h1>
      <Font />

      <button onClick={() => setToggled((previous) => !previous)}>
        Toggle
      </button>

      {toggled && <ToggledGlobalStyle />}
    </div>
  );
}

export default App;
