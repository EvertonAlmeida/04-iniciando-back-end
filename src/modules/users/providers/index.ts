import { container } from 'tsyringe';
import IHashProvide from '@modules/users/providers/models/IHashProvide';
import BCryptHashProvider from '@modules/users/providers/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvide>('HashProvide', BCryptHashProvider);
