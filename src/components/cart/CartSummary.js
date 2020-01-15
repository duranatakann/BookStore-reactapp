import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Badge
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import {Link} from "react-router-dom"
import alertify from "alertifyjs"
import { FaShoppingCart } from "react-icons/fa";

class CartSummary extends Component {
  removeFromCart(book) {
    this.props.actions.removeFromCart(book);
    alertify.error(`${book.bookName} sepetten silindi`)
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink><FaShoppingCart/>Sepetiniz Boş</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown >
        <DropdownToggle nav caret>
         Sepeti Listele
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map(cartItem => (
            <DropdownItem key={cartItem.book.id} toggle={false}>
              <Badge style={{marginRight:"20px"}} color="danger" onClick={()=>this.removeFromCart(cartItem.book)}>-</Badge>
               <Badge color="success">{cartItem.quantity} Adet</Badge>
               <text style={{fontWeight:"bolder"}}>{cartItem.book.bookName} </text> 
             
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <Link to={"/cart"}><DropdownItem><FaShoppingCart/>Sepete git</DropdownItem></Link>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
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
)(CartSummary);
