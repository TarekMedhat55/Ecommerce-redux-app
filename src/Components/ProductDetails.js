import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchProductData} from '../Actions/CreateActions'
class ProductDetails extends Component {
    componentDidMount(){
        this.props.fetchProductData(this.props.match.params.id)
    }
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        product: state.products.product
    }
}
export default connect(mapStateToProps, {fetchProductData})(ProductDetails)
