import React from "react";
import { useNavigate } from "react-router-dom";
import "./booksPage.styles.css";
import Navbar from "../../components/layouts/navbar/Navbar";
import SearchInputForm from "../../components/forms/searchInputForm/SearchInputForm";
import ProductListingAll from "../../components/layouts/product-listing-all/ProductListingAll";
import Footer from "../../components/layouts/footer/Footer";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const BooksPage = () => {
  const navigate = useNavigate();

  const images = [
    {
      url: "https://images.pexels.com/photos/1528375/pexels-photo-1528375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Horror",
      width: "35%",
      height: "20%",
      genre : "Horror"
    },
    {
      url: "https://images.pexels.com/photos/4440716/pexels-photo-4440716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Love",
      width: "30%",
      height: "20%",
      genre : "Love"
    },
    {
      url: "https://images.pexels.com/photos/16931543/pexels-photo-16931543/free-photo-of-roses-on-an-open-book-on-the-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Comedy",
      width: "35%",
      height: "20%",
      genre : "Comedy"
    },
    {
      url: "https://images.pexels.com/photos/7256685/pexels-photo-7256685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Action",
      width: "35%",
      height: "20%",
      genre : "Action"
    },
    {
      url: "https://images.pexels.com/photos/19444969/pexels-photo-19444969/free-photo-of-picnic-with-book-and-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Thriller",
      width: "30%",
      height: "20%",
      genre : "Thriller"
    }
  ];

  const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: "relative",
    height: 270,
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &.Mui-focusVisible": {
      zIndex: 1,
      "& .MuiImageBackdrop-root": {
        opacity: 0.15,
      },
      "& .MuiImageMarked-root": {
        opacity: 0,
      },
      "& .MuiTypography-root": {
        border: "4px solid currentColor",
      },
    },
  }));

  const ImageSrc = styled("span")({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    borderRadius: 20,
    backgroundPosition: "center 40%",
  });

  const Image = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  }));

  const ImageBackdrop = styled("span")(({ theme }) => ({
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  }));

  const ImageMarked = styled("span")(({ theme }) => ({
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    // bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  }));

  const getBookGenre = (genre) => {
    navigate("/search", { state: { genre: genre } });
  };

  return (
    <section>
      <Navbar darkText={true} />

      <div className="search-container">
        <h2>
          Find the <span className="text-primary">Books</span> that you want
        </h2>
        <SearchInputForm darkTheme={false} />
        {/* <div className="category-container">
          <ButtonGroup
            size="large"
            color="warning"
            disableElevation
            variant="contained"
            aria-label="Disabled elevation buttons"
          >
            <Button
              onClick={() => {
                getBookGenre("Horror");
              }}
            >
              Horror
            </Button>
            <Button
              onClick={() => {
                getBookGenre("Love");
              }}
            >
              Love
            </Button>
            <Button
              onClick={() => {
                getBookGenre("Comedy");
              }}
            >
              Comedy
            </Button>
            <Button
              onClick={() => {
                getBookGenre("Action");
              }}
            >
              Action
            </Button>
            <Button
              onClick={() => {
                getBookGenre("Thriller");
              }}
            >
              Thriller
            </Button>
          </ButtonGroup>
        </div> */}
        <h2 style={{"marginTop" : "3vh" }} >
          Categories
        </h2>
      </div>
      
      <Box sx={{ display: 'flex', flexDirection : "row","justifyContent" : "space-evenly" , minWidth: 300, width: '100%', backgroundColor:"transparent", marginTop : "5vh" }}>
      {images.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{
            width: "200px",
          }}

          onClick={() => { getBookGenre(image.genre); }}
        >
           <ImageSrc style={{ backgroundImage: `url(${image.url})` }} /> 
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6 px)`,
              }}
            >
              {image.title}
              <ImageMarked className="MuiImageMarked-root" />
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
    <hr style={{"marginTop" : "3vh" }} ></hr>
      <ProductListingAll />
      <Footer />
    </section>
  );
};

export default BooksPage;
