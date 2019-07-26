import database from '../models';
import sequelize from 'sequelize';

class Service {
    constructor() {
        this.table = null;
        this.colName = null;
        this.colValue= null;
      }
  static async getAll(table) {
      this.table=table
    try {
      return await database.table.findAll();
    } catch (error) {
      throw error;
    }
  }
  static async findOne(table,colName,colValue) {
    console.log('in a service')
      this.table=table,
      this.colName=colName,
      this.colValue=colValue
      console.log(database.User);
    try {
      return await database.User.findOne({
        // where: sequelize.where(sequelize.fn('Values', sequelize.col(colName)), String(colValue))
        where: { email: String(colValue)}
      });
    } catch (error) {
      throw error;
    }
  }

  static async create(table,data) {
    this.table=table
    try {
      return await database.User.create(data);
    } catch (error) {
      throw error;
    }
  }

  static async update(table,colName,colValue, data) {
    this.table=table,
    this.colName=colName,
    this.colValue=colValue
    try {
      const ToUpdate = await this.findOneById(table,colName,colValue, data);

      if (ToUpdate) {
        await database.User.update(data, { where: { id: Number(colValue) } });

        return data;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async findOneById(table,colName,colValue) {
    this.table=table,
    this.colName=colName,
    this.colValue=colValue
    try {
      const found = await database.table.findOne({
        where: {colName: Number(colValue) }
      });

      return found;
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(table,colName,colValue) {
    this.table=table,
    this.colName=colName,
    this.colValue=colValue
    try {
        const ToUpdate = await this.findOneById(table,colName,colValue);

      if (ToUpdate) {
        const deleted = await database.table.destroy({
          where: {colName: Number(colValue) }
        });
        return deleted;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
  static async getAllByCol(table,colName,colValue) {
    this.table=table,
    this.colName=colName,
    this.colValue=colValue
    try {
      return  await database.table.findAll({ where: {colName:String(colValue)} });
      
    } catch (error) {
      throw error;
    }
  }
}

export default Service;