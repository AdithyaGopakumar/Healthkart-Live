import React from "react";
import "./displayOrders.css";
import Extras from "../Elements/extras";
import Advert from "../Elements/advert";

const DisplayOrder = (props) => {
  const renderTable = ({ orderData }) => {
    if (orderData) {
      return orderData.map((item) => {
        console.log(item);
        return (
          <tr key={item.order_id}>
            <td className="row-text">{item.order_id}</td>
            <td className="row-text">{item.user}</td>
            <td className="row-text">{item.email}</td>
            <td className="row-text">{item.phone}</td>
            <td className="row-text">Rs. {item.total}</td>
            <td className="row-text">{item.date}</td>
            <td className="row-text">{item.bank_name} Bank</td>
            <td className="row-text">{item.status}</td>
          </tr>
        );
      });
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="mb-5 mt-5">Your Orders</h1>
        <table className="table">
          <thead>
            <tr>
              <th className="row-text">Order ID</th>
              <th className="row-text">User Name</th>
              <th className="row-text">Email</th>
              <th className="row-text">Phone</th>
              <th className="row-text">Total</th>
              <th className="row-text">Date</th>
              <th className="row-text">Bank</th>
              <th className="row-text">Status</th>
            </tr>
          </thead>
          <tbody>{renderTable(props)}</tbody>
        </table>
      </div>
      {/* <Advert /> */}
      <Extras />
    </>
  );
};

export default DisplayOrder;
