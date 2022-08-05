import React from "react";
import Button from "@mui/material/Button";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();
  const backButtonHandler = () => {
    router.back();
  };
  return (
    <Button
      onClick={backButtonHandler}
      variant="text"
      startIcon={<ArrowBack />}
    >
      Back
    </Button>
  );
};

export default BackButton;
