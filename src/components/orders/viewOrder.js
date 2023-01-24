import React from "react";
import axios from "axios";
import DisplayOrder from "./displayOrder";
import Header from "../HeaderFooter/header";

const orderApi =
  "https://healthkart-render-api-production.up.railway.app/updateOrder";
const orderWRTemailApi =
  "https://healthkart-render-api-production.up.railway.app/orders";
// const orderApi = "http://localhost:8700/orders";

class ViewOrders extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: "",
    };
  }

  render() {
    return (
      <>
        <Header />
        <DisplayOrder orderData={this.state.orders} />
      </>
    );
  }

  componentDidMount() {
    let sessionData = sessionStorage.getItem("userData")
      ? sessionStorage.getItem("userData").split(",")
      : [];

    if (this.props.location) {
      let query = this.props.location.search.split("&");
      if (query) {
        let sdata = {
          status: query[0].split("=")[1].split("_")[1],
          date: query[2].split("=")[1].split("%")[0],
          bank_name: query[3].split("=")[1].split("%")[0],
        };
        console.log(sdata);
        let id = query[1].split("=")[1].split("_")[1];
        // fetch(`${orderApi}?order_id=${id}`, { method: "GET" })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(sdata);
        //   });
        fetch(`${orderApi}/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sdata),
        });
      }
    }

    axios.get(`${orderWRTemailApi}?email=${sessionData[1]}`).then((res) => {
      console.log(res.data, "this is data from order api");
      this.setState({ orders: res.data });
    });
  }
}

export default ViewOrders;
