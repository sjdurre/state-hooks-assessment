import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default TextInput;
