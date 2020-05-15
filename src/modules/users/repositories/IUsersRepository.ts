import User from '@modules/users/infra/typeorm/entities/User';
import ICreateUSerDTO from '@modules/users/dtos/ICreateUserDTO';
import IFindAllProvidersDTO from '@modules/users/dtos/IFindAllProvidersDTO';

export default interface IUsersRepository {
  findAllProviders(date: IFindAllProvidersDTO): Promise<User[]>;
  findById(id: string): Promise<User | undefined>;
  findByEmail(id: string): Promise<User | undefined>;
  create(data: ICreateUSerDTO): Promise<User>;
  save(user: User): Promise<User>;
}
