import React, { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  const [isSun, setIsSun] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsSun(!isSun);
  };
  console.log("🚀 ~ file: App.jsx:24 ~ handleThemeSwitch ~ isSun:", isSun);
  return (
    <>
      <div className="h-screen bg-bkg text-content dark:bg-bkglight dark:text-contentLight">
        {isSun ? (
          <button className="px-10 rounded mt-10" onClick={handleThemeSwitch}>
            {isSun ? (
              <svg
                className="h-8 w-8 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
              </svg>
            ) : (
              <svg
                className="h-8 w-8 text-yellow-300 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="5" />{" "}
                <line x1="12" y1="1" x2="12" y2="3" />{" "}
                <line x1="12" y1="21" x2="12" y2="23" />{" "}
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
                <line x1="1" y1="12" x2="3" y2="12" />{" "}
                <line x1="21" y1="12" x2="23" y2="12" />{" "}
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        ) : (
          <button
            className=" ml-9 text-center  w-10 rounded mt-10 "
            onClick={handleThemeSwitch}
          >
            {isSun ? (
              <svg
                className="h-8 w-8 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M16.2 4a9.03 9.03 0 1 0 3.9 12a6.5 6.5 0 1 1 -3.9 -12" />
              </svg>
            ) : (
              <svg
                className="h-8 w-8 text-black"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <circle cx="12" cy="12" r="5" />{" "}
                <line x1="12" y1="1" x2="12" y2="3" />{" "}
                <line x1="12" y1="21" x2="12" y2="23" />{" "}
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />{" "}
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />{" "}
                <line x1="1" y1="12" x2="3" y2="12" />{" "}
                <line x1="21" y1="12" x2="23" y2="12" />{" "}
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />{" "}
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>
        )}

        <h1 className="text-primaryBlue  font-bold text-4xl text-center ">
          {" "}
          Hello World
        </h1>
        <h1 className="text-primaryPurple  text-4xl text-center mt-[8rem] ">
          {" "}
          Hello World
        </h1>
        <h1 className="text-SecondaryGray text-5xl text-center mt-[8rem] ">
          {" "}
          Hello World
        </h1>
      </div>
    </>
  );
}

export default App;
