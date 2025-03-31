import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import dayjs, { Dayjs } from "dayjs";

type AppContextValueType = {
  cost: number;
  distance: number;
  experience: number;
  qualifications: string[];
  selectedSlot: Dayjs | null;
  startTime: string;
  startTimePeriod: string;
  endTime: string;
  endTimePeriod: string;
  selectedSlotText: string;
};

type AppContextUpdaterType = {
  setCost: Dispatch<SetStateAction<number>>;
  setDistance: Dispatch<SetStateAction<number>>;
  setExperience: Dispatch<SetStateAction<number>>;
  setQualifications: Dispatch<SetStateAction<string[]>>;
  setSelectedSlot: Dispatch<SetStateAction<Dayjs>>;
  setStartTime: Dispatch<SetStateAction<string>>;
  setStartTimePeriod: Dispatch<SetStateAction<string>>;
  setEndTime: Dispatch<SetStateAction<string>>;
  setEndTimePeriod: Dispatch<SetStateAction<string>>;
  setSelectedSlotText: Dispatch<SetStateAction<string>>;
};

export const AppContextValues = createContext<AppContextValueType>({
  cost: 20,
  distance: 20,
  experience: 5,
  qualifications: [],
  selectedSlot: null,
  startTime: "",
  startTimePeriod: "",
  endTime: "",
  endTimePeriod: "",
  selectedSlotText: "",
});
export const AppContextUpdater = createContext<AppContextUpdaterType>({
  setCost: (cost: SetStateAction<number>) => {},
  setDistance: (distance: SetStateAction<number>) => {},
  setExperience: (experience: SetStateAction<number>) => {},
  setQualifications: (qualifications: SetStateAction<string[]>) => {},
  setSelectedSlot: (selectedSlot: SetStateAction<Dayjs>) => {},
  setStartTime: (startTime: SetStateAction<string>) => {},
  setStartTimePeriod: (startTimePeriod: SetStateAction<string>) => {},
  setEndTime: (endTime: SetStateAction<string>) => {},
  setEndTimePeriod: (endTimePeriod: SetStateAction<string>) => {},
  setSelectedSlotText: (selectedSlotText: SetStateAction<string>) => {},
});

const AppContextProvider = ({ children }: any) => {
  const [cost, setCost] = useState(20);
  const [distance, setDistance] = useState(20);
  const [experience, setExperience] = useState(5);
  const [qualifications, setQualifications] = useState<string[]>([]);
  const [selectedSlot, setSelectedSlot] = useState(dayjs());
  const [startTime, setStartTime] = useState("");
  const [startTimePeriod, setStartTimePeriod] = useState("AM");
  const [endTime, setEndTime] = useState("");
  const [endTimePeriod, setEndTimePeriod] = useState("AM");
  const [selectedSlotText, setSelectedSlotText] = useState(
    "Selected times will appear here."
  );
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
