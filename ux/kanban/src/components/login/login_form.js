import React, { Component } from 'react';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { setAccessToken } from ''./reducer';
import cx from 'classnames';

const LoginQuery = gql`
  mutation logIn($user: LoginInput!) {
    logIn(input: $user) {
      access_token
    }
  }
`;

const withMutation = graphql(LoginQuery, {
  props: ({ mutate }) => ({
    loginUser: user => mutate({
      variables: { user },
    }),
  }),
});

const mapDispatchToProp = (dispatch, ownProps) => ({
  login: 
})
