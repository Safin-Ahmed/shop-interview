import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Link from "next/link";

export default function BtnGroup({ categories, baseUrl }) {
  console.log(categories);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
        marginTop: "38px",
        marginBottom: "56px",
      }}
    >
      <ButtonGroup
        sx={{ gap: "7px" }}
        variant="outlined"
        aria-label="outlined button group"
      >
        {categories.map((item) => (
          <Link key={item.id} href={`${baseUrl}/${item.name.toLowerCase()}`}>
            <a>
              <Button
                sx={{
                  border: "1px solid rgb(4 4 4 / 50%)",
                  color: "#000",
                  "&:hover": {
                    backgroundColor: "rgb(0 0 0 / 5%)",
                    border: "1px solid #cdcecf",
                  },
                }}
              >
                {item.name}
              </Button>
            </a>
          </Link>
        ))}
      </ButtonGroup>
    </Box>
  );
}
