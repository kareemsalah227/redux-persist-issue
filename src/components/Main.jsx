// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { receivedAuthtoken } from '../app/actions/index';
import styles from './Main.styles';


type Props = {
  authToken: {
    access_token: string,
  },
  history: any,
  dispatchReceivedAuthtoken: Function,
};

type State = {
  loading: boolean,
};

class Dashboard extends Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const that = this;
    setTimeout(() => {
      console.log('dispatching');
      that.props.dispatchReceivedAuthtoken({access_token: '123-456-789-000'});
      that.setState({ loading: false });
    }, 3000);
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <div>
          <div>Loading...</div>
          <div>Just wait for 3 seconds.</div>
        </div>
      );
    }

    return (
      <div>
        <div>Hi there :)</div>
        <div>If you see this, it means Dashboard component is rendering.</div>
        <div>{this.props.authToken.access_token}</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    dispatchReceivedAuthtoken: receivedAuthtoken,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    authToken: state.authToken,
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dashboard),
);
