import { ExperienceModule } from './experience.module';

describe('ExperienceModule', () => {
  let experienceModule: ExperienceModule;

  beforeEach(() => {
    experienceModule = new ExperienceModule();
  });

  it('should create an instance', () => {
    expect(experienceModule).toBeTruthy();
  });
});
