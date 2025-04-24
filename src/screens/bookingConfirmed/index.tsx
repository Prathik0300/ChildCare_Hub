import { useNavigate, useParams } from "react-router-dom";
// import { BABYSITTER_INFO } from "../../constants/babysitter";
import "./style.css";
import CheckIcon from "@mui/icons-material/Check";
import { useAppContext } from "../../context/hooks/useAppContext";
import { Button } from "@mui/material";
import { getLocalStorageItem } from "../../utils";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const BookingConfirmed = () => {
  const { babysitterIndex } = useParams();
  const BABYSITTER_INFO = getLocalStorageItem("BABYSITTER_INFO");
  const {
    appContextValue: {
      selectedSlot,
      startTime,
      startTimePeriod,
      endTime,
      endTimePeriod,
    },
    appContextUpdater: { resetState },
  } = useAppContext();

  const selectedBabysitter = (BABYSITTER_INFO as Record<string, any>).find(
    (babysitter) => babysitter.id === babysitterIndex
  );

  const navigate = useNavigate();
  if (!selectedBabysitter) return <></>;

  const handleCancelClick = () => {
    resetState();
    navigate("/current-bookings");
  };

  const handleContinueClick = () => {
    resetState();
    navigate("/search");
  };

  const handleMessageBabySitter = () => {
    navigate(`/message/${babysitterIndex}?source=review`);
  };

  return (
    <div className="bookingConfirmedContainer">
      <div className="confirmationProfilePic">
        <img
          src={selectedBabysitter.profileImage}
          width={120}
          height={120}
          alt={selectedBabysitter.fullName}
        />
        <div>
          <CheckIcon className="checkIcon" />
        </div>
        <div className="confirmedTitle">Sitter Booked</div>
      </div>
      <div className="reviewScreenActions">
        <div className="reviewScreenCallActions">
          <CallIcon className="reviewScreenIconsWithBg" />
          <ChatBubbleIcon
            className="reviewScreenIconsWithBg"
            onClick={handleMessageBabySitter}
          />
        </div>
        <div className="reviewScreenDistance">
          {selectedBabysitter.distance} mi. away
          <LocationOnIcon className="reviewScreenIconsWithBg" />
        </div>
      </div>
      <hr className="confirmedPageDivider" />
      <div className="confirmedScreenContentContainer">
        <div className="confirmedScreenShiftDetails">
          <div className="confirmedScreenTitle">
            <p>Shift Details</p>
          </div>
          <div className="confirmedScreenShift">
            <div className="confirmedScreenSelectedSlot">
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
        <div className="confirmedScreenText">
          You have 15 minutes to cancel the booking.
        </div>
      </div>
      <div className="confirmedScreenActionContainer">
        <Button
          variant="contained"
          sx={{
            width: "50%",
            backgroundColor: "#d9d9d9",
            color: "#000",
            padding: "15px",
            borderRadius: "0",
            textTransform: "capitalize",
            fontSize: "15px",
          }}
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleContinueClick}
          sx={{
            width: "50%",
            backgroundColor: "#77c3ec",
            color: "#000",
            padding: "15px",
            borderRadius: "0",
            textTransform: "capitalize",
            fontSize: "15px",
          }}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default BookingConfirmed;
