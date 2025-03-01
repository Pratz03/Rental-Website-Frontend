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
import React, { useEffect, useState } from "react";
import userAPI from "../../api/userApi";

function UsersComponet() {
  const [users, setUsers] = useState<any[]>([]);
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const response = await userAPI.getAllUsers();
        const columns = Object.keys(response[0]).filter((key) => {
          return key !== "user_id" && key !== "password" && key !== "username";
        });
        setColumns(columns);
        setUsers(response);
      } catch (error) {
        throw error;
      }
    };

    fetchUsersData();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "85vh",
        borderRadius: 2,
        p: 2,
      }}
    >
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
        View / Edit Products
      </Typography>

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
                    minWidth:
                      key === "address" ||
                      key === "email" ||
                      key === "full_name" ||
                      key === "profile_photo"
                        ? 200
                        : 120,
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
            {users.length > 0 ? (
              users.map((user, index) => (
                <TableRow key={index}>
                  {columns.map(
                    (key) =>
                      user["role"] !== "admin" && (
                        <TableCell key={`${index}-${key}`}>
                          {user[key] || "N/A"}
                        </TableCell>
                      )
                  )}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No Products Found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default UsersComponet;
