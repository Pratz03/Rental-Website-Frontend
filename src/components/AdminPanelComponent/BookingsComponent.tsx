import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import bookingsAPI from "../../api/bookingsAPI";

interface Props {
  rowsTable?: number;
}

function BookingsComponent(props: Props) {
  const [bookings, setBookings] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    const fetchBookingsData = async () => {
      try {
        const response = await bookingsAPI.getAllBookings();
        const columns = Object.keys(response[0]).filter((key) => {
          return key !== "user_id" && key !== "password" && key !== "username";
        });
        setColumns(columns);
        setBookings(response);
        console.log("++++", response, columns);
      } catch (error) {
        throw error;
      }
    };

    fetchBookingsData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: props.rowsTable ? "60vh" : "85vh",
        borderRadius: 2,
        p: 2,
      }}
    >
      {!props.rowsTable && (
        <Typography
          variant="h6"
          sx={{
            background: "#ffffff",
            padding: "20px 0",
            borderBottom: "1px solid #ddd",
            position: "sticky",
            top: 0,
            zIndex: 10,
          }}
        >
          Bookings
        </Typography>
      )}
      <TableContainer
        component={Paper}
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          maxHeight: "calc(80vh - 50px)",
        }}
      >
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead>
            <TableRow>
              {columns.map((key) => (
                <TableCell
                  key={key}
                  style={{
                    minWidth: key === "payment_status" ? 150 : 120,
                    fontWeight: 600,
                  }}
                >
                  {key
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {bookings.length > 0 ? (
              bookings
                .slice(-Math.abs(props.rowsTable || 5))
                .reverse()
                .map((booking, index) => (
                  <TableRow key={index}>
                    {columns.map((key) => (
                      <TableCell key={`${index}-${key}`}>
                        {booking[key] || "N/A"}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No Bookings
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default BookingsComponent;
