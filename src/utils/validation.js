export const isValidImageUrl = (url) => {
  try {
    const parsed = new URL(url);

    // only http/https allow
    if (!["http:", "https:"].includes(parsed.protocol)) return false;

    // image extension check (optional but useful)
    return /\.(jpg|jpeg|png|webp|gif)$/i.test(parsed.pathname);
  } catch {
    return false;
  }
};
