import type { ConfigFile } from '@rtk-query/codegen-openapi';

const config: ConfigFile = {
  schemaFile: 'openapi.json',
  apiFile: '@features/api/apiSlice.ts',
  outputFiles: {
    './src/features/user/userApiSlice.ts': {
      filterEndpoints: [/user/i],
    },
    './src/features/order/orderApiSlice.ts': {
      filterEndpoints: [/order/i],
    },
    './src/features/pet/petApiSlice.ts': {
      filterEndpoints: [/pet/i],
    },
  },
  tag: true,
  hooks: true,
};

export default config;
