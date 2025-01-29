import { Box, Popover } from "@mui/material";
import React, { useState } from "react";
import { SketchPicker } from "react-color";
import theme from "../theme";

interface ColorPickerProps {
  selectedColor: string;
  handleChange: (color: string) => void;
}

function ColorPickerComponent(props: ColorPickerProps) {
  const [color, setColor] = useState(props.selectedColor);
  const [isCpOpen, setIsCpOpen] = useState(null);

  // Handle opening color picker
  const handleOpen = (event: any) => {
    setIsCpOpen(event.currentTarget);
  };

  // Handle closing color picker
  const handleClose = () => {
    setIsCpOpen(null);
  };

  // Handle color change and close picker
  const handleColorChange = (updatedColor: any) => {
    props.handleChange(updatedColor.hex);
    setColor(updatedColor.hex);
    // handleClose(); // Close the picker after selecting the color
  };
  return (
    <div>
      <Box
        sx={{
          borderRadius: 2,
          background: color,
          width: 55,
          height: 40,
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      />

      {/* Color Picker */}
      <Popover
        open={Boolean(isCpOpen)}
        anchorEl={isCpOpen}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <SketchPicker color={color} onChangeComplete={handleColorChange} />
      </Popover>
    </div>
  );
}

export default ColorPickerComponent;
