import React from "react";
import MeteoriteLanding from "../MeteoriteLanding/MeteoriteLanding";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
import { Table } from "react-bootstrap";

const mapStateToProps = state => ({
  data: state.fetchDataReducer.data,
  isPending: state.fetchDataReducer.isPending,
  error: state.fetchDataReducer.error,
  searchTerm: state.searchDataReducer.searchTerm
});
const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

class List extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { isPending, error, data, searchTerm } = this.props;
    const filtered = data.filter(landing => landing.name.includes(searchTerm));

    return isPending ? (
      <h1>Pending</h1>
    ) : error ? (
      <h1>There was some error please refresh the page</h1>
    ) : (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Id</th>
            <th>Name Type</th>
            <th>Rec Class</th>
            <th>Mass (g)</th>
            <th>Fall</th>
            <th>Year</th>
            <th>Latttude</th>
            <th>Longitue</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(landing => (
            <MeteoriteLanding key={landing.id} info={landing} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
