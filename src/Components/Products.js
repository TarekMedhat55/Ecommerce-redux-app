import React, { Component } from 'react';
import {connect} from 'react-redux'
import Pagination from './Pagination';
import {paginationPipe} from './paginationFilter'
import {fetchProduct} from '../Actions/CreateActions'
import ProductCard from './ProductCard'
import Sidebar from './Sidebar';
import Spinner from './Spinner'
class Products extends Component {
    componentDidMount(){
        this.props.fetchProduct()
    }
    state = {
        colValue : 'col-lg-4',
        perPage: 6,
        currentPage: 1,
        pagesToShow: 3,
        gridValue: 3
    };

    changeLayout = (n) => {
        this.setState({gridValue: n});

        let realGridValue;

        if(n === 4) {
            realGridValue = 3
        } else {
            realGridValue = 4;
        }

      this.setState({
          colValue: `col-lg-${realGridValue}`
      });
    };
    onPrev = () => {
        const updatedState = {...this.state};
        updatedState.currentPage = this.state.currentPage - 1;
        this.setState(updatedState);
    };


    onNext = () => {
        this.setState({
            ...this.state,
            currentPage: this.state.currentPage + 1
        });
    };

    goPage = (n) => {
        this.setState({
            ...this.state,
            currentPage: n,
        });
    };

    render() {
        const {products} = this.props
        if(products.length === 0 || products === undefined){
            return <Spinner/>
        }else{
            return (
                <React.Fragment>
                    <div className="row mt-5">
                        <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                            <h6>Sidbar</h6>
                            </div>
                        </div>
                        <Sidebar/>
                        </div>
                        <div className="col-md-9">
                        <div className="card">
                            <div className="card-body">
                                <h6>Products : {products.length}</h6>
                            </div>
                        </div>
                        <div className="row">
                            {paginationPipe(products, this.state).map((product,index) =>
                                    <ProductCard key={index} product={product} />
                            )}
                        </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center mt-5">
                        <Pagination
                            totalItemsCount={this.props.products.length}
                            currentPage={this.state.currentPage}
                            perPage={this.state.perPage}
                            pagesToShow={this.state.pagesToShow}
                            onGoPage={this.goPage}
                            onPrevPage={this.onPrev}
                            onNextPage={this.onNext}
                        />
                    </div>
                </React.Fragment>
            );
        }
        
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}
export default connect(mapStateToProps, {fetchProduct})(Products)
