import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="list-group mt-4">
                    <a href="#!" className="list-group-item list-group-item-action active">
                        Cras justo odio
                    </a>
                    <a href="#!" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                    <a href="#!" className="list-group-item list-group-item-action">Morbi leo risus</a>
                    <a href="#!" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                    <a href="#!" className="list-group-item list-group-item-action ">Vestibulum at eros</a>
                </div>
            </React.Fragment>
        );
    }
}

export default Sidebar;