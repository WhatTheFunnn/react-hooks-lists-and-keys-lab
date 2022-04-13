import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];
    let tags = links.map((link) => {
      return <a key={link} href={"#"+link}>{link}</a>
    })

    return <nav>{tags}</nav>
}

export default NavBar;
