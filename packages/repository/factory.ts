import { $Fetch } from 'ohmyfetch';

class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /** 
    * Call an API
    * @param method The HTTP method
    * @param url The API URL
    * @param data The request body
    * @param extras Extra options
    * @returns The response
  **/
  async call<T>(method: string, url: string, data?: object, extras = {}): Promise<T> {
    const $res: T = await this.$fetch(url, { method, body: data, ...extras });
    return $res;
  }
}

export default HttpFactory;