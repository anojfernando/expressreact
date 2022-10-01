import AppError from '../utils/appError.js';
import db from '../utils/dbConnect.js';

//--------------------------------------Add customer info--------------------------------------------------
export const saveCustomer = async (data) => {
    const sqlInsert = "INSERT INTO customer (customer_id, mobile_number, customer_name, cashier_id)  VALUES (?,?,?,?)";
    const { customer_id, mobile_number, product_name, customer_name, cashier_id } = data;
    const result = await db.query(sqlInsert, [customer_id, mobile_number, product_name, customer_name, cashier_id]);
    return Promise.resolve(result).catch((err) => {
        throw new AppError(err.message, 500);
    }
    );
}

//-------------------------------------Get by mobile number------------------------------------------------
export const getCustomerByMobile = async (id) => {
    const sqlSelect = "SELECT * FROM customer WHERE mobile_number = ?";
    const res = await db.query(sqlSelect, [id])
    return Promise.resolve(res[0]).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}

//-----------------------------------Update loyalty points-------------------------------------------------
export const updateLoyaltyPoints = async (id) => {
    const sqlDelete = "UPDATE customer SET loyalty_points = ? WHERE mobile_number = ?";
    const res = await db.query(sqlDelete, ['deactive', id])
    return Promise.resolve(res).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}

//---------------------------Delete customer by updating status-------------------------------------------
export const deleteCustomer = async (id) => {
    const sqlDelete = "UPDATE customer SET status = ? WHERE mobile_number = ?";
    const res = await db.query(sqlDelete, ['deactive', id])
    return Promise.resolve(res).catch((err) => {
        throw new AppError("Internal Failure", 500);
    });
}
