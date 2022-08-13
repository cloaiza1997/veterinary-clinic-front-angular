export type ResponseType<T> = {
  formError: string;
  message: string;
  body: T | null;
  status: boolean;
};
