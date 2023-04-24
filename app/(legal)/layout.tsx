import * as React from "react";

type Props = { children: React.ReactNode };

export default async function LegalLayout({ children }: Props) {
  return (
    <div className="flex justify-center my-10">
      <div className="max-w-[800px]">{children}</div>
    </div>
  );
}
