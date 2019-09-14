import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ProductCard extends Component {
    render() {
        const {product} = this.props
        return (
            <React.Fragment>
                <div className="col-md-4 mt-4">
                    <div className="card card-products">
                    <div className="view overlay">
                        <img  src={product.images[0]} className="card-img-top mt-3" alt={product.title}/>
                        <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                        </a>
                    </div>
                    <div className="card-body">

                        <h4 className="card-title">{product.title}</h4>
                        <p className="card-text">{product.description}</p>
                        <Link to={`/products/${product.id}`} className="btn btn-primary btn-block">Show More</Link>

                    </div>

                    </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default ProductCard;