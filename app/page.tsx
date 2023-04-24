import { builder } from "@builder.io/sdk";
import { BuilderIOComponent } from "./BuilderIOComponent";
import { notFound } from "next/navigation.js";

builder.init("9ca226cfa03b4aefabbdd5b064c4f7a1");

type Props = {
  params: {
    path: string[];
    slug: string;
  };
  searchParams: {
    "builder.preview": string;
  };
};

export async function generateStaticParams() {
  const pages = await builder.getAll("open-decision-page", {
    options: { noTargeting: true },
    omit: "data.blocks",
  });

  return pages.map((page) => {
    return { path: `${page.data?.url}`.slice(1).split("/") };
  });
}

export default async function CMSPage() {
  const page = await builder
    .get("open-decision-page", {
      url: "/",
      options: { includeUnpublished: true },
    })
    .promise();

  if (!page) {
    notFound();
  }

  return (
    <div className={`h-full`}>
      <BuilderIOComponent isDraft={!page?.published ?? true} />
    </div>
  );
}
