import { verifyToken } from '../../libs/token';

const getUser = async (auth) => {
  if (auth) {
    const token = auth.split('Bearer ')[1];
    if (token) {
      try {
        const { id } = verifyToken(token);
        return id;
      } catch (error) {
        console.log('err', error);
        throw error;
      }
    }
  }
};

export default getUser;
