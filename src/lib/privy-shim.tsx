/* eslint-disable react-refresh/only-export-components */
import React from 'react';

export const PrivyProvider = ({ children, ..._props }: any) => {
  // Shimbed PrivyProvider: no-op wrapper for preview/build environments.
  // Keeps the same API surface so routes render and build is lightweight.
  return <>{children}</>;
};

export const usePrivy = () => {
  return {
    login: () => {
      console.warn('Privy shim: login called');
    },
    logout: () => {
      console.warn('Privy shim: logout called');
    },
    authenticated: false,
    user: null,
  } as const;
};

export default PrivyProvider;