import { Link, useParams } from "react-router-dom";
// import { BABYSITTER_INFO } from "../../constants/babysitter";
import "./style.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Button, Rating } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import Review from "../../components/review";
import Calendar from "../../components/calendar";
import { useAppContext } from "../../context/hooks/useAppContext";
import { useNavigate } from "react-router-dom";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils";
import { useLocation } from "react-router-dom";

export const useQueryParams = () => {
  const { search } = useLocation();
  return new URLSearchParams(search);
};

const Profile = () => {
  const query = useQueryParams();
  const source = query.get("source"); // "doctor"
  const { babysitterIndex } = useParams();
  const [openCalendar, setOpenCalendar] = useState(false);
  const [favSitter, setFavSitter] = useState(false);
  const navigate = useNavigate();
  const BABYSITTER_INFO: Record<string, any> =
    getLocalStorageItem("BABYSITTER_INFO");
  const {
    appContextValue: {
      selectedSlot,
      startTime,
      startTimePeriod,
      endTime,
      endTimePeriod,
      selectedSlotText,
      qualifications,
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

  const isQualificationMatch = (sitterQuals: string) => {
    const matchCount = qualifications
      .map((q) => q.toLowerCase())
      .filter(
        (q) =>
          sitterQuals.toLowerCase().includes(q) ||
          q.includes(sitterQuals.toLowerCase())
      ).length;

    if (matchCount > 0) {
      return true;
    }
    return false;
  };

  const selectedBabysitter = BABYSITTER_INFO.find(
    (babysitter) => babysitter.id === babysitterIndex
  );
  const getQualificationMatchCount = (): number => {
    if (!qualifications.length) return 0;

    return selectedBabysitter["qualifications"].filter((sitterQual) =>
      qualifications.some(
        (filterQual) =>
          sitterQual.toLowerCase().includes(filterQual.toLowerCase()) ||
          filterQual.toLowerCase().includes(sitterQual.toLowerCase())
      )
    ).length;
  };

  const index = BABYSITTER_INFO.findIndex((b) => b.id === babysitterIndex);
  const toggleCalendarOpen = () => {
    setOpenCalendar((prev) => !prev);
  };

  const handleBookSitter = () => {
    navigate(`/review/${babysitterIndex}`);
  };

  const handleMessageBabySitter = () => {
    navigate(`/message/${babysitterIndex}?source=profile`);
  };

  const toggleFavSitter = () => {
    setFavSitter((prev) => !prev);
    BABYSITTER_INFO[index].favorite = !favSitter;

    setLocalStorageItem("BABYSITTER_INFO", BABYSITTER_INFO);
  };

  useEffect(() => {
    if (selectedBabysitter) {
      setFavSitter(selectedBabysitter.favorite);
    }
  }, [selectedBabysitter]);

  if (!selectedBabysitter) return <></>;

  return (
    <>
      <div className="babysitterProfileContainer" key={selectedBabysitter.id}>
        <div className="babysitterProfileHeader">
          <Link
            to={`${source ? `/${source}` : "/search"}`}
            className="generalLink"
          >
            <ChevronLeftIcon className="babysitterProfileIcon" />
          </Link>
          <p>Babysitter Profile</p>
          {favSitter ? (
            <BookmarkIcon onClick={toggleFavSitter} className="bookmarkIcon" />
          ) : (
            <BookmarkBorderIcon
              onClick={toggleFavSitter}
              className="bookmarkIcon"
            />
          )}
        </div>
        <div className="babysitterProfile">
          <img
            src={selectedBabysitter.profileImage}
            width={130}
            height={130}
            alt={selectedBabysitter.fullName}
          />
          <h2 className="profileBabysitterName">
            {selectedBabysitter.fullName}
          </h2>
          <p className="babysitterHourlyRate">
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
        <div className="babysitterProfileActions">
          <div className="profileCallActions">
            <CallIcon className="profileIconsWithBg" />
            <ChatBubbleIcon
              className="profileIconsWithBg"
              onClick={handleMessageBabySitter}
            />
          </div>
          <div className="profileDistance">
            {selectedBabysitter.distance} mi. away
            <LocationOnIcon className="profileIconsWithBg" />
          </div>
        </div>
        <div className="profileChecklist">
          <div>
            <CheckIcon className="experienceCheckIcon" />
            <span>{selectedBabysitter.reviews.length} Reviews</span>
          </div>
          <div>
            <CheckIcon className="experienceCheckIcon" />
            <span>{selectedBabysitter.experience}+ years experience</span>
          </div>
        </div>
        <hr className="divider" />
        <div className="profileBio">
          <h3>Bio</h3>
          <div>{selectedBabysitter.description}</div>
        </div>
        <hr className="divider" />
        <div className="babysitterQualification">
          <div className="qualificationTitle">
            <h3>Skills</h3>
            {getQualificationMatchCount() > 0 && <div>Matched</div>}
          </div>
          <div className="qualificationTags">
            {selectedBabysitter.qualifications.map((qualification) => {
              const isMatched = isQualificationMatch(qualification);
              return (
                <div
                  key={qualification}
                  className={`qualification ${
                    isMatched ? "matchedQualification" : ""
                  }`}
                >
                  {qualification}
                </div>
              );
            })}
          </div>
        </div>
        <hr className="divider" />
        <div className="availabilityContainer">
          <Button
            onClick={toggleCalendarOpen}
            variant="contained"
            className="viewAvailabilityBtn"
            sx={{
              backgroundColor: "#77c3ec",
              color: "#000",
            }}
          >
            {startTime ? "Change Availability" : "View Availability"}
          </Button>
          <div
            className="selectedSlot"
            dangerouslySetInnerHTML={{ __html: selectedSlotText }}
          />
        </div>
        <hr className="divider" />
        <div className="reviewContainer">
          <div className="reviewTitle">
            <h3>Reviews</h3>
            <div>({selectedBabysitter.reviews.length})</div>
          </div>
          <div className="reviews">
            {selectedBabysitter.reviews.map((review) => (
              <Review review={review} />
            ))}
          </div>
        </div>
        <Button
          variant="contained"
          classes={{ disabled: "disabledBtnClasses" }}
          sx={{
            width: "100%",
            marginTop: "20px",
            backgroundColor: "#77c3ec",
            color: "#000",
            padding: "15px",
            position: "sticky",
            bottom: "0",
            opacity: "1",
            zIndex: "200",
          }}
          // className="bookBabySitterBtn"
          disabled={!startTime || !endTime}
          onClick={handleBookSitter}
        >
          Book this Babysitter
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
      />
    </>
  );
};

export default Profile;
