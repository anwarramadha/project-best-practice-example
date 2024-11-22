// 3rd's
import { $fetch, FetchOptions } from 'ofetch';
// import { useRuntimeConfig } from 'vue';

// locals
import SlideModule from '@sutekitechid/project-best-practices-example/repository/modules/slide';

interface IApiInstance {
  slide: SlideModule;
}

console.log('SlideModule', process);

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  console.log('API KEY', config);

  const fetchOptions: FetchOptions = {
    headers: {
        'Content-Type': 'application/json',
        'api-key': "4Qe7h5NcgCu1EPDzCKIO"
    }
  };

  // Create a new instance of $fecther with custom option
  const apiFecther = $fetch.create(fetchOptions);

  // An object containing all repositories we need to expose
  const modules: IApiInstance = {
    slide: new SlideModule(apiFecther),
  };

  return {
    provide: {
      api: modules
    }
  };
});