import "./style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { BABYSITTER_INFO } from "../../constants/babysitter";
import { useAppContext } from "../../context/hooks/useAppContext";
import { Button, Rating } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import { calculateHoursCovered } from "../../utils";
import { useEffect, useState } from "react";
import Calendar from "../../components/calendar";

const ReviewScreen = () => {
  const { babysitterIndex } = useParams();
  const [openCalendar, setOpenCalendar] = useState(false);

  const {
    appContextValue: {
      selectedSlot,
      startTime,
      startTimePeriod,
      endTime,
      endTimePeriod,
    },
    appContextUpdater: {
      setSelectedSlot,
      setStartTime,
      setStartTimePeriod,
      setEndTime,
      setEndTimePeriod,
      setSelectedSlotText,
    },
  } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!startTime || !endTime) {
      navigate(`/profile/${babysitterIndex}`);
    }
  }, [babysitterIndex]);

  const selectedBabysitter = BABYSITTER_INFO.find(
    (babysitter) => babysitter.id === babysitterIndex
  );

  if (!selectedBabysitter) return <></>;

  const toggleCalendarOpen = () => {
    setOpenCalendar((prev) => !prev);
  };

  const handleConfirmBooking = () => {
    navigate(`/confirmed/${babysitterIndex}`);
  };

  const handleMessageBabySitter = () =>  {
    navigate(`/message/${babysitterIndex}`)
  }
  
  const hoursCovered = calculateHoursCovered(
    startTime,
    startTimePeriod,
    endTime,
    endTimePeriod
  );
  const totalCost = Number(hoursCovered) * (selectedBabysitter?.rate ?? 0);

  return (
    <>
      <div className="reviewScreenContainer">
        <div className="reviewScreenHeader">
          <Link to={`/profile/${babysitterIndex}`} className="generalLink">
            <ChevronLeftIcon className="reviewScreenIcon" />
          </Link>
          <p>Confirm Booking</p>
          <BookmarkIcon className="bookmarkIcon" />
        </div>
        <div className="reviewScreenProfile">
          <img
            src={selectedBabysitter.profileImage}
            width={130}
            height={130}
            alt={selectedBabysitter.fullName}
          />
          <h2 className="reviewScreenBabysitterName">
            {selectedBabysitter.fullName}
          </h2>
          <p className="reviewScreenBabysitterHourlyRate">
            Hourly Rate: ${selectedBabysitter.rate}.00
          </p>
          <Rating
            readOnly
            value={selectedBabysitter.rating}
            sx={{
              marginTop: "8px",
              "& .MuiRating-icon": {
                fontSize: "31px",
              },
              "& .MuiRating-iconFilled": {
                color: "#b8e2f2",
              },
            }}
          />
        </div>
        <div className="reviewScreenActions">
          <div className="reviewScreenCallActions">
            <CallIcon className="reviewScreenIconsWithBg" />
            <ChatBubbleIcon className="reviewScreenIconsWithBg" onClick={handleMessageBabySitter} />
          </div>
          <div className="reviewScreenDistance">
            {selectedBabysitter.time} min
            {selectedBabysitter.time > 1 ? "s" : ""} away
            <LocationOnIcon className="reviewScreenIconsWithBg" />
          </div>
        </div>
        <hr className="reviewScreenDivider" />
        <div className="reviewScreenContentContainer">
          <div className="reviewScreenShiftDetails">
            <div className="reviewScreenTitle">
              <EditIcon
                onClick={toggleCalendarOpen}
                className="reviewScreenIconsWithBg"
              />
              <p>Shift Details</p>
            </div>
            <div className="reviewScreenShift">
              <div className="reviewScreenSelectedSlot">
                {selectedSlot?.format("MMMM DD, YYYY")}
              </div>
              <div>
                <span>Shift Start: </span>
                <span>
                  <b>
                    {startTime} {startTimePeriod}
                  </b>
                </span>
              </div>
              <div>
                <span>Shift End: </span>
                <span>
                  <b>
                    {endTime} {endTimePeriod}
                  </b>
                </span>
              </div>
            </div>
          </div>
          <div className="reviewScreenTotal">
            <div>Total</div>
            <div>$ {totalCost}</div>
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "#77c3ec",
            color: "#000",
            padding: "15px",
            borderRadius: "0",
          }}
          onClick={handleConfirmBooking}
        >
          Confirm Booking
        </Button>
      </div>
      <Calendar
        open={openCalendar}
        onClose={toggleCalendarOpen}
        selectedBabysitter={selectedBabysitter}
        selectedSlot={selectedSlot}
        setSelectedSlot={setSelectedSlot}
        setSelectedSlotText={setSelectedSlotText}
        startTime={startTime}
        setStartTime={setStartTime}
        startTimePeriod={startTimePeriod}
        setStartTimePeriod={setStartTimePeriod}
        endTime={endTime}
        setEndTime={setEndTime}
        endTimePeriod={endTimePeriod}
        setEndTimePeriod={setEndTimePeriod}
        isReset={false}
      />
    </>
  );
};

export default ReviewScreen;
