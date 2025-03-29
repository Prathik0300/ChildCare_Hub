import { useState } from "react";
import "./style.css";
import logo from "../../assets/logo.webp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import FilterDrawer from "../../components/drawer";
import { FILTERS } from "../../constants";
import { useSearchFilter } from "./hook/useSearchFilter";
import { Button, Rating } from "@mui/material";
import { BABYSITTER_INFO } from "../../constants/babysitter";
import CheckIcon from "@mui/icons-material/Check";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const {
    activeFilterIdx,
    openFilterDrawer,
    toggleFilterDrawer,
    handleFilterChange,
    renderFilterSpecificComponent,
  } = useSearchFilter();
  const navigate = useNavigate();

  const handleCardClick = (idx: string) => {
    navigate(`/profile/${idx}`);
  };
  return (
    <>
      <div className="searchContainer">
        <div className="stickyContainer">
          <div className="header">
            <Link to="/">
              <img src={logo} alt="header logo" />
            </Link>
            <p>ChildCare Hub</p>
          </div>
          <div className="searchBarContainer">
            <LocationOnIcon className="locationIcon" />
            <div className="searchBarInput">
              <input
                type="text"
                placeholder="Search..."
                className="searchInput"
              />
              <span className="searchIcon">
                <SearchIcon />
              </span>
            </div>
            <TuneIcon onClick={toggleFilterDrawer} className="tuneIcon" />
          </div>
        </div>
        <div className="profileCardContainer">
          {BABYSITTER_INFO.map((babysitter, idx) => {
            return (
              <div
                key={babysitter.fullName}
                className="profileCard"
                onClick={(e) => handleCardClick(babysitter.id)}
              >
                <div className="profileCardImage">
                  <img
                    src={babysitter.profileImage}
                    alt={babysitter.fullName}
                    height={110}
                    width={110}
                  />
                </div>
                <div className="profileCardContent">
                  <p className="babysitterName">{babysitter.fullName}</p>
                  <Rating
                    value={babysitter.rating}
                    readOnly
                    className="babysitterRating"
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "#b8e2f2",
                      },
                    }}
                  />
                  <p className="babysitterExperience">
                    <CheckIcon className="experienceCheckIcon" />
                    {babysitter.experience}+ years experience
                  </p>
                  <p className="babysitterRate">${babysitter.rate}.00/Hour</p>
                  <p className="babysitterTime">
                    {babysitter.time} minute{babysitter.time > 1 ? "s" : ""}{" "}
                    away
                  </p>
                </div>
                <div
                  className={
                    babysitter.available
                      ? "babysitterAvailable"
                      : "babysitterNotAvailable"
                  }
                ></div>
              </div>
            );
          })}
        </div>
      </div>
      <FilterDrawer open={openFilterDrawer} onCloseHandler={toggleFilterDrawer}>
        <div className="filterContainer">
          <div className="filterDrawerCategory">
            {FILTERS.map((filter, idx) => (
              <div
                key={`filter-${filter}`}
                onClick={(e) => handleFilterChange(idx)}
              >
                {filter}
                <div
                  className={`${idx === activeFilterIdx ? "activeFilter" : ""}`}
                ></div>
              </div>
            ))}
          </div>
          {renderFilterSpecificComponent(activeFilterIdx)}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4ea4d2",
              color: "#000",
            }}
            onClick={toggleFilterDrawer}
          >
            Apply All Filters
          </Button>
        </div>
      </FilterDrawer>
    </>
  );
};

export default Search;
