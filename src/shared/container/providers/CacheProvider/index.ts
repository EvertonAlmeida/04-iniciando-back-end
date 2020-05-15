import { container } from 'tsyringe';

import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import RedisCaheProvider from '@shared/container/providers/CacheProvider/implementations/RedisCaheProvider';

const providers = {
  redis: RedisCaheProvider,
};

container.registerSingleton<ICacheProvider>('CacheProvider', providers.redis);
