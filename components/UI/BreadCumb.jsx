import * as React from "react";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import { capitalizeFirstLetter } from "../../utils/utils";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

//  shop/women/hoodies
const BreadCumb = ({ paths }) => {
  const links = [paths[1], paths[2], paths[3]];
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        {links.map((path, i) => {
          let url;

          if (i === 0) {
            url = `/${path}`;
          }
          if (i === 1) {
            url = `/${links[0]}/${path}`;
          }
          if (i === 2) {
            url = `/${links[0]}/${links[1]}/${path}`;
          }

          return (
            <Link href={`${url}`} key={path}>
              <a style={{ color: "#000" }}>{capitalizeFirstLetter(path)}</a>
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
};

export default BreadCumb;
