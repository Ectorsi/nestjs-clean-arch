import userDataBuilder from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';
import { faker } from '@faker-js/faker';

describe('userEntity unit tests', () => {
  let userEntityProps: UserProps;
  let userEntity: UserEntity;

  beforeEach(() => {
    userEntityProps = userDataBuilder();
    userEntity = new UserEntity(userEntityProps);
  });

  it('Should have valid props', () => {
    expect(userEntity.props.name).toBe(userEntityProps.name);
    expect(userEntity.props.email).toBe(userEntityProps.email);
    expect(userEntity.props.password).toBe(userEntityProps.password);
    expect(userEntity.props.createdAt).toBeInstanceOf(Date);
  });
});
