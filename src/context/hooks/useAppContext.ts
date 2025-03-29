import { useContext } from "react";
import { AppContextValues, AppContextUpdater } from "../appContext";

export const useAppContext = () => {
  const appContextValue = useContext(AppContextValues);
  const appContextUpdater = useContext(AppContextUpdater);

  if (!appContextUpdater || !appContextValue) {
    throw new Error("useAppContext must be used inside a provider");
  }
  return { appContextValue, appContextUpdater };
};
