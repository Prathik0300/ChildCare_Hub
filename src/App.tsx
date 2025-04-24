import "./App.css";
import useIsMobile from "./hooks/useIsMobile";
import AppRoutes from "./pages";

function App() {
  const isMobile = useIsMobile();
  return (
    <div className={`App ${!isMobile ? "desktopContainer" : ""}`}>
      <AppRoutes />
    </div>
  );
}

export default App;
