import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
import { useAppContext } from "../../context/hooks/useAppContext";
import useIsMobile from "../../hooks/useIsMobile";

const FilterDrawer = ({ open, onCloseHandler, children }: any) => {
  const {
    appContextUpdater: { resetFilterValues },
  } = useAppContext();
  const isMobile = useIsMobile();

  const resetFilter = () => {
    resetFilterValues();
    onCloseHandler();
  };
  return (
    <Drawer
      anchor="bottom"
      open={open}
      transitionDuration={300}
      BackdropProps={{
        onClick: onCloseHandler, // Close the drawer when clicking the backdrop
      }}
      style={{ marginInline: "auto" }}
      sx={{
        "& .MuiPaper-root": {
          marginInline: !isMobile ? "auto" : "",
        },
        "& .MuiDrawer-paper": {
          backgroundColor: "#fff",
          color: "#000",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
          maxWidth: isMobile ? "100%" : "450px",
        },
      }}
    >
      <div className="drawerContainer">
        <div className="drawerInnerContainer">
          <div className="filterCta" onClick={resetFilter}>
            Reset
          </div>
          <div className="drawerHandle"></div>
          <div className="filterCta" onClick={onCloseHandler}>
            Cancel
          </div>
        </div>
        <div className="drawerContent">{children}</div>
      </div>
    </Drawer>
  );
};

export default FilterDrawer;
