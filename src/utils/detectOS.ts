export type DeviceOS = "ios" | "android" | "other";

export function detectOS(): DeviceOS {
  const ua = navigator.userAgent;

  // IOS detection
  if (/IPhone|iPad|iPod/i.test(ua)) {
    return "ios";
  }

  // Android detection
  if (/Android/i.test(ua)) {
    return "android";
  }

  return "other";
}
