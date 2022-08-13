import { URL_API } from './constants';

/**
 * Procesa una url para reemplazar los parámetros
 * @param url Url con formato url/:param1/:param2?
 * @param params Objeto con el listado de parámetros
 * @returns Url actualizada
 */
export function getUrl(
  url: string,
  params: { [key: string]: string | number | null } = {}
) {
  let _url = url;

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null) {
      _url = _url.replace(new RegExp(`:${key}\\??`, 'gi'), value.toString());
    }
  });

  _url = _url.replace(/:[a-z0-9]+\??/gi, '');

  return URL_API + _url;
}
