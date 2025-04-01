"use client";
import { useState } from "react";
import Link from "next/link";

import { SiLinkedin } from "react-icons/si";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";

interface ContactIconProps {
  title: string;
  url: string;
}

export function ContactIcon({ title, url }: ContactIconProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("nadolny.dev@gmail.com");
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  let content = <></>;
  if (title === "LinkedIn") {
    content = (
      <button className="w-full">
        <Link href={url} target="_blank">
          <SiLinkedin className="text-neutral-500 text-[24px] md:text-[30px] hover:text-neutral-400 cursor-pointer" />
        </Link>
      </button>
    );
  } else if (title === "Github") {
    content = (
      <button className="w-full bg-accent hover:bg-muted-foreground">
        <Link href={url} target="_blank">
          <FaGithub className="text-neutral-500 text-[24px] md:text-[34px] hover:text-neutral-400 cursor-pointer" />
        </Link>
      </button>
    );
  } else if (title === "X") {
    content = (
      <button className="w-full bg-accent hover:bg-muted-foreground">
        <Link href={url} target="_blank">
          <FaSquareXTwitter className="text-neutral-500 text-[24px] md:text-[34px] hover:text-neutral-400 cursor-pointer" />
        </Link>
      </button>
    );
  }

  return <>{content}</>;
}
