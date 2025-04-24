import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import dayjs, { Dayjs } from "dayjs";
import { getLocalStorageItem, setLocalStorageItem } from "../utils";
import { BABYSITTER_INFO } from "../constants/babysitter";

type AppContextValueType = {
  cost: number | null;
  distance: "asc" | "desc" | "";
  experience: "asc" | "desc" | "";
  qualifications: string[];
  selectedSlot: Dayjs | null;
  startTime: string;
  startTimePeriod: string;
  endTime: string;
  endTimePeriod: string;
  selectedSlotText: string;
};

type AppContextUpdaterType = {
  setCost: Dispatch<SetStateAction<number | null>>;
  setDistance: Dispatch<SetStateAction<"asc" | "desc" | "">>;
  setExperience: Dispatch<SetStateAction<"asc" | "desc" | "">>;
  setQualifications: Dispatch<SetStateAction<string[]>>;
  setSelectedSlot: Dispatch<SetStateAction<Dayjs>>;
  setStartTime: Dispatch<SetStateAction<string>>;
  setStartTimePeriod: Dispatch<SetStateAction<string>>;
  setEndTime: Dispatch<SetStateAction<string>>;
  setEndTimePeriod: Dispatch<SetStateAction<string>>;
  setSelectedSlotText: Dispatch<SetStateAction<string>>;
  resetFilterValues: () => void;
  resetState: () => void;
};

export const AppContextValues = createContext<AppContextValueType>({
  cost: null,
  distance: "",
  experience: "",
  qualifications: [],
  selectedSlot: null,
  startTime: "",
  startTimePeriod: "",
  endTime: "",
  endTimePeriod: "",
  selectedSlotText: "",
});
export const AppContextUpdater = createContext<AppContextUpdaterType>({
  setCost: (cost: SetStateAction<number | null>) => {},
  setDistance: (distance: SetStateAction<"asc" | "desc" | "">) => {},
  setExperience: (experience: SetStateAction<"asc" | "desc" | "">) => {},
  setQualifications: (qualifications: SetStateAction<string[]>) => {},
  setSelectedSlot: (selectedSlot: SetStateAction<Dayjs>) => {},
  setStartTime: (startTime: SetStateAction<string>) => {},
  setStartTimePeriod: (startTimePeriod: SetStateAction<string>) => {},
  setEndTime: (endTime: SetStateAction<string>) => {},
  setEndTimePeriod: (endTimePeriod: SetStateAction<string>) => {},
  setSelectedSlotText: (selectedSlotText: SetStateAction<string>) => {},
  resetFilterValues: () => {},
  resetState: () => {},
});

const AppContextProvider = ({ children }: any) => {
  const [cost, setCost] = useState<number | null>(null);
  const [distance, setDistance] = useState<"asc" | "desc" | "">("");
  const [experience, setExperience] = useState<"asc" | "desc" | "">("");
  const [qualifications, setQualifications] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState(dayjs());
  const [startTime, setStartTime] = useState("");
  const [startTimePeriod, setStartTimePeriod] = useState("AM");
  const [endTime, setEndTime] = useState("");
  const [endTimePeriod, setEndTimePeriod] = useState("AM");
  const [selectedSlotText, setSelectedSlotText] = useState(
    "Selected times will appear here."
  );
  const doesExists = getLocalStorageItem("BABYSITTER_INFO");
  console.log({ doesExists });

  if (!doesExists) {
    setLocalStorageItem("BABYSITTER_INFO", BABYSITTER_INFO);
  }

  const resetFilterValues = useCallback(() => {
    setCost(null);
    setDistance("");
    setExperience("");
    setQualifications([]);
  }, []);

  const resetState = () => {
    setSelectedSlot(dayjs());
    setStartTime("");
    setStartTimePeriod("");
    setEndTime("");
    setEndTimePeriod("");
    setSelectedSlotText("Selected times will appear here.");
    resetFilterValues();
  };

  const appContextValues = useMemo(
    () => ({
      cost,
      distance,
      experience,
      qualifications,
      selectedSlot,
      startTime,
      startTimePeriod,
      endTime,
      endTimePeriod,
      selectedSlotText,
    }),
    [
      cost,
      distance,
      experience,
      qualifications,
      selectedSlot,
      startTime,
      startTimePeriod,
      endTime,
      endTimePeriod,
      selectedSlotText,
    ]
  );

  const appContextUpdater = useMemo(
    () => ({
      setCost,
      setDistance,
      setExperience,
      setQualifications,
      setSelectedSlot,
      setStartTime,
      setStartTimePeriod,
      setEndTime,
      setEndTimePeriod,
      setSelectedSlotText,
      resetFilterValues,
      resetState,
    }),
    [
      setCost,
      setDistance,
      setExperience,
      setQualifications,
      setSelectedSlot,
      setStartTime,
      setStartTimePeriod,
      setEndTime,
      setEndTimePeriod,
      setSelectedSlotText,
      resetFilterValues,
      resetState,
    ]
  );

  return (
    <AppContextUpdater.Provider value={appContextUpdater}>
      <AppContextValues.Provider value={appContextValues}>
        {children}
      </AppContextValues.Provider>
    </AppContextUpdater.Provider>
  );
};

export default AppContextProvider;
