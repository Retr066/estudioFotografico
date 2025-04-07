'use client';

import { ReactNode, useEffect } from 'react';

export default function ClientBoostrapProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, []);

  return <>{children}</>;
}
