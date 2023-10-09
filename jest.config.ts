import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  //react-bootstrap-tagsinput은 transfile을 해줘!
  transformIgnorePatterns: ['/node_modules/(?!(react-bootstrap-tagsinput))'],
};

export default config;