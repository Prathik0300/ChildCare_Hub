import { useParams } from "react-router-dom";
import { BABYSITTER_INFO } from "../../constants/babysitter";
import "./style.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Avatar, Button, Rating } from "@mui/material";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import Review from "../../components/review";

const Profile = () => {
  const { babysitterIndex } = useParams();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedSlotText, setSelectedSlot] = useState(
    "Selected times will appear here."
  );
  const selectedBabysitter = BABYSITTER_INFO.find(
    (babysitter) => babysitter.id === babysitterIndex
  );

  if (!selectedBabysitter) return <></>;

  return (
    <div className="babysitterProfileContainer">
      <div className="babysitterProfileHeader">
        <ChevronLeftIcon className="babysitterProfileIcon" />
        <p>Babysitter Profile</p>
        <BookmarkIcon className="bookmarkIcon" />
      </div>
      <div className="babysitterProfile">
        <img
          src={selectedBabysitter.profileImage}
          width={130}
          height={130}
          alt={selectedBabysitter.fullName}
        />
        <h2 className="profileBabysitterName">{selectedBabysitter.fullName}</h2>
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
          <ChatBubbleIcon className="profileIconsWithBg" />
        </div>
        <div className="profileDistance">
          {selectedBabysitter.time} min
          {selectedBabysitter.time > 1 ? "s" : ""} away
          <LocationOnIcon className="profileIconsWithBg" />
        </div>
      </div>
      <div className="profileChecklist">
        <div>
          <CheckIcon className="experienceCheckIcon" />
          <span>{selectedBabysitter.experience}+ years experience</span>
        </div>
        <div>
          <CheckIcon className="experienceCheckIcon" />
          <span>{selectedBabysitter.reviews.length} Reviews</span>
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
          <h3>Qualifications</h3>
          <div>Matched</div>
        </div>
        <div className="qualificationTags">
          {selectedBabysitter.qualifications.map((qualification) => (
            <div key={qualification} className="qualification">
              {qualification}
            </div>
          ))}
        </div>
      </div>
      <hr className="divider" />
      <div className="availabilityContainer">
        <Button
          variant="contained"
          className="viewAvailabilityBtn"
          sx={{
            backgroundColor: "#77c3ec",
            color: "#000",
          }}
        >
          View Availability
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
    </div>
  );
};

export default Profile;
