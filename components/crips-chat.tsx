"use client";

import { useEffect } from "react";

export default function CrispChat() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as any).$crisp = [];
      (window as any).CRISP_WEBSITE_ID =
        process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;

      const script = document.createElement("script");
      script.src = "https://client.crisp.chat/l.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
