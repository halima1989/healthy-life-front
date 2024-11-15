export function isConnected() {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("token");
    if (token) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
