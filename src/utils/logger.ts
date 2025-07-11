// utils/logger.ts
export const log = {
    auth: (...args: unknown[]) => console.info('[AUTH]', ...args),
    firestore: (...args: unknown[]) => console.info('[FIRESTORE]', ...args),
    router: (...args: unknown[]) => console.info('[ROUTER]', ...args),
    error: (...args: unknown[]) => console.error('[ERROR]', ...args),
    debug: (...args: unknown[]) => {
      if (process.env.NEXT_PUBLIC_DEBUG === 'true') {
        console.debug('[DEBUG]', ...args);
      }
    }
  };
  