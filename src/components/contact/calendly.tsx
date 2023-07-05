"use client";
import { InlineWidget } from "react-calendly";

export default function Calendly() {
  return (
    <InlineWidget url="https://calendly.com/uwtwriting" styles={{
        height: "400px",
        minWidth: "320px"
      }} />
  );
}
