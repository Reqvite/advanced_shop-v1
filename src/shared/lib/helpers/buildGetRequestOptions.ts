import {ApiPathEnum} from '@/shared/enums/apiPath.enum';
import {RequestOptions} from '@/shared/types/requestOptions';
import {encodeSearchParams} from './searchParams';

export const buildGetRequestOptions = <T>({
  apiPath,
  params,
  path = '',
  needAuth
}: {
  apiPath: ApiPathEnum;
  params: T;
  path?: string;
  needAuth?: boolean;
}): RequestOptions => {
  if (!params) {
    return {url: `${apiPath}${path}`, needAuth};
  }

  return {
    url: `${apiPath}${path}`,
    params: encodeSearchParams(params),
    needAuth
  };
};
