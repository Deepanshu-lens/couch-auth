export function load({ cookies }) {
  // Read all cookies
  const allCookies = cookies.get("pb_auth");
  return {
    pb_auth: allCookies,
  };
}
