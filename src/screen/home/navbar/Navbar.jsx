import React,{useRef} from "react";
import "./navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

function Navbar() {
const menuRef = useRef()

const openMenu = () =>{
  menuRef.current.style.right = "0"
}
const closeMenu = () =>{
  menuRef.current.style.right = "-22rem"
}

  return (
    <>
      <div className="navbar font-outfit flex justify-between items-center md:items-start py-4 ">
        <h1 className="text-[2.5rem]">Portfolio</h1>
        <MenuIcon onClick={openMenu} className="nav-mob-open block md:invisible fixed right-[30px] text-2xl" />
        <ul ref={menuRef} className="nav-menu fixed md:static flex-col md:flex-row items-start md:items-center top-0 md:top-auto  flex gap-[3rem] text-[1.2rem] w-[22rem] h-full md:w-auto md:h-auto bg-[#1F0016] md:bg-transparent z-20 transition-right duration-500 right-[-22rem] ">
            <RestaurantMenuIcon onClick={closeMenu}   className="nav-mob-close block md:invisible  relative top-[30px] left-[290px] w-[30px] "/>
          <li className="pl-[2rem] md:pl-0">
            <AnchorLink className="anchor-link" href="#home">
              Home
            </AnchorLink>
          </li>
         
          <li className="pl-[2rem] md:pl-0">
            <AnchorLink className="anchor-link" offset={50} href="#project">
              Projects
            </AnchorLink>
          </li>
          <li className="pl-[2rem] md:pl-0">
            <AnchorLink className="anchor-link" offset={50} href="#skill">
              Skills
            </AnchorLink>
          </li>
          <li className="pl-[2rem] md:pl-0">
            <AnchorLink className="anchor-link" offset={50} href="#contact">
              Contact
            </AnchorLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;



