import dynamic from "next/dynamic";
import React from "react";

const Scene = dynamic(() => import("../src/App"), {
  ssr: false,
});

export default function Index() {
  return (
    <>
      <Scene />
    </>
  );
}
