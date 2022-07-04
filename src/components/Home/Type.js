import React from "react";
import Typewriter from "typewriter-effect";

// This is a component to create a typewriting effect 
// you can edit it in the strings list below if you like to add another sentence in type component

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Registration starts soon"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 100,
      }}
    />
  );
}

export default Type;
