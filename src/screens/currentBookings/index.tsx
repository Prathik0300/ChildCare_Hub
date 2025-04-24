// src/screens/currentBookings.tsx

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "../../utils";
import { Rating, Button, Pagination } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import InfoIcon from "@mui/icons-material/Info";
import "./style.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const CurrentBookings = () => {
  const navigate = useNavigate();
  const [bookedSitters, setBookedSitters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const profilesPerPage = 6;

  useEffect(() => {
    const stored: any = getLocalStorageItem("BOOKED_SITTERS") || [];
    setBookedSitters(stored);
  }, []);

  const paginated = bookedSitters.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  );

  const handleMessageClick = (e, id: string) => {
    e.preventDefault();
    navigate(`/message/${id}?source=current-bookings`);
  };

  const handleProfileClick = (e, id: string) => {
    e.preventDefault();
    navigate(`/profile/${id}?source=current-bookings`);
  };

  return (
    <div className="currentBookingsContainer">
      <div className="bookedSitterHeader">
        <Link to="/search" className="generalLink">
          <ChevronLeftIcon className="reviewScreenIcon" />
        </Link>
        <p>Current Bookings</p>
      </div>
      <div className="bookedCardContainer">
        {paginated.map((sitter: any) => {
          const shiftDetails = sitter.shiftDetails;
          const startTime = `${shiftDetails.startTime} ${shiftDetails.startTimePeriod}`;
          const endTime = `${shiftDetails.endTime} ${shiftDetails.endTimePeriod}`;
          return (
            <div
              className="sitterCard"
              // onClick={(e) => handleProfileClick(e, sitter.id)}
            >
              <div className="sitterCardInfoContainer">
                <div>
                  <img
                    src={sitter.profileImage}
                    alt={sitter.fullName}
                    className="bookedCardImage"
                  />
                </div>
                <div className="bookedSitterInfo">
                  <p className="bookedSitterName">
                    <b>{sitter.fullName}</b>
                  </p>
                  <Rating
                    value={sitter.rating}
                    readOnly
                    sx={{
                      fontSize: "18px",
                      "& .MuiRating-iconFilled": { color: "#77c3ec" },
                    }}
                  />
                  <p className="bookedShift">
                    <b>Booking Date:</b> {shiftDetails.date}
                  </p>
                  <p className="bookedShift">
                    <b>Booking Slot:</b> {startTime} - {endTime}
                  </p>
                  <p className="bookedShift">
                    <b>Total Cost:</b> ${shiftDetails.totalCost}
                  </p>
                </div>
              </div>
              <div className="bookedSitterCtaContainer">
                <Button
                  variant="outlined"
                  className="bookedSitterCta"
                  startIcon={<MessageIcon />}
                  sx={{
                    border: "1px solid #77c3ec",
                    color: "#4EA4D2",
                  }}
                  onClick={(e) => handleMessageClick(e, sitter.id)}
                >
                  Message
                </Button>
                <Button
                  variant="contained"
                  className="bookedSitterCta"
                  startIcon={<InfoIcon />}
                  sx={{
                    backgroundColor: "#77c3ec",
                  }}
                  onClick={(e) => handleProfileClick(e, sitter.id)}
                >
                  Profile
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="paginationContainer">
        <Pagination
          count={Math.ceil(bookedSitters.length / profilesPerPage)}
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
          color="primary"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              color: "#4ea4d2",
              borderRadius: "8px",
              fontWeight: 500,
            },
            "& .Mui-selected": {
              backgroundColor: "#77c3ec",
              color: "#fff",
              border: "1px solid #77c3ec",
            },
            "& .Mui-selected:hover": {
              backgroundColor: "#4ea4d2",
              color: "#fff",
              border: "1px solid #4ea4d2",
            },
          }}
        />
      </div>
    </div>
  );
};

export default CurrentBookings;
