import { Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateSelectorProps {
  bookedDates: { pickup_date: string; drop_date: string }[];
  onSelectDates: (pickup: Date | null, drop: Date | null) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({
  bookedDates,
  onSelectDates,
}) => {
  const [pickupDate, setPickupDate] = useState<Date | null>(null);
  const [dropDate, setDropDate] = useState<Date | null>(null);
  const [disabledDates, setDisabledDates] = useState<Date[]>([]);

  useEffect(() => {
    const blockedDates: Date[] = [];
    bookedDates.forEach(({ pickup_date, drop_date }) => {
      let currentDate = new Date(pickup_date);
      const endDate = new Date(drop_date);

      while (currentDate <= endDate) {
        blockedDates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }
    });

    setDisabledDates(blockedDates);
  }, [bookedDates]);

  return (
    <div className="date-selector">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Grid item xs={2} sm={4} md={6} key={""}>
          <Typography className="sp-small-heading">Pickup Date</Typography>
          <DatePicker
            selected={pickupDate}
            onChange={(date) => {
              setPickupDate(date);
              setDropDate(null); // Reset drop date on pickup change
              onSelectDates(date, null);
            }}
            excludeDates={disabledDates}
            minDate={new Date()}
            dateFormat="yyyy-MM-dd"
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6} key={""}>
          <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
            <div style={{ width: "100%" }}>
              <Typography className="sp-small-heading">Drop Date</Typography>
              <DatePicker
                selected={dropDate}
                onChange={(date) => {
                  setDropDate(date);
                  onSelectDates(pickupDate, date);
                }}
                excludeDates={disabledDates}
                minDate={pickupDate ? new Date(pickupDate) : new Date()}
                dateFormat="yyyy-MM-dd"
                disabled={!pickupDate}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default DateSelector;
