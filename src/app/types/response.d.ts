export type ResponseType<T> = {
  status: boolean;
  message: string;
  /**
   * Objeto que contiene los elementos de una respuesta exitosa
   */
  body: T | null;
  /**
   * Listado de errores de validación de datos de un formulario
   */
  formError: Array<{
    codes: string[];
    defaultMessage: string;
    field: string;
  }>;
  /**
   * Error no controlado del api
   */
  error?: string;
};
