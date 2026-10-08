/**
 * Minimal, accurate typing of the tawk.to JavaScript API surface this
 * integration relies on. Reference: https://developer.tawk.to/jsapi/
 *
 * The index signature covers the remaining documented methods
 * (addTags, addEvent, setChatInputMessage, switchWidget, ...) without
 * pretending to type every one of them.
 */
export interface TawkVisitor {
  name?: string;
  email?: string;
  hash?: string;
}

export interface TawkAPI {
  onLoad?: () => void;
  onStatusChange?: (status: "online" | "away" | "offline") => void;
  onBeforeLoad?: () => void;
  onChatMaximized?: () => void;
  onChatMinimized?: () => void;
  onChatHidden?: () => void;
  onChatStarted?: () => void;
  onChatEnded?: () => void;
  onChatMessageVisitor?: (message: string) => void;
  onChatMessageAgent?: (message: string) => void;
  onChatMessageSystem?: (message: string) => void;
  visitor?: TawkVisitor;
  customStyle?: { zIndex?: number | string };
  autoStart?: boolean;
  maximize?: () => void;
  minimize?: () => void;
  toggle?: () => void;
  popup?: () => void;
  getWindowType?: () => "inline" | "embed";
  showWidget?: () => void;
  hideWidget?: () => void;
  toggleVisibility?: () => void;
  getStatus?: () => "online" | "away" | "offline";
  isChatMaximized?: () => boolean;
  isChatMinimized?: () => boolean;
  isChatHidden?: () => boolean;
  isChatOngoing?: () => boolean;
  isVisitorEngaged?: () => boolean;
  endChat?: () => void;
  setAttributes?: (
    attributes: Record<string, string>,
    callback?: (error?: unknown) => void
  ) => void;
  start?: (options?: { showWidget?: boolean }) => void;
  shutdown?: () => void;
  login?: (
    data: { hash: string; userId: string; name?: string; email?: string; phone?: string },
    callback?: (error?: unknown) => void
  ) => void;
  logout?: (callback?: (error?: unknown) => void) => void;
  [key: string]: unknown;
}

declare global {
  interface Window {
    Tawk_API?: TawkAPI;
    Tawk_LoadStart?: Date;
    __TAWK_INITIALIZED__?: boolean;
  }
}

export {};
