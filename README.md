# Zippty Admin Panel

A comprehensive admin panel for managing the Zippty e-commerce platform with authentication, dashboard analytics, product management, order management, and user management.

## Features

### 🔐 Authentication
- Secure admin login/logout system
- JWT-based authentication
- Protected admin routes
- Session management with localStorage

### 📊 Dashboard
- Real-time statistics (orders, revenue, products, users)
- Sales analytics with charts
- Recent orders overview
- Percentage change indicators

### 📦 Product Management
- View all products with pagination
- Add new products
- Edit existing products
- Delete products
- Bulk operations
- Stock management
- Product statistics

### 📋 Order Management
- View all orders with pagination
- Update order status (pending, processing, shipped, delivered, cancelled)
- Bulk status updates
- Order details view
- Customer information

### 👥 User Management
- View all users with pagination
- User details and statistics
- Block/unblock users
- Delete users
- User analytics

## Backend API Endpoints

### Authentication
- `POST /api/admin/login` - Admin login
- `GET /api/admin/profile` - Get admin profile
- `PUT /api/admin/profile` - Update admin profile
- `PUT /api/admin/change-password` - Change admin password

### Dashboard
- `GET /api/admin/dashboard/stats` - Get dashboard statistics
- `GET /api/admin/dashboard/recent-orders` - Get recent orders
- `GET /api/admin/dashboard/sales-analytics` - Get sales analytics

### Products
- `GET /api/products` - Get all products (with admin filters)
- `POST /api/products` - Add new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `DELETE /api/products/bulk-delete` - Bulk delete products
- `PATCH /api/products/:id/stock` - Update product stock
- `GET /api/products/admin/stats` - Get product statistics

### Orders
- `GET /api/orders` - Get all orders (admin view)
- `PATCH /api/orders/:id/status` - Update order status

### Users
- `GET /api/admin/users` - Get all users
- `GET /api/admin/users/:id` - Get user details
- `PATCH /api/admin/users/:id/status` - Update user status
- `DELETE /api/admin/users/:id` - Delete user
- `GET /api/admin/users/stats` - Get user statistics

## Setup Instructions

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd zipptybackend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the backend directory with:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=7070
   ```

4. **Create initial admin user:**
   ```bash
   node scripts/createAdmin.js
   ```
   This creates a default admin with:
   - Email: `admin@zippty.com`
   - Password: `admin123`

5. **Start the backend server:**
   ```bash
   npm start
   ```

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd zippty-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the frontend directory with:
   ```env
   REACT_APP_API_URL=http://localhost:7070
   ```

4. **Start the frontend development server:**
   ```bash
   npm start
   ```

## Usage

### Accessing the Admin Panel

1. Open your browser and navigate to `http://localhost:3000/admin/login`
2. Login with the default credentials:
   - Email: `admin@zippty.com`
   - Password: `admin123`
3. You'll be redirected to the admin dashboard

### Admin Panel Navigation

- **Dashboard** (`/admin/dashboard`) - Overview and analytics
- **All Products** (`/admin/all-products`) - Product management
- **Order List** (`/admin/order-list`) - Order management
- **Add Product** (`/admin/add-product`) - Add new products

### Security Features

- **Protected Routes**: All admin pages require authentication
- **JWT Tokens**: Secure token-based authentication
- **Role-based Access**: Only admin users can access admin features
- **Session Management**: Automatic token validation and refresh
- **Secure Logout**: Proper token cleanup on logout

## File Structure

```
zippty-frontend/src/Admin/
├── AdminLayout/           # Admin layout components
├── AdminPage/            # Admin page components
├── api/                  # API functions
├── components/           # Reusable admin components
├── context/              # Admin authentication context
└── AdminLogin.jsx        # Admin login page

zipptybackend/
├── controllers/          # Backend controllers
├── middleware/           # Authentication middleware
├── models/              # Database models
├── routes/              # API routes
└── scripts/             # Utility scripts
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

- Frontend displays user-friendly error messages
- Backend provides detailed error responses
- Network errors are handled gracefully
- Loading states for better UX

## Performance Optimizations

- Pagination for large datasets
- Efficient database queries
- Optimized API calls
- Caching strategies
- Lazy loading where appropriate

## Contributing

1. Follow the existing code structure
2. Use proper error handling
3. Add appropriate loading states
4. Test API integrations
5. Update documentation as needed

## Support

For issues or questions:
1. Check the console for error messages
2. Verify API endpoints are working
3. Ensure environment variables are set correctly
4. Check database connectivity

---

**Note**: Remember to change the default admin password after first login for security purposes.
