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
import { useEffect, useState } from "react";

const PeriodToggle = ({
  timePeriod,
  setTimePeriod,
}: {
  timePeriod: string;
  setTimePeriod: (value: string) => void;
}) => {
  return (
    <ToggleButtonGroup
      value={timePeriod}
      exclusive
      onChange={(e, newPeriod) => {
        if (newPeriod) setTimePeriod(newPeriod);
      }}
    >
      {["AM", "PM"].map((period) => (
        <ToggleButton
          key={period}
          value={period}
          sx={{
            width: "50px",
            height: "35px",
            fontSize: "13px",
            fontWeight: "bold",
            color: timePeriod === period ? "#fff" : "#333",
            backgroundColor: timePeriod === period ? "#77c3ec" : "#e0e0e0",
            border: "1px solid #b0b0b0",
            "&:hover": {
              backgroundColor: timePeriod === period ? "#5bb4d8" : "#d5d5d5",
            },
            "&.Mui-selected": {
              backgroundColor: "#77c3ec !important",
              color: "#fff",
            },
          }}
        >
          {period}
        </ToggleButton>
      ))}
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
  isReset = true,
}: any) => {
  const [timeError, setTimeError] = useState("");

  useEffect(() => {
    validateTime();
  }, [startTime, startTimePeriod, endTime, endTimePeriod]);

  const handleManualTimeChange = (
    e: any,
    setTime: (v: string) => void,
    setPeriod: (v: string) => void
  ) => {
    let inputValue = e.target.value.replace(/[^\d:]/g, ""); // Allow only digits & colon

    // Enforce max 5 characters total
    if (inputValue.length > 5) return;

    // Allow incomplete input (e.g., "1:", "12")
    setTime(inputValue);

    const isValid = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(inputValue);
    if (!isValid) return;

    const { formatted, period } = normalizeTo12Hour(inputValue);
    setTime(formatted);
    setPeriod(period);
  };

  const normalizeTo12Hour = (time: string) => {
    const [rawH, m] = time.split(":").map(Number);
    if (isNaN(rawH) || isNaN(m)) return { formatted: "", period: "AM" };

    const period = rawH >= 12 ? "PM" : "AM";
    let h = rawH % 12;
    if (h === 0) h = 12;

    const formatted = `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}`;

    return { formatted, period };
  };

  const validateTime = () => {
    const isValidTimeFormat = (time: string) =>
      /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time);

    if (!isValidTimeFormat(startTime) || !isValidTimeFormat(endTime)) {
      setTimeError("Please enter valid time in HH:MM format");
      return;
    }

    const getTimeInMinutes = (time: string, period: string) => {
      let [hours, minutes] = time.split(":").map(Number);
      if (period === "PM" && hours !== 12) hours += 12;
      if (period === "AM" && hours === 12) hours = 0;
      return hours * 60 + minutes;
    };

    const start = getTimeInMinutes(startTime, startTimePeriod);
    const end = getTimeInMinutes(endTime, endTimePeriod);

    if (end <= start) {
      setTimeError("End time must be after start time");
      return;
    }

    setTimeError(""); // all good
  };

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedSlot(newDate);
  };

  const handleModalClose = () => {
    if (isReset) {
      setStartTime("");
      setEndTime("");
      setSelectedSlotText("Selected times will appear here.");
    }
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

  const confirmTimeSelection = (timeSlot: any) => {
    const start = timeSlot.startTime.trim().split(" ");
    const end = timeSlot.endTime.trim().split(" ");
    setStartTime(start[0]);
    setEndTime(end[0]);
    setStartTimePeriod(start[1]);
    setEndTimePeriod(end[1]);
  };

  return (
    <Dialog
      open={open}
      onClose={handleModalClose}
      sx={{
        "& .MuiDialog-paper": {
          backgroundColor: "#f9f9f9",
          position: "relative",
          minWidth: "350px",
          maxWidth: "350px",
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
            <div
              key={timeSlot.startTime + timeSlot.endTime}
              className="timeSlotContainer"
              onClick={() => confirmTimeSelection(timeSlot)}
            >
              {timeSlot.startTime} - {timeSlot.endTime}
            </div>
          ))}
        </div>
      </div>

      <div className="selectTimeContainer">
        <div className="startTimeContainer">
          <div>Start Time</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextField
              placeholder="HH:MM"
              value={startTime}
              onChange={(e) =>
                handleManualTimeChange(e, setStartTime, setStartTimePeriod)
              }
              inputProps={{
                maxLength: 5,
              }}
              // onChange={(e) => setStartTime(e.target.value)}
              sx={{
                width: 100,
                "& input": {
                  textAlign: "center",
                  padding: "6px",
                },
              }}
            />
            <PeriodToggle
              timePeriod={startTimePeriod}
              setTimePeriod={setStartTimePeriod}
            />
          </div>
        </div>

        <div className="endTimeContainer">
          <div>End Time</div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <TextField
              placeholder="HH:MM"
              value={endTime}
              onChange={(e) =>
                handleManualTimeChange(e, setEndTime, setEndTimePeriod)
              }
              inputProps={{
                maxLength: 5,
              }}
              // onChange={(e) => setStartTime(e.target.value)}
              sx={{
                width: 100,
                "& input": {
                  textAlign: "center",
                  padding: "6px",
                },
              }}
            />
            <PeriodToggle
              timePeriod={endTimePeriod}
              setTimePeriod={setEndTimePeriod}
            />
          </div>
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
        disabled={!!timeError}
        onClick={handleConfirmTime}
      >
        Confirm Time
      </Button>
    </Dialog>
  );
};

export default Calendar;
