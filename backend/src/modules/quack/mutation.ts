export const addQuack = async (_, { userId, text }, { dbConnection }) => {
  const createdAt = new Date().toISOString();
  const dbResponse = await dbConnection.query(
    `INSERT INTO quack (id, createdAt, userId, text) 
    VALUES (NULL, ?, ?, ?);`,
    [createdAt, userId, text],
  );

  const quack = (
    await dbConnection.query(`SELECT * FROM quack WHERE id = ?`, [
      dbResponse.insertId,
    ])
  )[0];

  return quack;
};
