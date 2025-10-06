import Timer from "./components/Timer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ThemeToggle />
      <h1 className="text-3xl font-bold mb-4">FocusFlow ⏳</h1>
      <Timer />
    </div>
  );
}

export default App;
