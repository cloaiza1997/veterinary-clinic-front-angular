export type ResponseType<T> = {
  formError: Array<{
    codes: string[];
    defaultMessage: string;
    field: string;
  }>;
  message: string;
  body: T | null;
  status: boolean;
};
