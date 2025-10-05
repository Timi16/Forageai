import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeHug - The Decentralized Hugging Face",
  description:
    "A decentralized, open platform for hosting, sharing, and accessing machine learning models and datasets. Built on Filecoin/IPFS for permanent, censorship-resistant storage.",
  keywords:
    "machine learning, AI models, datasets, decentralized, IPFS, Filecoin, Hugging Face, open source, ML",
};

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}