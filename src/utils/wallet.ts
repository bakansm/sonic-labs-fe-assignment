export function formatAddress(address?: string) {
  if (!address) return 'Invalid Address';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
