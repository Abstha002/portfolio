import type { Metadata } from "next";
import ContactClient from "../ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abhay Raj Shrestha — available for .NET Developer roles, freelance projects, and collaborations.",
};

export default function ContactPage() {
  return <ContactClient />;
}