import { container } from 'tsyringe';
import mailConfig from '@config/mail';

import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

import EtherealMailProvide from '@shared/container/providers//MailProvider/implementations/EtherealMailProvide';
import SESMailProvider from '@shared/container/providers//MailProvider/implementations/SESMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvide),
  ses: container.resolve(SESMailProvider),
};

container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
