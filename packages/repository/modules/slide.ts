import HttpFactory from '../factory';

type ISlide =  {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

class SlideModule extends HttpFactory {
  private url = '/api/open/banner/all?position=home-banner';

  constructor(fetcher: any) {
    super(fetcher);
  }

  async getSlides(): Promise<ISlide[]> {
    return await this.call<ISlide[]>('GET', this.url);
  }
}

export default SlideModule;