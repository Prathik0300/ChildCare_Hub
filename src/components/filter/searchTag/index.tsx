import { Chip, TextField } from "@mui/material";
import { useState, KeyboardEvent } from "react";
import "./style.css";

const SearchTag = ({ qualifications, setQualifications }: any) => {
  const [searchTerm, setSearchTerm] = useState("");
  // const [tags, setTags] = useState<string[]>([]);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      if (!qualifications.includes(searchTerm.trim())) {
        setQualifications([...qualifications, searchTerm.trim()]);
      }
      setSearchTerm("");
      e.preventDefault();
    }
  };

  const handleDelete = (tagToDelete: string) => {
    setQualifications(
      qualifications.filter((tag: string) => tag !== tagToDelete)
    );
  };

  return (
    <div className="searchTagContainer">
      <p className="helperText">Type and enter all qualifications before applying the filters.</p>
      <TextField
        label="e.g. Cooking"
        variant="outlined"
        value={searchTerm}
        onKeyPress={handleKeyPress}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          backgroundColor: "#fff",
          padding: "5px",
          borderRadius: "5px",
          fontSize: "12px",
          "& input": {
            padding: "5px",
            fontSize: "12px",
          },
        }}
        InputLabelProps={{
          sx: {
            color: "#666",
            fontSize: "14px",
            fontWeight: "bold",
            top: "-6px",
            "&.Mui-focused": {
              color: "#0077b6",
              top: "6px",
              left: "10px",
            },
            "&.MuiFormLabel-filled": {
              color: "#023e8a",
            },
          },
        }}
      />
      <div className="chipContainer">
        {qualifications.map((tag: string, index: number) => (
          <Chip
            key={`${tag}-${index}`}
            label={tag}
            onDelete={() => handleDelete(tag)}
            className="chip"
            sx={{
              backgroundColor: "#E0E3E7",
              fontSize: "14px",
              "& .MuiChip-label": {
                padding: 0,
              },
              "& .MuiChip-deleteIcon": {
                order: "-1",
                color: "#333",
                fontSize: "16px",
                "&:hover": {
                  color: "#000",
                },
              },
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchTag;
