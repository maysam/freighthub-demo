import React, { Component } from "react"
// import { graphql } from "gatsby"
import Shipment from "./shipment"
import axios from "axios"

const shipments_url = "http://localhost:3000/shipments"

class Shipments extends Component {
  state = {
    loading: false,
    page: 1,
    error: false,
    shipments: [],
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.fetchShipments()
    })
  }

  render() {
    const per_page = 2
    const { shipments, page } = this.state

    const listItems = shipments
      .slice((page - 1) * per_page, page * per_page)
      .map(shipment => (
        <div key={shipment.id}>
          <Shipment {...shipment} />
        </div>
      ))

    const shipments_count = shipments.length
    const pages = Math.ceil(shipments_count / per_page)

    const pagination =
      pages === 1 ? (
        ""
      ) : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          {Array(pages)
            .fill(1)
            .map((j, i) => (
              <div key={i} style={{ display: "flex" }}>
                {i === 0 ? "" : " , "}
                <div key={i + 1} onClick={() => this.setState({ page: i + 1 })}>
                  {i + 1}
                </div>
              </div>
            ))}
        </div>
      )

    return (
      <div style={{ textAlign: "center", width: "600px", margin: "50px auto" }}>
        <h1>{shipments.length} shipments</h1>
        <div>
          {this.state.loading ? (
            <p>Please hold, shipments are incoming!</p>
          ) : this.state.shipments ? (
            <>
              <div>
                {pagination}
                {listItems}
                {pagination}
              </div>
            </>
          ) : (
            <p>Oh noes, error fetching pupper :</p>
          )}
        </div>
      </div>
    )
  }

  fetchShipments = () => {
    axios
      .get(shipments_url)
      .then(({ data: shipments }) => {
        this.setState({
          loading: false,
          shipments,
        })
      })
      .catch(error => {
        this.setState({ loading: false, error })
      })
  }
}

export default Shipments
