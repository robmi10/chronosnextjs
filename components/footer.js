import Link from "next/link";
import React from "react";
import { FiCode } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { BsTiktok } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="min-h-full flex gap-8 items-center justify-center bg-white border border-4 text-slate-700 p-20">
      <Link target="_blank" href="https://www.tiktok.com/@biowtr">
        <BsTiktok width={18} height={18} />
      </Link>
      <Link target="_blank" href="https://www.instagram.com/biowtr/">
        <AiFillInstagram width={18} height={18} />
      </Link>
    </footer>
  );
};

export default Footer;
