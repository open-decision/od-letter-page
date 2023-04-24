"use client";

import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

builder.init("9ca226cfa03b4aefabbdd5b064c4f7a1");
builder.canTrack = false;

type Props = {
  isDraft: boolean;
};

export function BuilderIOComponent({ isDraft }: Props) {
  const isPreviewing = useIsPreviewing();

  if (isDraft && !isPreviewing) {
    return <p>Nicht gefunden</p>;
  }

  return <BuilderComponent model="open-decision-page" />;
}
