import { useEffect, useState } from "react"
import { ThemeProvider } from "./Context/theme"
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark")
  }

  const lightTheme = () => {
    setThemeMode("light")
  }

  // actual logic for theme change
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode,  darkTheme, lightTheme}}>
      <div className="bg-slate-500 h-screen w-full flex justify-center items-center">
        <div className="">
          <div className="text-center mb-3">
            <ThemeBtn/>
          </div>
          <div className="flex justify-center">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
