import React from 'react';

/**
 *
 * if nested parallel found someone route, in not found using default.tsx
 * ex
 * /auth/sign-in (auth/default, auth/action/default)
 */
export default function Default() {
  return <div>auth/default</div>;
}
