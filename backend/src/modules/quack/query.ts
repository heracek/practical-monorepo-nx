export const quacks = async (_, __, { dbConnection }) => {
  const quacks = await dbConnection.query(`SELECT * FROM quack`);

  return quacks;
};
