import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Box, ImageSlider } from 'force-components';
import Octicon, { ChevronLeft, ChevronRight } from '@primer/octicons-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCustomerPhotos,
  CustomerPhotosState,
  CustomerPhoto,
} from './customerPhotosSlice';
import { RootState } from '../../../../app/store';
import Loading from '../../../../components/Loading';
import Message from '../../../../components/Message';

const noPhotosMessage = 'Não há fotos!';

const CustomerPhotos: FC<{}> = () => {
  const dispatch = useDispatch();
  const customerPhotos: CustomerPhotosState = useSelector(
    (props: RootState) => {
      return props.customerPhotos;
    }
  );

  const customerId: number | undefined = useSelector((props: RootState) => {
    return props.customers.current?.id;
  });

  useEffect(() => {
    customerId && dispatch(fetchCustomerPhotos(customerId));
  }, [dispatch, customerId]);

  const photosData = customerPhotos?.items?.map((current: CustomerPhoto) => ({
    thumb: current.thumbnailUrl,
    image: current.url,
  }));

  if (customerPhotos.isLoading) {
    return <Loading />;
  }

  if (!customerPhotos.items.length) {
    return <Message text={noPhotosMessage} />;
  }

  return (
    <ImageSlider items={photosData}>
      <Box display="flex" justifyContent="center">
        <ImageSlider.Image />
      </Box>
      <ImageSlider.Thumbs selectedColor="colorGray600">
        {{
          prevControl: (
            <ImageSlider.Prev>
              <CustomOcticon icon={ChevronLeft} />
            </ImageSlider.Prev>
          ),
          nextControl: (
            <ImageSlider.Next>
              <CustomOcticon icon={ChevronRight} />
            </ImageSlider.Next>
          ),
        }}
      </ImageSlider.Thumbs>
    </ImageSlider>
  );
};

const CustomOcticon = styled(Octicon)`
  padding: 14px;
  outline: none;
`;

export default CustomerPhotos;
