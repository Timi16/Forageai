"use client";

import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

interface ConnectWalletProps {
  onConnect?: () => void;
  label?: string;
}

const ConnectWallet = ({ onConnect, label = "Connect Wallet" }: ConnectWalletProps) => {
  const [mounted, setMounted] = useState(false);
  const { publicKey, connected } = useWallet();

  // Ensure component is mounted before rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  // Trigger onConnect callback when wallet connects
  useEffect(() => {
    if (connected && publicKey && onConnect) {
      onConnect();
    }
  }, [connected, publicKey, onConnect]);

  if (!mounted) return null;

  return (
    <div className="flex justify-end self-end">
      <div className="hidden md:flex">
        <WalletMultiButton
          className="bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          style={{
            backgroundColor: "#1E293B", // Slate-800 equivalent
            color: "#FFFFFF",
            fontSize: "14px",
            padding: "8px 16px",
            borderRadius: "8px",
          }}
        >
          {connected && publicKey
            ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
            : label}
        </WalletMultiButton>
      </div>
      <div className="md:hidden flex">
        <WalletMultiButton
          className="bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          style={{
            backgroundColor: "#1E293B", // Slate-800 equivalent
            color: "#FFFFFF",
            fontSize: "14px",
            padding: "8px 16px",
            borderRadius: "8px",
          }}
        >
          {connected && publicKey
            ? `${publicKey.toBase58().slice(0, 4)}...${publicKey.toBase58().slice(-4)}`
            : label}
        </WalletMultiButton>
      </div>
    </div>
  );
};

export default ConnectWallet;