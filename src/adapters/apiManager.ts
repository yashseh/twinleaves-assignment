import axios from 'axios';
import {ICustomizedErrorResponse, IPostRequestParams} from './types';
import {STRINGS} from '../utils/strings';

//post request api base class
export const postApiCall = async (params: IPostRequestParams) => {
  let url = params.url;
  let headers = params.headers ?? {};
  let config = {headers};
  let data = params.data;
  try {
    const response = await axios.post(url, data, config);
    return Promise.resolve(response.data);
  } catch (error) {
    const customizedError = error as ICustomizedErrorResponse;
    return Promise.reject({
      statusCode: customizedError?.status,
      message:
        customizedError?.message ??
        customizedError?.error ??
        STRINGS.server_error_msg,
    });
  }
};
