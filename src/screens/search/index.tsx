import { useEffect, useState } from "react";
import "./style.css";
import logo from "../../assets/logo.webp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import FilterDrawer from "../../components/drawer";
import { FILTERS } from "../../constants";
import { useSearchFilter } from "./hook/useSearchFilter";
import { Button, Rating, Pagination, Drawer, IconButton } from "@mui/material";
// import { BABYSITTER_INFO } from "../../constants/babysitter";
import CheckIcon from "@mui/icons-material/Check";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { getLocalStorageItem } from "../../utils";

const Search = () => {
  const {
    activeFilterIdx,
    openFilterDrawer,
    qualifications,
    experience,
    distance,
    cost,
    toggleFilterDrawer,
    handleFilterChange,
    renderFilterSpecificComponent,
  } = useSearchFilter();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const BABYSITTER_INFO: Record<string, any> =
    getLocalStorageItem("BABYSITTER_INFO");
  console.log({ BABYSITTER_INFO });
  const [filteredProfiles, setFilteredProfiles] = useState(BABYSITTER_INFO);
  const profilesPerPage = 10;

  useEffect(() => {
    applyFilter();
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const applyFilter = (triggeredFromFilter = false) => {
    let tempSitters = BABYSITTER_INFO;
    if (cost) {
      tempSitters = tempSitters
        .filter((b) => b.rate <= cost)
        .sort((a, b) => a.rate - b.rate);
    }
    if (experience) {
      tempSitters.sort((a, b) => {
        if (experience === "asc") {
          return a.experience - b.experience;
        }
        if (experience === "desc") {
          return b.experience - a.experience;
        }
        return 0;
      });
    }

    if (distance) {
      tempSitters.sort((a, b) => {
        if (distance === "asc") {
          return a.distance - b.distance;
        }
        if (distance === "desc") {
          return b.distance - a.distance;
        }
        return 0;
      });
    }

    if (qualifications.length > 0) {
      tempSitters = tempSitters.map((b) => {
        const sitterQuals = Array.isArray(b.qualifications)
          ? b.qualifications.map((q) => q.toLowerCase())
          : [];

        const matchCount = qualifications
          .map((q) => q.toLowerCase())
          .filter((q) => sitterQuals.some((qual) => qual.includes(q))).length;

        return { ...b, matchCount };
      });

      tempSitters = tempSitters.filter((b) => {
        if (b?.matchCount) {
          return b?.matchCount > 0;
        }
      });
      tempSitters = tempSitters.sort((a, b) => b?.matchCount - a?.matchCount);
    }
    setFilteredProfiles(tempSitters);

    console.log({ tempSitters, l: tempSitters.length });

    if (triggeredFromFilter === true) {
      toggleFilterDrawer();
    }
  };

  const applySearch = (term: string) => {
    setSearchTerm(term);
    const results = BABYSITTER_INFO.filter((b) =>
      b.fullName.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProfiles(results);
    setSuggestions([]);
    setCurrentPage(1);
  };

  const toggleNavMenu = () => {
    setNavMenuOpen((prev) => !prev);
  };

  const handleCardClick = (id: string) => {
    navigate(`/profile/${id}`);
  };

  const paginatedProfiles = filteredProfiles.slice(
    (currentPage - 1) * profilesPerPage,
    currentPage * profilesPerPage
  );

  const totalFilteredProfiles = filteredProfiles.length;

  const handleCurrentBookingsClick = () => {
    navigate(`/current-bookings`);
  };

  return (
    <>
      {/* Side Drawer */}
      <Drawer
        open={navMenuOpen}
        onClose={toggleNavMenu}
        anchor="right"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#fff",
            color: "#000",
            paddingTop: "5px",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            width: "calc(80% - 100px)",
          },
        }}
      >
        <div className="drawerCloseContainer">
          <IconButton onClick={toggleNavMenu} className="closeIcon">
            <CloseIcon />
          </IconButton>
        </div>
        <div className="navMenuContainer">
          <div>Profile</div>
          <div onClick={handleCurrentBookingsClick}>Current Bookings</div>
          <div>Saved Profiles</div>
          <div>Settings</div>
          <div>Help</div>
        </div>
      </Drawer>

      {/* Main UI */}
      <div className="searchContainer">
        <div className="stickyContainer">
          <div className="header">
            <div>
              <Link to="/">
                <img src={logo} alt="header logo" />
              </Link>
              <p>ChildCare Hub</p>
            </div>
            <MenuIcon onClick={toggleNavMenu} className="menuIcon" />
          </div>

          <div className="searchBarContainer">
            <LocationOnIcon className="searchLocationIcon" />
            <div className="searchBarInput" style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search..."
                className="searchInput"
                value={searchTerm}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchTerm(val);
                  if (val.trim() !== "") {
                    const match = BABYSITTER_INFO.filter((b) =>
                      b.fullName.toLowerCase().includes(val.toLowerCase())
                    ).map((b) => b.fullName);
                    setSuggestions(match.slice(0, 5));
                  } else {
                    setSuggestions([]);
                    setFilteredProfiles(BABYSITTER_INFO);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    applySearch(searchTerm);
                  }
                }}
              />
              <span className="searchIcon">
                <SearchIcon />
              </span>

              {suggestions.length > 0 && (
                <div className="suggestionDropdown">
                  {/* <div className="suggestionHeader">Suggestions</div> */}
                  {suggestions.map((sug, idx) => (
                    <div
                      key={idx}
                      className="suggestionItem"
                      onClick={() => applySearch(sug)}
                    >
                      {sug}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <TuneIcon onClick={toggleFilterDrawer} className="tuneIcon" />
          </div>
        </div>
        <p className="profileShown">
          {paginatedProfiles.length} of {totalFilteredProfiles} results
        </p>
        {/* Babysitter Cards */}
        <div className="profileCardContainer">
          {paginatedProfiles.map((babysitter) => (
            <div
              key={babysitter.fullName}
              className="profileCard"
              onClick={() => handleCardClick(babysitter.id)}
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
                <span className="ratingContainer">
                  <Rating
                    value={babysitter.rating}
                    readOnly
                    className="babysitterRating"
                    sx={{
                      fontSize: "20px",
                      "& .MuiRating-iconFilled": {
                        color: "#b8e2f2",
                      },
                    }}
                  />
                  <span className="noOfReviews">
                    ({babysitter.reviews.length})
                  </span>
                </span>
                <p className="babysitterExperience">
                  <CheckIcon className="experienceCheckIcon" />
                  {babysitter.experience}+ years experience
                </p>
                <p className="babysitterRate">${babysitter.rate}.00/Hour</p>
                <p className="babysitterTime">{babysitter.distance} mi. away</p>
              </div>
            </div>
          ))}
        </div>

        <div className="paginationContainer">
          <Pagination
            count={Math.ceil(filteredProfiles.length / profilesPerPage)}
            page={currentPage}
            onChange={handlePageChange}
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

      {/* Filter Drawer */}
      <FilterDrawer open={openFilterDrawer} onCloseHandler={toggleFilterDrawer}>
        <div className="filterContainer">
          {/*  */}
          <div className="filterDrawerCategory">
            {FILTERS.map((filter, idx) => (
              <div
                key={`filter-${filter}`}
                onClick={() => handleFilterChange(idx)}
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
              width: "100%",
            }}
            onClick={(e) => applyFilter(true)}
          >
            Apply All Filters
          </Button>
        </div>
      </FilterDrawer>
    </>
  );
};

export default Search;
