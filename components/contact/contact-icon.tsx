"use client";
import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Github, Linkedin, Copy, ClipboardCheck } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";

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
      <Button className="w-full bg-accent hover:bg-muted-foreground">
        <Link href={url} target="_blank">
          <Linkedin className="text-primary" />
        </Link>
      </Button>
    );
  } else if (title === "Github") {
    content = (
      <Button className="w-full bg-accent hover:bg-muted-foreground">
        <Link href={url} target="_blank">
          <Github className="text-primary" />
        </Link>
      </Button>
    );
  } else if (title === "X") {
    content = (
      <Button className="w-full bg-accent hover:bg-muted-foreground">
        <Link href={url} target="_blank">
          <FaSquareXTwitter className="text-primary h-6 w-6" />
        </Link>
      </Button>
    );
  } else {
    content = (
      <Button
        className="w-full bg-accent hover:bg-muted-foreground ease-in"
        onClick={copyToClipboard}
      >
        {copied && (
          <>
            <ClipboardCheck className="text-primary mr-1 text-xs" />
            <span className="text-primary text-xs">{"copied!"}</span>
          </>
        )}
        {!copied && (
          <>
            <Copy className="text-primary mr-1 text-xs" />
            <span className="text-primary text-xs">{title}</span>
          </>
        )}
      </Button>
    );
  }

  return <>{content}</>;
}
