import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "../../styles/singleProduct.css";
import MenuBarComponent from "../HeaderFooterComponent/MenuBarComponent";
import theme from "../../theme";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import DateSelector from "../../common-components/DateSelector";
import FooterComponent from "../HeaderFooterComponent/FooterComponent";
import SwiperCore from "swiper";
import { useParams } from "react-router";
import prodcutAPI from "../../api/productAPI";
import car from "../../assets/car.jpg";
import car1 from "../../assets/car1.jpeg";
import car2 from "../../assets/car2.jpeg";
import car3 from "../../assets/car3.jpeg";

function SingleProductComponent() {
  const [selectedPickup, setSelectedPickup] = useState<Date | null>(null);
  const [selectedDrop, setSelectedDrop] = useState<Date | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [product, setProduct] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const data = await prodcutAPI.getProductById(id);
        console.log("?????????", data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <div className="main-product-container">
      <MenuBarComponent />
      <Grid container spacing={3} className="inner-product-container">
        <Grid item xs={12} md={6}>
          <Swiper
            loop
            spaceBetween={10}
            navigation
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {[car, car1, car2, car3].map((img: any, index: number) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Product ${index}`}
                  className="product-image"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>

        {/* Product Info */}
        <Grid item xs={12} md={6} className="info-product-container">
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, color: theme.palette.primary.main }}
          >
            {product.product_name}
          </Typography>
          <Chip label="New" color="secondary" sx={{ mt: 1 }} />
          <Typography className="sp-des" sx={{ mt: 1 }}>
            {product.description}
          </Typography>

          <Grid container spacing={2} sx={{ p: "30px 0" }}>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography className="sp-small-heading">
                  Key Features
                </Typography>
                <Typography className="sp-des">Age: {product.age}</Typography>
                <Typography className="sp-des">
                  Brand: {product.brand}
                </Typography>
                <Typography className="sp-des">
                  Type: {product.product_type}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: "right" }}>
              <div className="rent-box">
                <Typography className="sp-small-heading">Rent</Typography>
                <Typography
                  variant="h5"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 600,
                  }}
                >
                  <CurrencyRupeeRoundedIcon /> {product.rent}
                  <Typography sx={{ ml: 1 }}> per day</Typography>
                </Typography>
              </div>
            </Grid>
          </Grid>

          <DateSelector
            bookedDates={
              Array.isArray(product.booking_status)
                ? product.booking_status
                : []
            }
            onSelectDates={(pickup, drop) => {
              setSelectedPickup(pickup);
              setSelectedDrop(drop);
            }}
          />

          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Button color="secondary" variant="contained" fullWidth>
                Add To Cart
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Button variant="contained" fullWidth>
                Rent Now
              </Button>
            </Grid>
          </Grid>

          <Typography className="sp-small-heading" sx={{ mt: 2 }}>
            More Features
          </Typography>
          {Object.keys(product)
            .filter(
              (key) =>
                ![
                  "product_id",
                  "image",
                  "product_name",
                  "condition",
                  "description",
                  "created_at",
                  "booking_status",
                  "rent",
                  "age",
                  "brand",
                  "product_type",
                ].includes(key)
            )
            .map((key) => (
              <Typography key={key} className="sp-more-des">
                {key
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
                : {product[key]}
              </Typography>
            ))}
        </Grid>
      </Grid>

      <div
        className="related-products-container"
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            fontWeight: 600,
            color: theme.palette.primary.contrastText,
          }}
        >
          Other Maruti S-Cross near you
        </Typography>
      </div>

      <FooterComponent />
    </div>
  );
}

export default SingleProductComponent;
