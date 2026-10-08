/**
 * Central configuration for the Tawk.to integration.
 *
 * Reads the public environment variables and exposes derived, ready-to-use
 * values. Only NEXT_PUBLIC_* variables are used here because this module
 * also runs in the browser bundle.
 */

const ID_PATTERN = /^[a-zA-Z0-9_-]+$/;

export const TAWK_PROPERTY_ID = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID ?? "";
export const TAWK_WIDGET_ID = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ?? "default";

function isValidId(value: string): boolean {
  return value.length > 0 && ID_PATTERN.test(value);
}

/** True only when both IDs are present and look like real Tawk.to identifiers. */
export const isTawkConfigured = isValidId(TAWK_PROPERTY_ID) && isValidId(TAWK_WIDGET_ID);

export const TAWK_EMBED_SRC = isTawkConfigured
  ? `https://embed.tawk.to/${TAWK_PROPERTY_ID}/${TAWK_WIDGET_ID}`
  : "";

/**
 * Custom DOM events dispatched by TawkChat so other components (like
 * ChatButton) can react to the widget's lifecycle without importing or
 * polling the Tawk.to SDK directly.
 */
export const TAWK_EVENTS = {
  ready: "tawk:ready",
  error: "tawk:error",
  maximized: "tawk:maximized",
  minimized: "tawk:minimized",
  agentMessage: "tawk:agent-message",
} as const;
