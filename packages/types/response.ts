export type response = {
  pending: boolean;
  error: any;
  execute: () => Promise<void>;
};