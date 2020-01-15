import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Badge } from "reactstrap";
import * as bookActions from "../../redux/actions/bookActions";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = category => {
    this.props.actions.changeCategory(category);
    this.props.actions.getBooks(category.id);
  };

  render() {
    return (
      <div>
        <h3>
          <Badge style={{ borderBottom: "3px solid" }} color="light">
            Kategoriler
          </Badge>

        </h3>
       
        <ListGroup>
          {this.props.categories.map(category => (
            <ListGroupItem
              active={category.id === this.props.currentCategory.id}
              onClick={() => this.selectCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getBooks: bindActionCreators(bookActions.getBooks, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
