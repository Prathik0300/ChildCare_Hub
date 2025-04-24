import { Button } from "@mui/material";
import "./style.css";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useState } from "react";

const SortButton = ({ filter, setFilter }: any) => {
  return (
    <div className="sortBtnContainer">
      <Button
        variant={filter === "desc" ? "contained" : "outlined"}
        onClick={() => setFilter("desc")}
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
        <SwapVertIcon />
        Sort by High to Low
      </Button>
      <Button
        variant={filter === "asc" ? "contained" : "outlined"}
        onClick={() => setFilter("asc")}
        sx={{
          display: "flex",
          gap: "5px",
        }}
      >
        <SwapVertIcon />
        Sort by Low to High
      </Button>
    </div>
  );
};

export default SortButton;
