import React, { Component } from 'react'
import {Row,Col} from "reactstrap"
import CategoryList from "../categories/CategoryList"
import BookList from "../books/BookList"
import Navi from "../navi/Navi";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
              <Navi />
                <Row>
                <Col xs="3">
                    <CategoryList/>
                </Col>
                <Col xs="9">
                    <BookList/>
                </Col>
                </Row>
            </div>
        )
    }
}
