import React, { Component } from "react";

class SingleCard extends Component {
  render() {
    return (
      <div className="col-12 col-sm-6 col-md-4">
        <div className="card">
          <img width={200} src={this.props.photo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.brand}</h5>
            <p className="card-text">
              {this.props.modelOne}
            </p>
            <p className="card-text">
              {this.props.modelTwo}
            </p>
         
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCard;
