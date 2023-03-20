
import React from "react";

function Footer() {
    const year = new Date().getFullYear()
console.log(year);
  return <footer><p>© Ray Ban {year}</p></footer>;
}
//Using Pascal case in JSX instead of camelCase in JS

export default Footer;
