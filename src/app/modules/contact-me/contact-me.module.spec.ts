import { ContactMeModule } from './contact-me.module';

describe('ContactMeModule', () => {
  let contactMeModule: ContactMeModule;

  beforeEach(() => {
    contactMeModule = new ContactMeModule();
  });

  it('should create an instance', () => {
    expect(contactMeModule).toBeTruthy();
  });
});
