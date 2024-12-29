// src/global.d.ts

declare global {
  interface Window {
    bootstrap: typeof import("bootstrap");
  }
}

export {};
