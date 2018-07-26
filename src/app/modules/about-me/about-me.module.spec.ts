import { AboutMeModule } from './about-me.module';

describe('AboutMeModule', () => {
  let aboutMeModule: AboutMeModule;

  beforeEach(() => {
    aboutMeModule = new AboutMeModule();
  });

  it('should create an instance', () => {
    expect(aboutMeModule).toBeTruthy();
  });
});
