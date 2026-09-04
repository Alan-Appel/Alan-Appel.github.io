import type { Metadata } from "next";
import MissionTerminal from "@/components/sections/MissionTerminal";
import ValuesGrid from "@/components/sections/ValuesGrid";
import AudienceStatement from "@/components/sections/AudienceStatement";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conocé la misión y los valores que guían el trabajo de Vector: excelencia, integridad y servicio en cada proyecto de desarrollo.",
};

export default function SobreMi() {
  return (
    <>
      <MissionTerminal />
      <ValuesGrid />
      <AudienceStatement />
    </>
  );
}
