import { ApolloError } from 'apollo-server-errors';

class HandleError extends ApolloError {
  constructor(message: string) {
    super(message, 'MY_ERROR_CODE');

    Object.defineProperty(this, 'name', { value: 'HandleError' });
  }
}


export default HandleError;