// Enum for Order Status
enum OrderStatus {
  Pending = 'Pending',
  Processing = 'Processing',
  Shipped = 'Shipped',
  Delivered = 'Delivered',
  Canceled = 'Canceled',
}

// Enum for Payment Type
enum PaymentType {
  CreditCard = 'CreditCard',
  PayPal = 'PayPal',
  BankTransfer = 'BankTransfer',
  CashOnDelivery = 'CashOnDelivery',
}

// Order interface
interface Order {
  id: string;
  amount: number;
  status: OrderStatus;
  paymentType: PaymentType;
}

// Sample orders for testing
const orders: Order[] = [
  { id: '101', amount: 250, status: OrderStatus.Pending, paymentType: PaymentType.CreditCard },
  { id: '102', amount: 100, status: OrderStatus.Processing, paymentType: PaymentType.PayPal },
  { id: '103', amount: 150, status: OrderStatus.Shipped, paymentType: PaymentType.BankTransfer },
  { id: '104', amount: 75, status: OrderStatus.Delivered, paymentType: PaymentType.CashOnDelivery },
  { id: '105', amount: 200, status: OrderStatus.Canceled, paymentType: PaymentType.CreditCard },
];

// Function to update order status using an arrow function
const updateOrderStatus = (order: Order, status: OrderStatus): void => {
  order.status = status;
  console.log(`Order ${order.id} status updated to ${status}.`);
}

// Function to get orders by status using an arrow function
const getOrdersByStatus = (orders: Order[], status: OrderStatus): Order[] => 
  orders.filter(order => order.status === status);

// Example usage
console.log('Initial Orders:', orders);

// Updating order status
updateOrderStatus(orders[0], OrderStatus.Processing);

// Displaying updated orders
console.log('Updated Orders:', orders);

// Get orders with specific status
const pendingOrders = getOrdersByStatus(orders, OrderStatus.Pending);
console.log('Pending Orders:', pendingOrders);

const shippedOrders = getOrdersByStatus(orders, OrderStatus.Shipped);
console.log('Shipped Orders:', shippedOrders);