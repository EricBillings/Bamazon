module.exports = function (sequelize, DataTypes) {
    var product = sequelize.define("Product", {

        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
      
        department_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    
        stock_quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "classicEspresso"
        }
    });


return product;
  };
