import { useState } from "react";
import SliderFilter from "../../../components/filter/slider";
import SearchTag from "../../../components/filter/searchTag";
import { useAppContext } from "../../../context/hooks/useAppContext";
import SortButton from "../../../components/filter/sort";

export const useSearchFilter = () => {
  const {
    appContextValue: { cost, distance, experience, qualifications },
    appContextUpdater: {
      setCost,
      setDistance,
      setExperience,
      setQualifications,
    },
  } = useAppContext();
  const [activeFilterIdx, setActiveFilterIdx] = useState(0);
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);

  const toggleFilterDrawer = () => {
    setOpenFilterDrawer((prev) => !prev);
  };

  const handleFilterChange = (idx: any) => {
    setActiveFilterIdx(idx);
  };

  const renderFilterSpecificComponent = (idx: any) => {
    if (idx === 0) {
      return (
        <SliderFilter
          minValue={0}
          maxValue={50}
          minValueLabel={"$0"}
          maxValueLabel={"$50"}
          filterValue={cost ? cost : 20}
          setFilter={setCost}
        />
      );
    }
    if (idx === 1) {
      return (
        <SortButton filter={distance} setFilter={setDistance} />
        // <SliderFilter
        //   minValue={0}
        //   maxValue={45}
        //   minValueLabel={"0 mi"}
        //   maxValueLabel={"45 mi"}
        //   filterValue={distance}
        //   setFilter={setDistance}
        // />
      );
    }
    if (idx === 2) {
      return (
        <SortButton filter={experience} setFilter={setExperience} />
        // <SliderFilter
        //   minValue={0}
        //   maxValue={10}
        //   minValueLabel={"0 years"}
        //   maxValueLabel={"10 years"}
        //   filterValue={experience}
        //   setFilter={setExperience}
        // />
      );
    }
    if (idx === 3)
      return (
        <SearchTag
          qualifications={qualifications}
          setQualifications={setQualifications}
        />
      );
  };

  return {
    activeFilterIdx,
    qualifications,
    experience,
    distance,
    cost,
    openFilterDrawer,
    setActiveFilterIdx,
    setQualifications,
    setExperience,
    setDistance,
    setCost,
    toggleFilterDrawer,
    setOpenFilterDrawer,
    handleFilterChange,
    renderFilterSpecificComponent,
  };
};
