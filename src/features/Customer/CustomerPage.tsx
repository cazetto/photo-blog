import React, { FC, useEffect, memo } from 'react';
import { Switch, Route, useParams, useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Box } from 'force-components';
import { fetchCustomers, CustomersState } from './customerSlice';
import { RootState } from '../../app/store';
import CustomerList from './components/CustomerList/CustomerList';

interface ICustomers {
  customers?: CustomersState;
}

const CustomerPage: FC<ICustomers> = () => {
  const { userId } = useParams();
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  const customers: CustomersState = useSelector((props: RootState) => {
    return props.customers;
  });

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch]);

  return (
    <div>
      <h1>CustomerPage | customer userId {userId}</h1>
      <Box display="flex" flexDirection="row">
        <Box maxWidth="240px">
          <CustomerList customers={customers.items} />
        </Box>
        <Box
          borderColor="colorBlue200"
          borderStyle="solid"
          borderWidth="1"
          width="100%"
        >
          <Switch>
            <Route path={`${path}/photos`}>
              <div>Photos</div>
            </Route>
            <Route path={`${path}/posts`}>
              <div>Posts</div>
            </Route>
          </Switch>
        </Box>
      </Box>
    </div>
  );
};

function areEqual(prevProps: ICustomers, nextProps: ICustomers) {
  return _.isEqual(prevProps, nextProps);
}

export default memo(CustomerPage, areEqual);
