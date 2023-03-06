import Link from "next/link";
import React from "react";
import { FiCode } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="min-h-full flex gap-8 items-center justify-center bg-white border border-4 text-slate-700 p-20">
      <CiTwitter width={18} height={18} />
      <AiFillInstagram width={18} height={18} />
      <Link href="/terms">Terms</Link>
      <Link href="/privacy">Privacy Policy</Link>
    </footer>
  );
};

export default Footer;
