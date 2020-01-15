import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as bookActions from "../../redux/actions/bookActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table } from "reactstrap";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
class BookList extends Component {
  componentDidMount() {
  }
  addToCart = book => {
    this.props.actions.addToCart({ quantity: 1, book });
    alertify.success(`${book.bookName} sepete eklendi`);
  };
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>
          <Badge color="dark">Kitap Listesi</Badge>
          <Badge>{this.props.currentCategory.categoryName}</Badge>
        </h3>
        <Link className="textAddBook" to="/savebook">
          <Button
            style={{ marginTop: "10px", padding: "2px" }}
            className="btn-sm btn-success float-right"
          >
            <text style={{ fontSize: "13px", fontWeight: "bolder" }}>
              <FaPlus style={{ paddingBottom: "4px" }} />
              Kitap Ekle
            </text>
          </Button>
        </Link>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Kitap İsmi</th>
              <th>Fiyatı</th>
              <th>Yazar</th>
              <th>Kalan Stok</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.books.map(book => (
              <tr key={book.id}>
                <th scope="row">{book.id}</th>
                <td>
                  <Badge color="warning">
                    <Link to={"/savebook/" + book.id}>
                      {book.bookName}
                    </Link>
                  </Badge>
                </td>
                <td>{book.unitPrice}</td>
                <td>{book.AuthorName}</td>
                <td>{book.unitsInStock}</td>
                <td>
                  <Button
                    className="btn-sm"
                    style={{ width: "max-content" }}
                    color="secondary"
                    onClick={() => this.addToCart(book)}
                  >
                    Ekle <FaShoppingCart />
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

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    books: state.bookListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getBooks: bindActionCreators(bookActions.getBooks, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
