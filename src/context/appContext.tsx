import {
  createContext,
  Dispatch,
  SetStateAction,
  useMemo,
  useState,
} from "react";

type AppContextValueType = {
  cost: number;
  distance: number;
  experience: number;
  qualifications: string[];
};

type AppContextUpdaterType = {
  setCost: Dispatch<SetStateAction<number>>;
  setDistance: Dispatch<SetStateAction<number>>;
  setExperience: Dispatch<SetStateAction<number>>;
  setQualifications: Dispatch<SetStateAction<string[]>>;
};

export const AppContextValues = createContext<AppContextValueType>({
  cost: 20,
  distance: 20,
  experience: 5,
  qualifications: [],
});
export const AppContextUpdater = createContext<AppContextUpdaterType>({
  setCost: (cost: SetStateAction<number>) => {},
  setDistance: (distance: SetStateAction<number>) => {},
  setExperience: (experience: SetStateAction<number>) => {},
  setQualifications: (qualifications: SetStateAction<string[]>) => {},
});

const AppContextProvider = ({ children }: any) => {
  const [cost, setCost] = useState(20);
  const [distance, setDistance] = useState(20);
  const [experience, setExperience] = useState(5);
  const [qualifications, setQualifications] = useState<string[]>([]);

  const appContextValues = useMemo(
    () => ({
      cost,
      distance,
      experience,
      qualifications,
    }),
    [cost, distance, experience, qualifications]
  );

  const appContextUpdater = useMemo(
    () => ({
      setCost,
      setDistance,
      setExperience,
      setQualifications,
    }),
    [setCost, setDistance, setExperience, setQualifications]
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
