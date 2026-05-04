export interface AppDefinition {
  id: string;
  name: string; // human-readable, for UI / debugging
  ios: string; // App Store URL
  android: string; // Play Store URL
}

export const APPS = {
  padoHome: {
    id: "padoHome",
    name: "Pado Home",
    ios: "https://apps.apple.com/br/app/pado-home/id1575236377",
    android:
      "https://play.google.com/store/apps/details?id=br.com.padotec.app&hl=pt_BR",
  },
  padoSmartHome: {
    id: "padoSmartHome",
    name: "Pado Smart Home",
    ios: "https://apps.apple.com/br/app/pado-smart-home/id6739503833",
    android:
      "https://play.google.com/store/apps/details?id=pado.smart.app&hl=pt_BR",
  },
  padoDigitalLocking: {
    id: "padoDigitalLocking",
    name: "Pado Digital Locking",
    ios: "https://apps.apple.com/br/app/pado-digital-locking/id1494467862",
    android:
      "https://play.google.com/store/apps/details?id=com.pado.smartlock&hl=pt_BR",
  },
} as const satisfies Record<string, AppDefinition>;

export type AppId = keyof typeof APPS;
