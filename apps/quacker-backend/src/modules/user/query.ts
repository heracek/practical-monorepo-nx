export const users = async (_, __, { dbConnection }) => {
  const users = await dbConnection.query('SELECT * FROM user');
  return users;
};

export const user = async (_, { userName }, { dbConnection }) => {
  const user = (
    await dbConnection.query(`SELECT * FROM user WHERE userName = ?`, [
      userName,
    ])
  )[0];
  if (!user) {
    return null;
  }
  return user;
};
