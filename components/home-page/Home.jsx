import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import classes from "./home.module.css";

const Home = () => {
  return (
    <section className={classes.home_page}>
      <Container>
        <Image
          style={{ zIndex: -1 }}
          alt="Hero"
          src="/hero.png"
          layout="fill"
          objectFit="cover"
        />
        <Stack flexDirection="row" alignItems="center" height="100vh">
          <Box>
            <Typography textAlign={{ xs: "center", md: "left" }} variant="h2">
              Interview Shop
            </Typography>
            <Typography
              textAlign={{ xs: "center", md: "left" }}
              variant="body1"
              maxWidth={{ xs: 500, md: 600 }}
              marginTop={{ xs: "25px", md: "25px" }}
            >
              Hi There, I am Safin Ahmed. I built this e-commerce application
              with lots of care and dedication. I hope you love it 💖
            </Typography>
            <Stack
              direction="row"
              justifyContent={{ xs: "center", md: "initial" }}
            >
              <Link href="/shop">
                <a>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#000",
                      width: "100%",
                      marginTop: "35px",
                      "&:hover": { background: "#0cb887" },
                    }}
                  >
                    Shop Now
                  </Button>
                </a>
              </Link>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </section>
  );
};

export default Home;
