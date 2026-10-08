import { Crisp } from "crisp-sdk-web";

/**
 * Central configuration for the Crisp integration.
 * Only NEXT_PUBLIC_* variables are used here because this module also
 * runs in the browser bundle.
 */

// Crisp Website IDs are UUIDs, e.g. 59c9d79d-3f04-454c-ba06-eabdc17d3977
const WEBSITE_ID_PATTERN =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

export const CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID ?? "";

export const isCrispConfigured = WEBSITE_ID_PATTERN.test(CRISP_WEBSITE_ID);

/**
 * Call this from your logout routine to unbind the current visitor session,
 * per Crisp's documented session-continuity flow (setTokenId + session.reset).
 */
export function resetCrispSession(): void {
  if (!isCrispConfigured) return;
  Crisp.setTokenId();
  Crisp.session.reset();
}
