/**
 * XIAOZHI Plugins for OpenCode
 *
 * This module exports all XIAOZHI plugins for OpenCode integration.
 * Plugins provide hook-based automation that mirrors Claude Code's hook system
 * while taking advantage of OpenCode's more sophisticated 20+ event types.
 */

export { XiaozhiHooksPlugin, default } from "./xiaozhi-hooks.js"

// Re-export for named imports
export * from "./xiaozhi-hooks.js"
