import { Routes, Route } from "react-router-dom";
import Landing from "../screens/landing";
import Search from "../screens/search";
import Profile from "../screens/profile";
import AppContextProvider from "../context/appContext";
import ReviewScreen from "../screens/review";
import BookingConfirmed from "../screens/bookingConfirmed";
import Message from "../screens/message";
import CurrentBookings from "../screens/currentBookings";

export default function AppRoutes() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route index path="/search" element={<Search />} />
        <Route path="/profile/:babysitterIndex" element={<Profile />} />
        <Route path="review/:babysitterIndex" element={<ReviewScreen />} />
        <Route
          path="confirmed/:babysitterIndex"
          element={<BookingConfirmed />}
        />
        <Route path="/current-bookings" element={<CurrentBookings />} />
        <Route path="message/:babysitterIndex" element={<Message />} />
      </Routes>
    </AppContextProvider>
  );
}
