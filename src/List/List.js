import React from "react";
import MeteoriteLanding from "../MeteoriteLanding/MeteoriteLanding";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";

const mapStateToProps = state => ({
  data: state.data,
  isPending: state.isPending,
  error: state.error
});
const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(fetchData())
});

class List extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    const { isPending, error, data } = this.props;
    return isPending ? (
      <h1>Pending</h1>
    ) : (
      data.map(landing => (
        <li>
          <MeteoriteLanding />
        </li>
      ))
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
