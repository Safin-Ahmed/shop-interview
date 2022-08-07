import React from "react";
import Button from "@mui/material/Button";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  const backButtonHandler = () => {
    const paths = router.asPath.split("/");
    paths.splice(paths.length - 1);
    router.push(paths.join("/"));
  };
  return (
    <Button
      onClick={backButtonHandler}
      variant="text"
      sx={{
        color: "#000",
        "&:hover": { background: "#d2d4d12e" },
      }}
      startIcon={<ArrowBack sx={{ color: "#000" }} />}
    >
      Back
    </Button>
  );
};

export default BackButton;
