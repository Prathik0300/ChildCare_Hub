import "./style.css";
import { Avatar, Rating } from "@mui/material";
import { useState } from "react";

const Review = ({ review }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const expandedText = (
    <span className="toggleButton" onClick={handleToggle}>
      Read Less
    </span>
  );
  return (
    <div key={`review-${review.name}`} className="reviewCard">
      <Avatar sx={{ bgcolor: "#77c3ec" }}>{review.initial}</Avatar>
      <div className="reviewContent">
        <div className="reviewTitle">
          <div>{review.name}</div>
          <Rating
            readOnly
            value={review.rating}
            sx={{
              "& .MuiRating-icon": {
                fontSize: "15px",
              },
              "& .MuiRating-iconFilled": {
                color: "#b8e2f2",
              },
            }}
          />
        </div>
        <div className="reviewDescriptionContainer">
          <p
            className={`reviewDescription ${
              isExpanded ? "expanded" : "collapsed"
            }`}
          >
            <span>{`${review.review.substring(0, 50)}`}</span>
            {isExpanded ? (
              <>
                {review.review.substring(50)} {expandedText}
              </>
            ) : (
              <span className="toggleButton" onClick={handleToggle}>
                ...Read More
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Review;
