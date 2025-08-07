# Zippty Admin Panel

A comprehensive admin panel for managing the Zippty e-commerce platform with real-time analytics, product management, order processing, and user management.

## Features

### 🔐 Authentication & Security
- Secure admin login with JWT tokens
- Role-based access control
- Protected routes and middleware
- Session management

### 📊 Dashboard Analytics
- Real-time sales statistics
- Order tracking and trends
- User growth metrics
- Product performance insights
- Revenue analytics with charts

### 🛍️ Product Management
- Add, edit, and delete products
- Bulk product operations
- Image upload with Cloudinary
- Stock management
- Category organization
- Search and filtering

### 📦 Order Management
- View all orders with pagination
- Update order status
- Order details and tracking
- Payment status management
- Customer information

### 👥 User Management
- View all registered users
- User statistics and analytics
- Block/unblock users
- User order history
- Customer insights

### 📈 Advanced Analytics
- Sales trends and forecasting
- Customer behavior analysis
- Product performance metrics
- Revenue reporting
- Interactive charts and graphs

## Backend API Endpoints

### Admin Authentication
- `POST /api/admin/login` - Admin login
- `GET /api/admin/profile` - Get admin profile
- `PUT /api/admin/profile` - Update admin profile
- `PUT /api/admin/change-password` - Change admin password

### Dashboard
- `GET /api/admin/dashboard/stats` - Get dashboard statistics
- `GET /api/admin/dashboard/recent-orders` - Get recent orders
- `GET /api/admin/dashboard/sales-analytics` - Get sales analytics

### Product Management
- `GET /api/products` - Get all products (with search/filter)
- `POST /api/products` - Add new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `DELETE /api/products/bulk` - Bulk delete products
- `PATCH /api/products/:id/stock` - Update product stock
- `GET /api/products/admin/stats` - Get product statistics

### Order Management
- `GET /api/orders` - Get all orders (admin)
- `PATCH /api/orders/:orderId/status` - Update order status

### User Management
- `GET /api/admin/users` - Get all users
- `GET /api/admin/users/stats` - Get user statistics
- `GET /api/admin/users/:userId` - Get user details
- `PATCH /api/admin/users/:userId/status` - Update user status
- `DELETE /api/admin/users/:userId` - Delete user

## Setup Instructions

### Backend Setup

1. **Install Dependencies**
   ```bash
   cd zipptybackend
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the backend root with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

3. **Create Admin User**
   ```bash
   node scripts/createAdmin.js
   ```
   This creates a default admin user:
   - Email: admin@zippty.com
   - Password: admin123

4. **Start Backend Server**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd zippty-frontend
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file in the frontend root with:
   ```env
   REACT_APP_API_URL=https://zippybackend.vercel.app
   ```

3. **Start Frontend Development Server**
   ```bash
   npm start
   ```

## Usage

### Admin Login
1. Navigate to `/admin/login`
2. Use the default credentials:
   - Email: admin@zippty.com
   - Password: admin123
3. Change the password after first login

### Dashboard
- View real-time statistics
- Monitor sales and orders
- Track user growth
- Analyze product performance

### Product Management
- Add new products with images
- Edit existing products
- Manage inventory
- Bulk operations for efficiency

### Order Management
- View all customer orders
- Update order status
- Track payment status
- Manage shipping information

### User Management
- View customer profiles
- Monitor user activity
- Manage user accounts
- Analyze customer behavior

## Security Features

- JWT-based authentication
- Role-based access control
- Secure password hashing
- Protected API endpoints
- Input validation and sanitization
- Error handling and logging

## File Structure

```
zippty-frontend/src/Admin/
├── api/
│   ├── adminapi.js          # Admin API functions
│   └── productApi.js        # Product API functions
├── components/
│   └── AdminProtectedRoute.jsx  # Protected route component
├── context/
│   └── AdminAuthContext.jsx     # Admin authentication context
├── AdminLayout/
│   ├── AdminHeader.jsx
│   ├── AdminFooter.jsx
│   ├── AdminLayout.jsx
│   └── SideBar.jsx
├── AdminPage/
│   ├── AdminHome.jsx        # Dashboard
│   ├── AdminAddProduct.jsx  # Add product
│   ├── AdminAllProducts.jsx # Product management
│   ├── AdminOrderList.jsx   # Order management
│   └── AdminOrderDetails.jsx # Order details
└── Components/
    ├── Chart.jsx            # Analytics charts
    └── OrdersTable.jsx      # Orders table component
```

```
zipptybackend/
├── controllers/
│   ├── adminController.js           # Admin functionality
│   ├── userManagementController.js  # User management
│   ├── productController.js         # Product management
│   └── orderController.js           # Order management
├── middleware/
│   ├── adminMiddleware.js           # Admin authentication
│   └── authMiddleware.js            # General authentication
├── models/
│   └── Admin.js                     # Admin model
├── routes/
│   ├── adminRoutes.js               # Admin routes
│   ├── productRoutes.js             # Product routes
│   └── orderRoutes.js               # Order routes
└── scripts/
    └── createAdmin.js               # Admin user creation script
```

## API Response Format

All API responses follow a consistent format:

```json
{
  "status": true/false,
  "message": "Success/Error message",
  "data": {
    // Response data
  }
}
```

## Error Handling

- Comprehensive error handling on both frontend and backend
- User-friendly error messages
- Proper HTTP status codes
- Validation error handling
- Network error handling

## Performance Optimizations

- Pagination for large datasets
- Efficient database queries
- Image optimization with Cloudinary
- Caching strategies
- Lazy loading components

## Contributing

1. Follow the existing code structure
2. Add proper error handling
3. Include input validation
4. Write clear documentation
5. Test thoroughly before submitting

## Support

For issues or questions:
1. Check the error logs
2. Verify environment variables
3. Ensure database connectivity
4. Check API endpoint availability

## License

This project is proprietary and confidential.
