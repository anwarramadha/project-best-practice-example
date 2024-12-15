import HttpFactory from '../factory';
import { Slide } from '../../types/slide';
import { response } from '../../types/response';

interface SlideResponse extends response {
  data: Slide[];
}

class SlideModule extends HttpFactory {
  private url = '/api/open/banner/all?position=home-banner';

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
    const { data, pending, error, execute } = await this.call<SlideResponse>('GET', this.url);
    return { data, pending, error, execute };
  }
}

export default SlideModule;
