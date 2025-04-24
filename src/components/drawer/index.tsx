import { Drawer } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./style.css";
import { useAppContext } from "../../context/hooks/useAppContext";

const FilterDrawer = ({ open, onCloseHandler, children }: any) => {
  const {
    appContextUpdater: { resetFilterValues },
  } = useAppContext();
  return (
    <Drawer
      anchor="bottom"
      open={open}
      transitionDuration={300}
      BackdropProps={{
        onClick: onCloseHandler, // Close the drawer when clicking the backdrop
      }}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: "#fff",
          color: "#000",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        },
      }}
    >
      <div className="drawerContainer">
        <div className="drawerInnerContainer">
          {/* <IconButton onClick={onCloseHandler} className="closeIcon">
            <CloseIcon />
          </IconButton> */}
          <div className="filterCta" onClick={resetFilterValues}>
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
