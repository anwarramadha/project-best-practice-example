import type { Multisite } from '../types/multisite';

/*
  * Fetch multisite config
  * @param host
  * @returns The multisite config
*/
const fetchMultisiteConfig = async (host: string): Promise<Multisite> => {
  const baseUrl = multisiteBaseUrl();
  const queryParams = query(host);
  const res = await fetch(`${baseUrl}?${queryParams}`);
  const data = await res.json();
  
  return data as Multisite;
}

/*
  * Get multisite base url. If process is server, get the config from runtime config. Otherwise, return the base url
  * @returns The multisite base url
*/
const multisiteBaseUrl = () => {
  const frontendConfigPath = '/frontend-config';
  if (process.server) {
    const config = useRuntimeConfig();
    return `${config.public.MULTISITE_CONFIG_URL}${frontendConfigPath}`;
  }
  return `/multisite-config${frontendConfigPath}`;
}

/*
  * Get query string
  * @param host
  * @returns The query string
*/
const query = (host: string) => {
  const config = useRuntimeConfig();
  const serviceId = config.public.MULTISITE_SERVICE_ID;
  let result = `url=${host}`;

  if (serviceId) {
    result += `&id=${serviceId}`;
  }

  return result
}

export default fetchMultisiteConfig;