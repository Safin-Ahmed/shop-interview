import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";
import Image from "next/image";

export default function SingleCard({
  image,
  title,
  price,
  sale,
  url,
  regular,
}) {
  return (
    <Link href={`/${url}`}>
      <a>
        <Card
          sx={{
            maxWidth: 280,
            margin: { xs: "auto" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-10px)",
            },
          }}
        >
          <Image
            src={`${image.src}`}
            layout="responsive"
            objectFit="cover"
            alt={title}
            width={280}
            height={274}
          />

          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              "&:last-child": {
                paddingBottom: "0px",
              },
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: 700 }}
              gutterBottom
              variant="h2"
              component="h2"
            >
              {title}
            </Typography>
            <Box sx={{ flexGrow: 1 }}></Box>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              {sale && (
                <h4
                  style={{
                    color: "#000",
                    opacity: 0.5,
                    textDecoration: "line-through",
                    fontWeight: 400,
                  }}
                >
                  ${regular}
                </h4>
              )}
              <h4 style={{ fontWeight: 400 }}>${price}</h4>
            </Stack>
          </CardContent>
        </Card>
      </a>
    </Link>
  );
}
