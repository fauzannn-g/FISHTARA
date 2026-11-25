/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_INSTAGRAM_ACCESS_TOKEN?: string;
  readonly VITE_INSTAGRAM_USER_ID?: string;
  readonly VITE_WHATSAPP_NUMBER?: string;
  readonly VITE_LOCATION_NAME?: string;
  readonly VITE_LOCATION_ADDRESS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
