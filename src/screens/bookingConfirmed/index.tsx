import { useParams } from "react-router-dom";
import { BABYSITTER_INFO } from "../../constants/babysitter";
import "./style.css";
import CheckIcon from "@mui/icons-material/Check";
import { useAppContext } from "../../context/hooks/useAppContext";
import { Button } from "@mui/material";

const BookingConfirmed = () => {
  const { babysitterIndex } = useParams();
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
  const selectedBabysitter = BABYSITTER_INFO.find(
    (babysitter) => babysitter.id === babysitterIndex
  );

  if (!selectedBabysitter) return <></>;

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
        >
          Cancel
        </Button>
        <Button
          variant="contained"
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
