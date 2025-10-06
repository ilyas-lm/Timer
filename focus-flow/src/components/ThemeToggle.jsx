import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
       /* if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }*/
       document.documentElement.classList.toggle("dark", theme === "dark");
       localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme =  () => {
        setTheme( theme === "light" ? "dark" : "light");
    };

    return (
        <button onClick={toggleTheme}
         className="absolute top-6 right-6 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-full transition"
         >
             {theme === "light" ? "☀️ Light" : "🌙 Dark"}
        </button>
    );
}