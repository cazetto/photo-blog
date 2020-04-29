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
import Loading from '../../components/Loading';

interface ICustomers {
  customers?: CustomersState;
}

const usersOnSideWidth = '200px';

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

  if (customers.isLoading) {
    return <Loading />;
  }

  return (
    <Box
      display="flex"
      flexDirection={{
        xs: 'column',
        md: 'row',
      }}
    >
      <Box
        width={{
          xs: '100%',
          md: usersOnSideWidth,
        }}
      >
        <CustomerList
          customers={customers.items}
          selectedCustomerId={customers.current?.id}
        />
      </Box>
      <Box
        width={{
          xs: '100%',
          md: `calc(100% - ${usersOnSideWidth})`,
        }}
      >
        {customers.current && (
          <Box
            width={{
              xs: '100%',
              md: `calc(100% - ${usersOnSideWidth})`,
            }}
            display="flex"
            justifyContent="center"
          >
            <CustomerSubHeader customer={customers.current} />
          </Box>
        )}
        {customers.current && <CustomerInfo customer={customers.current} />}
        <Switch>
          <Route path="/" exact>
            {firstCustomerId && <Redirect to={`/${firstCustomerId}/photos`} />}
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
  );
};

function areEqual(prevProps: ICustomers, nextProps: ICustomers) {
  return _.isEqual(prevProps, nextProps);
}

export default memo(CustomerPage, areEqual);
