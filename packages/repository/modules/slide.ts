import HttpFactory from '../factory';
import { Slide } from '../../types/slide';

type SlideResponse = {
  data: Slide[];
};

class SlideModule extends HttpFactory {
  private url = '/api/open/banner/all?position=home-banner';

  constructor(fetcher: any) {
    super(fetcher);
  }

  /**
   * Get slides
   * @returns The slides
   *  
   * @example
   * const slides = await api.slide.getSlides();
   * console.log(slides);
   * 
  */
  async getSlides(): Promise<SlideResponse> {
    return await this.call<SlideResponse>('GET', this.url);
  }
}

export default SlideModule;
