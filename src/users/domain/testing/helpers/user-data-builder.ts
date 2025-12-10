import { faker } from '@faker-js/faker';
import { UserProps } from '../../entities/user.entity';

/**
 * @description Helper to generate fake user.
 * @returns An instance of user entity.
 */
export default function userDataBuilder(props?: Partial<UserProps>) {
  return {
    name: props?.name ?? faker.person.fullName(),
    email: props?.email ?? faker.internet.email(),
    password: props?.password ?? faker.internet.password(),
    createdAt: props?.createdAt ?? new Date(),
  };
}
