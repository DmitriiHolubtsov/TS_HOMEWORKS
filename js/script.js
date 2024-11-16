"use strict";
// Enum for Order Status
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pending";
    OrderStatus["Processing"] = "Processing";
    OrderStatus["Shipped"] = "Shipped";
    OrderStatus["Delivered"] = "Delivered";
    OrderStatus["Canceled"] = "Canceled";
})(OrderStatus || (OrderStatus = {}));
// Enum for Payment Type
var PaymentType;
(function (PaymentType) {
    PaymentType["CreditCard"] = "CreditCard";
    PaymentType["PayPal"] = "PayPal";
    PaymentType["BankTransfer"] = "BankTransfer";
    PaymentType["CashOnDelivery"] = "CashOnDelivery";
})(PaymentType || (PaymentType = {}));
// Sample orders for testing
const orders = [
    { id: '101', amount: 250, status: OrderStatus.Pending, paymentType: PaymentType.CreditCard },
    { id: '102', amount: 100, status: OrderStatus.Processing, paymentType: PaymentType.PayPal },
    { id: '103', amount: 150, status: OrderStatus.Shipped, paymentType: PaymentType.BankTransfer },
    { id: '104', amount: 75, status: OrderStatus.Delivered, paymentType: PaymentType.CashOnDelivery },
    { id: '105', amount: 200, status: OrderStatus.Canceled, paymentType: PaymentType.CreditCard },
];
// Function to update order status using an arrow function
const updateOrderStatus = (order, status) => {
    order.status = status;
    console.log(`Order ${order.id} status updated to ${status}.`);
};
// Function to get orders by status using an arrow function
const getOrdersByStatus = (orders, status) => orders.filter(order => order.status === status);
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
