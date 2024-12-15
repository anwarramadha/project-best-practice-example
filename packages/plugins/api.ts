import fetchCollegeId from '../multisite/multisite-config'
import origin from '../multisite/origin'
import type { Multisite } from '../types/multisite';
// import { useRuntimeConfig } from 'vue';

// locals
// @ts-ignore
import SlideModule from '@sutekitechid/project-best-practices-example/repository/modules/slide';

interface IApiInstance {
  slide: SlideModule;
}

// @ts-ignore
export default defineNuxtPlugin(async (nuxtApp) => {
  // @ts-ignore
  const config = useRuntimeConfig();

  // fetch college id from multisite-config
  const host = origin();
  const multisiteConfig: Multisite = await fetchCollegeId(host);

  const fetchOptions = {
    baseURL: host,
    headers: {
        'Content-Type': 'application/json',
        'api-key': "4Qe7h5NcgCu1EPDzCKIO",
        'college-id': multisiteConfig.college_id
    }
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    slide: new SlideModule(fetchOptions),
  };

  return {
    provide: {
      api: modules
    }
  };
});