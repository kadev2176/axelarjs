import { cn } from "@axelarjs/ui/utils";

import "./globals.css";

import { PropsWithChildren } from "react";
import { Metadata } from "next";
import { Cabin } from "next/font/google";

import MainLayout from "~/layouts/MainLayout";

const font = Cabin({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: [
    {
      rel: "icon",
      url: "/favicon.png",
    },
    {
      rel: "shortcut icon",
      url: "/favicon.png",
    },
  ],
};

type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={cn(font.className, "antialiased")}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
