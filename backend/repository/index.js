import {
    saveProduct,
    getProducts,
    getProductsById,
    // getProductsByName,
    updateProduct,
    deleteProduct
} from './product.repository.js';

export {
    saveProduct,
    getProducts,
    getProductsById,
    // getProductsByName,
    updateProduct,
    deleteProduct
}

//customer : start
import {
    saveCustomer,
    getCustomerByMobile,
    updateLoyaltyPoints,
    deleteCustomer
} from './customer.repository';

export {
    saveCustomer,
    getCustomerByMobile,
    updateLoyaltyPoints,
    deleteCustomer
}
//customer : end

