import { URL_API } from './constants';

type GetUrlParamType = {
  url: string;
  params: { [key: string]: string | number | null | undefined };
};

/**
 * Procesa una url para reemplazar los parámetros
 * @param url Url con formato url/:param1/:param2?
 * @param params Objeto con el listado de parámetros
 * @returns Url actualizada
 */
export function getApiUrl(
  url: GetUrlParamType['url'],
  params: GetUrlParamType['params'] = {}
) {
  const _url = getUrl(url, params);

  return URL_API + _url;
}

export function getUrl(
  url: GetUrlParamType['url'],
  params: GetUrlParamType['params'] = {}
) {
  let _url = url;

  Object.entries(params).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      _url = _url.replace(new RegExp(`:${key}\\??`, 'gi'), value.toString());
    }
  });

  _url = _url.replace(/:[a-z0-9]+\??/gi, '');

  return _url;
}
