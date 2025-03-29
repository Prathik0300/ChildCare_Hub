import { Slider } from "@mui/material";
import "./style.css";

const SliderFilter = ({
  minValue,
  maxValue,
  minValueLabel,
  maxValueLabel,
  filterValue,
  setFilter,
}: any) => {
  if (typeof setFilter !== "function" || typeof filterValue !== "number") {
    return <></>;
  }
  const handleFilterChange = (e: any, newValue: number) => {
    setFilter(newValue);
  };
  return (
    <div className="drawerFilterContainer">
      <div className="filterLabel">
        <div>{minValueLabel}</div>
        <div>{maxValueLabel}</div>
      </div>
      <div className="filterSlider">
        <Slider
          value={filterValue}
          defaultValue={filterValue}
          onChange={handleFilterChange}
          valueLabelDisplay="auto"
          max={maxValue}
          min={minValue}
          sx={{
            color: "#77c3ec", // Color for the thumb
            "& .MuiSlider-track": {
              backgroundColor: "#77c3ec", // Track color
            },
            "& .MuiSlider-thumb": {
              backgroundColor: "#77c3ec", // Thumb color
            },
            "& .MuiSlider-rail": {
              backgroundColor: "#3b3b3b", // Rail color (unfilled part of the track)
            },
          }}
        />
      </div>
    </div>
  );
};

export default SliderFilter;
