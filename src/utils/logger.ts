// utils/logger.ts
export const log = {
    auth: (...args: any[]) => console.info('[AUTH]', ...args),
    firestore: (...args: any[]) => console.info('[FIRESTORE]', ...args),
    router: (...args: any[]) => console.info('[ROUTER]', ...args),
    error: (...args: any[]) => console.error('[ERROR]', ...args),
    debug: (...args: any[]) => {
      if (process.env.NEXT_PUBLIC_DEBUG === 'true') {
        console.debug('[DEBUG]', ...args);
      }
    }
  };
  