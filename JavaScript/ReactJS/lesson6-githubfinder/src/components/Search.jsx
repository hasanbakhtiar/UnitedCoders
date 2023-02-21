import React, { Component } from 'react'

class Search extends Component {


  constructor() {
    super();
    this.state = {
      keyword: ""
    }
  }

  formSubmit = e => {
    e.preventDefault();
    this.props.searchKey(this.state.keyword)
  }
  render() {
    return (
      <>
        <form onSubmit={this.formSubmit}>
          <div className="d-flex align-items-center justify-content-center my-5">
            <div className="col-6">

              <div className="input-group mb-3">
                <input onChange={e => {
                  this.setState({
                    keyword: e.target.value
                  })
                }} type="text" className="form-control" placeholder="Enter user" />

                <button className="btn btn-outline-light" type="button" id="button-addon2">Search</button>
              </div>
            </div>

          </div>
        </form>
      </>
    )
  }
}

export default Search