import { defineChain } from "thirdweb";

// Define Lisk Sepolia chain
export const filecoinCalibrationTestnet = defineChain({
  id: 314159,
  name: "Filecoin - Calibration testnet",
  nativeCurrency: {
    name: "Filecoin - Calibration testnet",
    symbol: "tFIL",
    decimals: 18,
  },
  rpc: "https://api.calibration.node.glif.io/rpc/v1",
  blockExplorers: [
    {
      name: "Filscan Filecoin Explorer",
      url: "https://calibration.filscan.io",
    },
  ],
  testnet: true,
});

export const SUPPORTED_CHAIN_ID = 314159;

export const isSupportedChain = (
  chainId: number | undefined
): chainId is number =>
  chainId !== undefined && Number(chainId) === SUPPORTED_CHAIN_ID;