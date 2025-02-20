import React from "react";
import MenuBarComponent from "../HeaderFooterComponent/MenuBarComponent";
import "../../styles/homePage.css";
import { Button, Divider, Grid, Typography } from "@mui/material";
import theme from "../../theme";
import { iconMap } from "../../helpers/iconMap";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import HighQualityRoundedIcon from "@mui/icons-material/HighQualityRounded";
import ProductCardComponent from "../../common-components/ProductCardComponent";
import premium from "../../assets/premium.png";
import crown from "../../assets/crown.png";
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import FooterComponent from "../HeaderFooterComponent/FooterComponent";

function HomePageComonent() {
  return (
    <div>
      <div>
        <MenuBarComponent />
      </div>
      <div className="home-main-container">
        <div className="main-heading">
          <Typography variant="h3" color={theme.palette.text.secondary}>
            Perfect Renting Solution
          </Typography>
          <Typography color={theme.palette.text.secondary}>
            Find it. Rent it. Love it.
          </Typography>
        </div>
        <div
          className="feature-container feature-container1"
          style={{ backgroundColor: "#fff" }}
        >
          <div
            className="icon-container"
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <DeliveryDiningRoundedIcon
              sx={{ color: theme.palette.text.secondary }}
            />
          </div>
          <Typography sx={{ fontWeight: 600 }}>Free Delivery</Typography>
        </div>
        <div
          className="feature-container feature-container2"
          style={{ backgroundColor: "#fff" }}
        >
          <div
            className="icon-container"
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <LocalOfferRoundedIcon
              sx={{ color: theme.palette.text.secondary }}
            />
          </div>
          <Typography sx={{ fontWeight: 600 }}>Best Prices</Typography>
        </div>
        <div
          className="feature-container feature-container3"
          style={{ backgroundColor: "#fff" }}
        >
          <div
            className="icon-container"
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <HighQualityRoundedIcon
              sx={{ color: theme.palette.text.secondary }}
            />
          </div>
          <Typography sx={{ fontWeight: 600 }}>High Quality</Typography>
        </div>
      </div>
      <div className="products-main-container">
        <div className="heading-container">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Some Products You'll Love
          </Typography>
          {/* <Divider sx={{ borderWidth: 1, mt: 1, borderColor: theme.palette.primary.main }} /> */}
        </div>
        <div className="product-list-container">
          <ProductCardComponent />
          <ProductCardComponent />
          <ProductCardComponent />
        </div>
        <div className="button-container">
          <Button
            variant="contained"
            size="large"
            sx={{ textTransform: "none", fontWeight: 600 }}
          >
            View All
          </Button>
        </div>
      </div>
      <div
        className="about-us-container"
        style={{ backgroundColor: "#f7f7f7" }}
      >
        <div className="heading-container">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Know About Us
          </Typography>
          <div className="about-us-description">
            <Typography variant="body1" sx={{ fontSize: 18 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              hendrerit, tortor in fermentum porta, magna velit mollis ligula,
              in scelerisque nunc nisi quis nunc. Etiam varius finibus sem, id
              scelerisque massa feugiat tristique. Cras semper metus quis ligula
              blandit, consectetur scelerisque odio auctor. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              In mi nibh, congue eu purus non, pellentesque laoreet diam. Sed
              metus diam, tincidunt sed pretium ac, porttitor vel tellus. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Nam ac consequat mi, vel pellentesque diam.
              Vestibulum nec ex rhoncus eros pulvinar molestie. Duis vitae nibh
              sapien. Aenean et porta enim. Nullam ut risus ac nunc placerat
              pulvinar et eget metus. Sed ultrices consequat interdum. Praesent
              massa sapien, fringilla et rhoncus quis, mattis mattis risus.
              Maecenas eu efficitur erat. Praesent rhoncus, eros eu ornare
              rhoncus, nulla lectus mattis arcu, at sagittis lorem urna ut
              neque.
            </Typography>
          </div>
          {/* <Divider sx={{ borderWidth: 1, mt: 1, borderColor: theme.palette.primary.main }} /> */}
        </div>
      </div>
      {/* <Divider
        sx={{
          p: 1,
          width: "30%",
          m: "auto",
          borderColor: theme.palette.secondary.main,
          borderBottomWidth: "medium",
        }}
      /> */}
      <div className="why-choose-us-container">
        <div className="poduct-heading-container">
          <Typography
            variant="h5"
            sx={{ textAlign: "center", fontWeight: 600 }}
          >
            Why Choose Us?
          </Typography>
          <div className="wcu-cardlist-container">
            <div className="wcu-card" style={{ border: `1px dashed ${theme.palette.secondary.main}` }}>
              <img src={premium} alt="premiun badge" />
              <Typography
                variant="body1"
                sx={{   
                  fontWeight: 600,
                  mt: 2
                }}
              >
                FAST & FREE DELIVERY
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 0.5, color: "#999999" }}>
                Enjoy quick delivery at no extra cost—because we know your time
                matters.
              </Typography>
            </div>
            <div className="wcu-card" style={{ border: `1px dashed ${theme.palette.secondary.main}` }}>
              <img src={crown} alt="premiun badge" />
              {/* <WorkspacePremiumRoundedIcon sx={{ width: "70px", height: "70px", color: theme.palette.text.secondary }} /> */}
              <Typography
                variant="body1"
                sx={{   
                  fontWeight: 600,
                  mt: 2,
                }}
              >
                FAST & FREE DELIVERY
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 0.5 }}>
                Enjoy quick delivery at no extra cost—because we know your time
                matters.
              </Typography>
            </div>
            <div className="wcu-card" style={{ border: `1px dashed ${theme.palette.secondary.main}` }}>
              <img src={premium} alt="premiun badge" />
              <Typography
                variant="body1"
                sx={{   
                  fontWeight: 600,
                  mt: 2
                }}
              >
                FAST & FREE DELIVERY
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: 0.5, color: "#999999" }}>
                Enjoy quick delivery at no extra cost—because we know your time
                matters.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default HomePageComonent;
