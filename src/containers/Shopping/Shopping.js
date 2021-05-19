import React from "react";
import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";

const prices = {
  product1: 59,
  product2: 69,
  product3: 79,
  product4: 89,
};
class Shopping extends React.Component {
  state = {
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0,
    },
    totalPrice: 0,
    showOrder: false,
  };

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
    console.log('yes')
  };

  render() {
    return (
      <Wrapper>
        <Modal show={this.state.showOrder} modalClose={this.modalClose}>
          <Order products={this.state.products} total={this.state.totalPrice} continue={this.continueHandler} cancel={this.modalClose} />
        </Modal>
        <Controls
          productAdd={this.addProductHandler}
          totalPrice={this.state.totalPrice}
          productSub={this.removeProductHandler}
          displayModal={this.displayModal}
        />
      </Wrapper>
    );
  }
}

export default Shopping;
