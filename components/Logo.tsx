"use client";
import React from "react";
import LogoImage from "@logos/charzardImageGif.gif";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/">
      <div className="flex items-center w-72 h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <Image
            priority
            src={LogoImage}
            alt="Anychat Logo"
            className="rounded-full dark:filter dark:invert"
          />
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
