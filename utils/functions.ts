export default function truncateEthereumAddress(
  address,
  startLength = 6,
  endLength = 4
) {
  if (address.length < startLength + endLength + 2) {
    return "Invalid address";
  }
  return (
    address.slice(0, startLength).toLowerCase() +
    "..." +
    address.slice(-endLength).toLowerCase()
  );
}
