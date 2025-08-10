# Keyboard Shortcuts Blocking Enhancement

## Overview
This document outlines the enhancements made to block keyboard shortcuts, specifically Ctrl+U and Ctrl+Shift+I, which are commonly used to view page source and open developer tools.

## Implemented Enhancements

### 1. Case-Insensitive Key Matching
- Added `.toLowerCase()` to key comparisons to ensure shortcuts are blocked regardless of letter case
- This handles situations where Caps Lock is enabled or different keyboard layouts are used

### 2. Event Propagation Blocking
- Added `e.stopPropagation()` to prevent the event from bubbling up to other handlers
- This ensures that even if there are other event listeners, they won't receive the blocked shortcuts

### 3. Capture Phase Event Listening
- Added event listeners in the capture phase with `document.addEventListener('keydown', handleKeyDown, true)`
- This intercepts the events earlier in the DOM event flow, before they reach the target element
- Provides an additional layer of security by catching events at the earliest possible stage

## Targeted Shortcuts
The following shortcuts are specifically blocked:
- `Ctrl+U` - View page source
- `Ctrl+Shift+I` - Open developer tools

## Testing
The implementation has been tested to ensure that:
- Shortcuts are blocked in both lowercase and uppercase
- Events are completely stopped and don't trigger any browser actions
- Capture phase interception works correctly

## Maintenance Notes
When updating the application, be aware that:
- These security measures are implemented in `SecurityRestrictions.tsx` component
- Multiple event listeners are used for different phases of event propagation
- All listeners are properly cleaned up in the useEffect return function