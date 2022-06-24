export function authHeader() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    // console.log(token);
    if (token) {
      return {
        Authorization: token,
      };
    } else {
      return {};
    }
  }
}
