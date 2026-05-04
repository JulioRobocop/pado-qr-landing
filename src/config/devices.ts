import type { AppId } from "./apps.ts";

export interface Device {
  id: string; // unique key, e.g. 'smart-bulb'
  name: string; // i18n key, e.g. 'devices.smartBulb.name'
  svg: string; // path to the SVG asset
  appId?: AppId;
  manualPath: Record<string, string>; // PDF path per locale
}

export const DEVICES: Device[] = [
  {
    id: "device-a",
    name: "FD-500 PRO",
    svg: "/devices/fd-500-pro.svg",
    appId: "padoDigitalLocking",
    manualPath: {
      en: "/manuals/fd-500-pro/manual_fd_500_pro.pdf",
      pt: "/manuals/fd-500-pro/manual_fd_500_pro.pdf",
      es: "/manuals/fd-500-pro/manual_fd_500_pro.pdf",
    },
  },
  {
    id: "device-b",
    name: "FDE-101RM PLUS",
    svg: "/devices/fde-101rm_plus.svg",
    appId: "padoHome",
    manualPath: {
      en: "/manuals/fde_101rm_plus/Manual_FDE_101_RM_PLUS REV 08.pdf",
      pt: "/manuals/fde_101rm_plus/Manual_FDE_101_RM_PLUS REV 08.pdf",
      es: "/manuals/fde_101rm_plus/Manual_FDE_101_RM_PLUS REV 08.pdf",
    },
  },
  {
    id: "device-c",
    name: "FDE-250 Wi-Fi",
    svg: "/devices/fde-250w.svg",
    appId: "padoSmartHome",
    manualPath: {
      en: "/manuals/fde-250-wifi/Manual_FDE-250_WIFI.pdf",
      pt: "/manuals/fde-250-wifi/Manual_FDE-250_WIFI.pdf",
      es: "/manuals/fde-250-wifi/Manual_FDE-250_WIFI.pdf",
    },
  },
  {
    id: "device-d",
    name: "FDE-300W",
    svg: "/devices/fde-300W.svg",
    appId: "padoDigitalLocking",
    manualPath: {
      en: "/manuals/fde_300w/Manual_FDE-300W.pdf",
      pt: "/manuals/fde_300w/Manual_FDE-300W.pdf",
      es: "/manuals/fde_300w/Manual_FDE-300W.pdf",
    },
  },
  {
    id: "device-e",
    name: "FDE-600W",
    svg: "/devices/fde-600W.svg",
    appId: "padoDigitalLocking",
    manualPath: {
      en: "/manuals/fde_600w/Manual_FDE-600W.pdf",
      pt: "/manuals/fde_600w/Manual_FDE-600W.pdf",
      es: "/manuals/fde_600w/Manual_FDE-600W.pdf",
    },
  },
  {
    id: "device-f",
    name: "FDE-800 VISION",
    svg: "/devices/fde-800-vision.svg",
    appId: "padoDigitalLocking",
    manualPath: {
      en: "/manuals/fde_800_vision/Manual_FDE-800.pdf",
      pt: "/manuals/fde_800_vision/Manual_FDE-800.pdf",
      es: "/manuals/fde_800_vision/Manual_FDE-800.pdf",
    },
  },
  {
    id: "device-g",
    name: "FDS-10",
    svg: "/devices/fds-10.svg",
    appId: "padoHome",
    manualPath: {
      en: "/manuals/fds_10/Manual_FDS-10.pdf",
      pt: "/manuals/fds_10/Manual_FDS-10.pdf",
      es: "/manuals/fds_10/Manual_FDS-10.pdf",
    },
  },
  {
    id: "device-h",
    name: "FDS-10 NEO",
    svg: "/devices/fds-10-neo.svg",
    manualPath: {
      en: "/manuals/device-b-en.pdf",
      pt: "/manuals/device-b-pt.pdf",
      es: "/manuals/device-b-es.pdf",
    },
  },
  {
    id: "device-i",
    name: "FDS-50",
    svg: "/devices/fds-50.svg",
    appId: "padoHome",
    manualPath: {
      en: "/manuals/fds_50/Manual_FDS-50.pdf",
      pt: "/manuals/fds_50/Manual_FDS-50.pdf",
      es: "/manuals/fds_50/Manual_FDS-50.pdf",
    },
  },
  {
    id: "device-j",
    name: "FDS-50 PLUS",
    svg: "/devices/fds-50-plus.svg",
    manualPath: {
      en: "/manuals/fds_50_plus/Manual_FDS-50-ENG.pdf",
      pt: "/manuals/fds_50_plus/Manual_FDS-50-PORT.pdf",
      es: "/manuals/fds_50_plus/Manual_FDS-50-ESP.pdf",
    },
  },
  {
    id: "device-i",
    name: "FDV-201",
    svg: "/devices/fdv-201.svg",
    appId: "padoDigitalLocking",
    manualPath: {
      en: "/manuals/fdv_201/Manual_FDV-201.pdf",
      pt: "/manuals/fdv_201/Manual_FDV-201.pdf",
      es: "/manuals/fdv_201/Manual_FDV-201.pdf",
    },
  },
  {
    id: "device-j",
    name: "GATEWAY",
    svg: "/devices/gateway.svg",
    manualPath: {
      en: "/manuals/pado_hub_plus/Manual_Pado_Hub_Plus.pdf",
      pt: "/manuals/pado_hub_plus/Manual_Pado_Hub_Plus.pdf",
      es: "/manuals/pado_hub_plus/Manual_Pado_Hub_Plus.pdf",
    },
  },
  {
    id: "device-k",
    name: "PADO HOME",
    svg: "/devices/pado_home_logo.svg",
    manualPath: {
      en: "/manuals/app/Manual_aplicativo_pado_home.pdf",
      pt: "/manuals/app/Manual_aplicativo_pado_home.pdf",
      es: "/manuals/app/Manual_aplicativo_pado_home.pdf",
    },
  },
];
