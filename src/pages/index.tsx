import { Routes, Route } from "react-router-dom";
import Landing from "../screens/landing";
import Search from "../screens/search";
import Profile from "../screens/profile";
import AppContextProvider from "../context/appContext";
export default function AppRoutes() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route index path="/search" element={<Search />} />
        <Route path="/profile/:babysitterIndex" element={<Profile />} />
      </Routes>
    </AppContextProvider>
  );
}
