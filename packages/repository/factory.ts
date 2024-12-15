import { response } from "../types/response";

class HttpFactory {
  protected options = {};

  constructor(options = {}) {
    this.options = options;
  }

  /** 
    * Call an API
    * If the request is made on the server, it will be executed immediately
    * If the request is made on the client, it will be executed when the `execute` function is called
    * to prevent duplicate requests
    * @param method The HTTP method
    * @param url The API URL
    * @param data The request body
    * @param extras Extra options
    * @returns The response
  **/
  async call<T>(method: string, url: string, data?: object, extras = {}): Promise<T & response> {
    // @ts-ignore
    return useFetch(url, {
      method,
      data,
      ...this.options,
      ...extras,
      immediate: process.client ? false : true,
      lazy: process.client ? true : false
    });
  }
}

export default HttpFactory;