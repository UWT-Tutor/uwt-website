'use client'
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

export default function Calendly() {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
  });
  return (
    <InlineWidget url="https://calendly.com/uwtwriting" />
  )
}