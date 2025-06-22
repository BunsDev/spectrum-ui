import React from "react";
import fs from "fs/promises";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

// ✅ Dynamically import the client component (no SSR)
const CodeCardWrapper = dynamic(
  () => import("@/app/(docs)/docs/components/code-card-wrapper"),
  {
    ssr: false,
  },
);

interface PreviewCodeCardProps {
  className?: string;
  path: string;
  children?: React.ReactNode;
  cli?: string;
}

const PreviewCodeCard = async ({
  className,
  path,
  children,
  cli,
}: PreviewCodeCardProps) => {
  const demoCode = await fs.readFile(path, "utf8");

  if (!demoCode) {
    return null;
  }

  return (
    <CodeCardWrapper
      code={demoCode}
      className={cn("mb-14 mt-5", className)}
      CLI={cli}
    >
      <div className="flex items-center justify-center py-10">{children}</div>
    </CodeCardWrapper>
  );
};

export default PreviewCodeCard;
