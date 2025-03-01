import * as React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Link,
  TextField,
  Typography,
  Stack,
  Card as MuiCard,
  Grid,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "../../theme";
import { UserData } from "../../helpers/config";
import userAPI from "../../api/userApi";
import { useTenantId } from "../../hooks/tenantHook";

interface Props {
  handleClick: (key: string) => void;
}

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  maxWidth: "600px",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("md")]: {
    width: "600px",
  },
  overflowY: "auto",
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  height: "calc((1 - var(--template-frame-height, 0)) * 100dvh)",
  minHeight: "100%",
  padding: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    padding: theme.spacing(4),
  },
}));

export default function SignUpComponent(props: Props) {
  const [file, setFile] = React.useState<string>("");
  const [formData, setFormData] = React.useState<UserData>({
    full_name: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    password: "",
    profile_photo: "",
    role: "user"
  });
  const [errors, setErrors] = React.useState({
    full_name: "",
    username: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    password: "",
    profile_photo: ""
  });
  const tenantId = useTenantId();
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setFile(URL.createObjectURL(file));
      setFormData({ ...formData, profile_photo: file.name });
    } else {
      setFormData({ ...formData, [name]: value });
      validateField(name, value);
    }
  };

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "full_name":
        if (!value.trim()) error = "Name is required.";
        break;
      case "username":
        if (!value.trim()) error = "Username is required.";
        break;
      case "email":
        if (!value || !/\S+@\S+\.\S+/.test(value))
          error = "Please enter a valid email.";
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) error = "Phone must be exactly 10 digits.";
        break;
      case "city":
        if (!value.trim()) error = "City is required.";
        break;
      case "address":
        if (!value.trim()) error = "Address is required.";
        break;
      case "password":
        if (!value.trim()) error = "Password is required.";
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const newErrors = {
      full_name: "",
      username: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      password: "",
      profile_photo: ""
    };
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
      if (errors[key as keyof typeof errors]) isValid = false;
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateAll()) return;
  
    try {
      await userAPI.createUser(formData, tenantId as string);
    } catch (error: any) {
      let newErrors = { ...errors }; // Create a copy of errors to modify
  
      if (error.response?.data?.key?.includes("username")) {
        newErrors.username = "This username is already taken.";
      } else if (error.response?.data?.key?.includes("email")) {
        newErrors.email = "This email is already taken. Try a different email.";
      } else if (error.response?.data?.key?.includes("phone")) {
        newErrors.phone = "This phone number is already taken. Try a different phone number.";
      }
  
      setErrors(newErrors); // Update the errors state
    }
  };  

  return (
    <SignUpContainer direction="column" justifyContent="space-between">
      <Card variant="outlined">
        <Typography component="h1" variant="h4" sx={{ width: "100%" }}>
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl className="file-upload" fullWidth>
                <FormLabel sx={{ mr: 3 }}>Profile Photo</FormLabel>
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  ref={fileInputRef}
                  onChange={handleChange}
                />
                <Box
                  sx={{
                    width: "80px",
                    height: "80px",
                    border: `2px dashed ${theme.palette.secondary.main}`,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    overflow: "hidden",
                    background: file ? "none" : "#f5f5f5",
                  }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  {file ? (
                    <img
                      src={file}
                      alt="Profile"
                      style={{ width: "inherit", height: "initial" }}
                    />
                  ) : (
                    <Typography variant="body2" color="secondary">
                      Upload
                    </Typography>
                  )}
                </Box>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <FormLabel>Full Name*</FormLabel>
                <TextField
                  name="full_name"
                  required
                  value={formData.full_name}
                  onChange={handleChange}
                  error={!!errors.full_name}
                  helperText={errors.full_name}
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <FormLabel>Username*</FormLabel>
                <TextField
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  error={!!errors.username}
                  helperText={errors.username}
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <FormLabel>Phone*</FormLabel>
                <TextField
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  error={!!errors.phone}
                  helperText={errors.phone}
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <FormLabel>Email*</FormLabel>
                <TextField
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <FormLabel>City*</FormLabel>
                <TextField
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <FormControl fullWidth>
                <FormLabel>Address*</FormLabel>
                <TextField
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  error={!!errors.address}
                  helperText={errors.address}
                  size="small"
                />
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <FormControl fullWidth>
                <FormLabel>Password*</FormLabel>
                <TextField
                  required
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                  size="small"
                />
              </FormControl>
            </Grid>
          </Grid>

          <Button type="submit" fullWidth variant="contained">
            Sign up
          </Button>
        </Box>

        <Typography sx={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link
            variant="body2"
            sx={{ cursor: "pointer", color: theme.palette.secondary.main }}
            onClick={() => props.handleClick("signIn")}
          >
            Sign in
          </Link>
        </Typography>
      </Card>
    </SignUpContainer>
  );
}
