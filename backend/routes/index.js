import express from 'express';

import productRoutes from './product.route.js';
import customerRoutes from './customer.route';

const apiRouter = express.Router();
const apiRouterCustomer = express.Router();

// Path: routes/users.routes.js
apiRouter.use('/product', productRoutes);
apiRouterCustomer.use('/customer', customerRoutes);

export default apiRouter;