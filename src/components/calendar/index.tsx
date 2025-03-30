import {
  Button,
  Dialog,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import "./style.css";
import CloseIcon from "@mui/icons-material/Close";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

const PeriodToggle = ({ timePeriod, setTimePeriod }: any) => {
  return (
    <ToggleButtonGroup
      value={timePeriod}
      exclusive
      onChange={(e, newPeriod) => newPeriod && setTimePeriod(newPeriod)}
    >
      <ToggleButton
        value="AM"
        sx={{
          width: "50px",
          fontSize: "14px",
          padding: "0px",
          backgroundColor: timePeriod === "AM" ? "#77c3ec" : "#f0f0f0",
          color: timePeriod === "AM" ? "#77c3ec" : "black",
          "&:hover": {
            backgroundColor: timePeriod === "AM" ? "#77c3ec" : "#e0e0e0",
          },
        }}
      >
        AM
      </ToggleButton>
      <ToggleButton
        value="PM"
        sx={{
          width: "50px",
          fontSize: "14px",
          padding: "0px",
          backgroundColor: timePeriod === "PM" ? "#77c3ec" : "#f0f0f0",
          color: timePeriod === "PM" ? "#77c3ec" : "black",
          "&:hover": {
            backgroundColor: timePeriod === "PM" ? "#77c3ec" : "#e0e0e0",
          },
        }}
      >
        PM
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

const Calendar = ({
  open,
  onClose,
  selectedBabysitter,
  selectedSlot,
  setSelectedSlot,
  setSelectedSlotText,
  startTime,
  setStartTime,
  startTimePeriod,
  setStartTimePeriod,
  endTime,
  setEndTime,
  endTimePeriod,
  setEndTimePeriod,
}: any) => {
  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedSlot(newDate);
    console.log("Selected Date:", newDate?.format("YYYY-MM-DD"));
  };

  const handleModalClose = () => {
    setStartTime("");
    setEndTime("");
    onClose();
  };

  const handleConfirmTime = () => {
    setSelectedSlotText(
      `<span>You are booking this babysitter for:</span><br/><span>${selectedSlot.format(
        "MMMM DD, YYYY"
      )} from ${startTime} ${startTimePeriod} to ${endTime} ${endTimePeriod}</span>`
    );
    onClose();
  };
  console.log({ selectedSlot });
  return (
    <Dialog
      open={open}
      onClose={handleModalClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#f9f9f9",
          position: "relative",
          minWidth: "400px",
        },
      }}
      className="calendarDialogContainer"
    >
      <div className="calendarDialogHeader">
        <div className="dialogTitle">Select Date & Time</div>
        <CloseIcon onClick={handleModalClose} />
      </div>
      <div className="availabilityCalendar">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            sx={{
              "& .MuiPickersArrowSwitcher-button": {
                color: "#77c3ec",
              },

              "& .MuiPickersCalendarHeader-switchViewButton": {
                color: "#77c3ec",
              },

              "& .MuiPickersDay-root": {
                fontWeight: "bold",
                color: "black",
              },

              "& .MuiYearCalendar-root": {
                padding: "10px",
                display: "grid",
                width: "100%",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "5px",
              },

              "& .Mui-selected": {
                backgroundColor: "#77c3ec",
                color: "black",
                fontWeight: "bold",
              },
            }}
            value={selectedSlot}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
        <hr className="divider" />
        <p className="availabilityText">
          Sitter availability for {selectedSlot?.format("MMMM D, YYYY")}.{" "}
          <i>Select a time slot.</i>
        </p>
        <div className="timeAvailabilitySlot">
          {selectedBabysitter?.availabilitySlots?.[
            selectedSlot.format("YYYY-DD-MM")
          ]?.timeSlots?.map((timeSlot: any) => (
            <div className="timeSlotContainer">
              {timeSlot.startTime} - {timeSlot.endTime}
            </div>
          ))}
        </div>
      </div>
      <div className="selectTimeContainer">
        <div className="startTimeContainer">
          <div>Start Time</div>
          <TextField
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            sx={{
              "& input[type=time]::-webkit-calendar-picker-indicator": {
                display: "none",
              },
              textAlign: "center",
              "& input": { textAlign: "center", padding: "2px" },
            }}
          />
          {/* <PeriodToggle
            timePeriod={startTimePeriod}
            setTimePeriod={setStartTimePeriod}
          /> */}
        </div>
        <div className="endTimeContainer">
          <div>End Time</div>
          <TextField
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            sx={{
              "& input[type=time]::-webkit-calendar-picker-indicator": {
                display: "none",
              },
              textAlign: "center",
              "& input": { textAlign: "center", padding: "2px" },
            }}
          />
          {/* <PeriodToggle
            timePeriod={endTimePeriod}
            setTimePeriod={setEndTimePeriod}
          /> */}
        </div>
      </div>
      <Button
        variant="contained"
        sx={{
          width: "100%",
          marginTop: "20px",
          backgroundColor: "#77c3ec",
          color: "#000",
          padding: "15px",
        }}
        onClick={handleConfirmTime}
      >
        Confirm Time
      </Button>
    </Dialog>
  );
};

export default Calendar;
