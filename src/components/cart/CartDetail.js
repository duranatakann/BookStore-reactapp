import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs"
import Navi from "../navi/Navi";
class CartDetail extends Component {
  removeFromCart(book) {
    this.props.actions.removeFromCart(book);
    alertify.error(book.bookName + " sepetten silindi")
  }
  render() {
    return (
      <div>
         <Navi />
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Kitap İsmi</th>
              <th>Fiyatı</th>
              <th>Adet</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map(cartItem => (
              <tr key={cartItem.book.id}>
                <th scope="row">{cartItem.book.id}</th>
                <td>{cartItem.book.bookName}</td>
                <td>{cartItem.book.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.book)}
                  >
                    sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
    }
  };
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartDetail);
