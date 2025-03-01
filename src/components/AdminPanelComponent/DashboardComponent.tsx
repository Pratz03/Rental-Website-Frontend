import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AnalyticsBoxComponent from "../../common-components/AnalyticsBoxComponent";
import "../../styles/dashboard.css";
import BookingsComponent from "./BookingsComponent";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import bookingsAPI from "../../api/bookingsAPI";
import prodcutAPI from "../../api/productAPI";
import userAPI from "../../api/userApi";
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LocalFireDepartmentRoundedIcon from "@mui/icons-material/LocalFireDepartmentRounded";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

interface Props {
  handleViewAll: (key: string) => void;
}

function DashboardComponent(props: Props) {
  const [bookings, setBookings] = useState<Record<string, any>>({});
  const [mostBooked, setMostBooked] = useState<Record<string, any>>({});
  const [totalUsers, setTotalUsers] = useState<Record<string, any>>({});

  const handleViewAll = () => {
    props.handleViewAll("bookings");
  };

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const bookings = await bookingsAPI.totalBookings();
        const mostBookedProduct = await prodcutAPI.mostBookedProduct();
        const totalUsers = await userAPI.totalUsers();
        console.log("::::::", bookings, mostBookedProduct, totalUsers);
        setBookings(bookings);
        setMostBooked(mostBookedProduct);
        setTotalUsers(totalUsers);
      } catch (err) {
        throw err;
      }
    };
    fetchAnalytics();
  }, []);

  console.log("???????", bookings);
  

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          //   position: "fixed",
          width: "100%",
          background: "#ffffff",
          padding: "40px 0 20px",
          zIndex: 10,
        }}
      >
        Overview
      </Typography>
      <div className="analytics-main-container">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 12, md: 12 }}
        >
          <Grid item xs={4} sm={6} md={4} key={""}>
            <AnalyticsBoxComponent
              mainHeadingValue={bookings["total_bookings"]}
              subheading1Value={bookings["bookings_today"]}
              subheading2Value={bookings["bookings_month"]}
              heading={"Total Bookings"}
              subheading1={"Today's"}
              subheading2={"This month's"}
              icon={<LocalFireDepartmentRoundedIcon />}
            />
          </Grid>
          <Grid item xs={4} sm={6} md={4} key={""}>
            <AnalyticsBoxComponent
              mainHeadingValue={mostBooked["product_name"]}
              subheading1Value={mostBooked["booking_count"]}
              heading={"Most Booked Car"}
              subheading1={"Total bookings"}
              icon={<StarRoundedIcon />}
            />
          </Grid>
          <Grid item xs={4} sm={6} md={4} key={""}>
            <AnalyticsBoxComponent
              mainHeadingValue={totalUsers["total_user"]}
              subheading1Value={totalUsers["total_user_today"]}
              subheading2Value={totalUsers["total_user_month"]}
              heading={"Total users"}
              subheading1={"Today's"}
              subheading2={"This month's"}
              icon={<GroupRoundedIcon />}
            />
          </Grid>
        </Grid>
      </div>
      <div className="recent-bookings-container">
        <Typography
          variant="h6"
          component="div"
          sx={{
            //   position: "fixed",
            width: "100%",
            background: "#ffffff",
            padding: "30px 0 20px",
            zIndex: 10,
          }}
        >
          Recent Bookings
        </Typography>
        <div>
          <BookingsComponent rowsTable={5} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              padding: "0px 10px",
            }}
          >
            <Button
              variant="text"
              color="secondary"
              endIcon={<EastRoundedIcon />}
              onClick={handleViewAll}
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              View All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
