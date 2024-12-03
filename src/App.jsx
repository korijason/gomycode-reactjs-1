// src/App.js

import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

function App() {
  const firstName = "John"; // Change this to your first name, or leave it as 'John'

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-xs w-full bg-white p-6 rounded-lg shadow-lg">
        <Image />
        <div className="mt-4">
          <Name />
          <Price />
          <Description />
        </div>
      </div>

      {firstName ? (
        <div className="mt-6 text-center text-lg text-gray-800">
          <p>Hello, {firstName}!</p>
          <img
            src={`https://api.adorable.io/avatars/80/${firstName}.png`}
            alt="avatar"
            className="mx-auto mt-2 rounded-full"
          />
        </div>
      ) : (
        <div className="mt-6 text-center text-lg text-gray-800">
          <p>Hello, there!</p>
        </div>
      )}
    </div>
  );
}

export default App;
