"use client";

import { pushModal } from "@/lib/pushmodal";

export default function Home() {
  return (
    <button
      onClick={() => {
        console.log("click");
        pushModal("ModalExample", { foo: "string" });
      }}
    >
      Test
    </button>
  );
}
