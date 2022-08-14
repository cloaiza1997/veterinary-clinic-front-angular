export type DocType = 'CE' | 'CC' | 'NIT' | 'PAS' | 'TI';

export type GenderType = 'F' | 'M';

/**
 * Tipo para el objeto de respuesta del api
 */
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
