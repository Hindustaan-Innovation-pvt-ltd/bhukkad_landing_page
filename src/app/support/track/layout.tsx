import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Support Ticket | Bhukkadh Support",
  description:
    "Track the live status, review progress, and agent responses for your Bhukkadh support ticket.",
};

export default function TrackSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
