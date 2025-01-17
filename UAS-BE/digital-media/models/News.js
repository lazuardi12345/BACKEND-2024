
const { Sequelize, DataTypes } = require('sequelize');

require('dotenv').config(); 


const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql',
    logging: console.log,  
    define: {
        freezeTableName: true,  
    },
    dialectOptions: {}
});


sequelize.authenticate()
    .then(() => console.log('Database connection established successfully.'))
    .catch((error) => console.error('Unable to connect to the database:', error));


const News = sequelize.define('News', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true  
        }
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true  
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    url: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true  
        },
        allowNull: true
    },
    url_image: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true  
        },
        allowNull: true
    },
    published_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,  
        allowNull: true
    },
    category: {
        type: DataTypes.ENUM('sport', 'finance', 'automotive'),
        allowNull: false,
        validate: {
            isIn: [['sport', 'finance', 'automotive']]  
        }
    }
}, {
    timestamps: true,  
    createdAt: 'created_at',  
    updatedAt: 'updated_at',  
    underscored: true,  
    tableName: 'news', 
});

sequelize.sync()
    .then(() => console.log('News table created successfully.'))
    .catch(error => console.error('Error creating table:', error));


module.exports = News;
