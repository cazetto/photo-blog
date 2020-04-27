import React, { FC, useEffect, memo } from 'react';
import {
  Switch,
  Route,
  useParams,
  useRouteMatch,
  Redirect,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Box } from 'force-components';
import {
  fetchCustomers,
  selectCurrentCustomer,
  CustomersState,
} from './customerSlice';
import { RootState } from '../../app/store';
import CustomerList from './components/CustomerList';
import CustomerPhotos from './features/CustomerPhotos/CustomerPhotos';
import CustomerPosts from './features/CustomerPosts/CustomerPosts';
import CustomerSubHeader from './components/CustomerSubHeader';
import CustomerInfo from './components/CustomerInfo';

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

  useEffect(() => {
    if (userId && customers.items.length) {
      dispatch(selectCurrentCustomer(userId));
    }
  }, [dispatch, userId, customers.items.length]);

  const firstCustomerId = customers?.items[0]?.id;

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
          width="700px"
        >
          <CustomerSubHeader customer={customers.current} />
          <CustomerInfo customer={customers.current} />
          <Switch>
            <Route path="/" exact>
              {firstCustomerId && (
                <Redirect to={`/${firstCustomerId}/photos`} />
              )}
            </Route>
            <Route path={`${path}/photos`}>
              <CustomerPhotos />
            </Route>
            <Route path={`${path}/posts`}>
              <CustomerPosts />
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
