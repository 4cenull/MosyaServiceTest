// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Sequelize, DataTypes } from 'sequelize'

function Hello (req: any, res: any) {
  const connection = new Sequelize (
    "postgres",
    "postgres",
    "jui8Hu5+PG",
    {
      host: 'localhost',
      dialect: "postgres"
    }
  )

  const test_table = connection.define("test_table", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
    }
  },{
    timestamps: false,
  });
  test_table.sync();

  //ユーザー情報の取得
  test_table.findAll().then(function(value) {
    res.statusCode = 200
    res.json(value)
  });
}

export default Hello