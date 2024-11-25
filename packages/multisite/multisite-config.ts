import type { Multisite } from '../types/multisite';

const fetchMultisiteConfig = async (host: string): Promise<Multisite> => {
  const baseUrl = multisiteBaseUrl();
  const queryParams = query(host);
  const res = await fetch(`${baseUrl}?${queryParams}`);
  const data = await res.json();
  
  return data as Multisite;
}

const multisiteBaseUrl = () => {
  const frontendConfigPath = '/frontend-config';
  if (process.server) {
    const config = useRuntimeConfig();
    return `${config.public.MULTISITE_CONFIG_URL}${frontendConfigPath}`;
  }
  return `/multisite-config${frontendConfigPath}`;
}

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