import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import Loader from "../../components/UI/Loader/Loader";

const prices = {
  product1: 59,
  product2: 69,
  product3: 79,
  product4: 89,
};
class Shopping extends React.Component {
  state = {
    products: null,
    totalPrice: 0,
    showOrder: false,
    loading: false,
  };
  componentDidMount() {
    axios
      .get(
        "https://react-redux-main-ca2f8-default-rtdb.firebaseio.com/products.json"
      )
      .then((res) => this.setState({ products: res.data }));
  }
  addProductHandler = (type) => {
    // calculate count:
    const prevCount = this.state.products[type];
    const updatedCount = prevCount + 1;
    const updatedProducts = { ...this.state.products };
    updatedProducts[type] = updatedCount;
    // calculate price:
    const priceAdd = prices[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice + priceAdd;
    this.setState({ totalPrice: newPrice, products: updatedProducts });
  };

  removeProductHandler = (type) => {
    const prevCount = this.state.products[type];
    const updatedCount = prevCount - 1;
    const updatedProducts = { ...this.state.products };
    updatedProducts[type] = updatedCount;

    const priceSub = prices[type];
    const prevPrice = this.state.totalPrice;
    const newPrice = prevPrice - priceSub;
    this.setState({ totalPrice: newPrice, products: updatedProducts });
  };

  displayModal = () => {
    this.setState({
      showOrder: true,
    });
  };

  modalClose = () => {
    this.setState({
      showOrder: false,
    });
  };

  continueHandler = () => {
    this.props.history.push('/checkout')
    this.setState({ loading: true });
    const order = {
      products: this.state.products,
      totalPrice: this.state.totalPrice,
      customer: {
        name: "Ehsan",
        email: "ehsan@gmail.com",
      },
    };
    axios
      .post("/orders.json", order)
      .then(this.setState({ loading: false, showOrder: false }))
      .catch(this.setState({ loading: false, showOrder: false }));
  };

  render() {
    let order = null
    
    if (this.state.loading) {
      order = <Loader />;
    }
    let controls = <Loader />;
    if (this.state.products) {
      controls = (
        <Controls
          productAdd={this.addProductHandler}
          totalPrice={this.state.totalPrice}
          productSub={this.removeProductHandler}
          displayModal={this.displayModal}
        />
      );
      order = (
        <Order
          products={this.state.products}
          total={this.state.totalPrice}
          continue={this.continueHandler}
          cancel={this.modalClose}
        />
      );
    }
    return (
      <Wrapper>
        <Modal show={this.state.showOrder} modalClose={this.modalClose}>
          {order}
        </Modal>
        {controls}
      </Wrapper>
    );
  }
}

export default Shopping;
