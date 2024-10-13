import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react";
import SignIn from "./signIn";
import SignOut from "./signOut";

function Header() {
  const isSignedIn = true; // Replace with actual authentication logic
  const userImageUrl = "https://picsum.photos/200"; // Replace with actual user image URL

  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="text-2xl font-bold">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <Input isClearable placeholder="Search..." />
      </NavbarContent>
      <NavbarContent justify="end">
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <Popover>
              <PopoverTrigger>
                <Avatar src={userImageUrl} alt="User Avatar" />
              </PopoverTrigger>
            </Popover>
          ) : (
            <>
              <NavbarItem>
                <SignIn />
              </NavbarItem>
              <NavbarItem>
                <SignOut />
              </NavbarItem>
            </>
          )}
        </div>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
