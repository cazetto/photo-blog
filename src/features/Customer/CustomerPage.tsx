import React, { FC, useEffect, memo } from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { fetchCustomers, CustomersState } from './customerSlice';
import { RootState } from '../../app/store';

interface ICustomers {
  customers?: CustomersState;
}

const CustomerPage: FC<ICustomers> = () => {
  const { userId } = useParams();
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  const customers: CustomersState = useSelector(({ customers }: RootState) => {
    return customers;
  });

  console.log(customers);

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div>
      <h1>CustomerPage | customer userId {userId}</h1>
      <Switch>
        <Route path={`${path}/photos`}>
          <div>Photos</div>
        </Route>
        <Route path={`${path}/posts`}>
          <div>Posts</div>
        </Route>
      </Switch>
    </div>
  );
};

function areEqual(prevProps: ICustomers, nextProps: ICustomers) {
  return _.isEqual(prevProps, nextProps);
}

export default memo(CustomerPage, areEqual);
