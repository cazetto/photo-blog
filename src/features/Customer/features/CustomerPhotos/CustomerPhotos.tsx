import React, { FC, useEffect } from 'react';
import { Box, ImageSlider } from 'force-components';
import Octicon, { ChevronLeft, ChevronRight } from '@primer/octicons-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCustomerPhotos,
  CustomerPhotosState,
  CustomerPhoto,
} from './customerPhotosSlice';
import { RootState } from '../../../../app/store';

const CustomerPhotos: FC<{}> = () => {
  const dispatch = useDispatch();
  const customerPhotos: CustomerPhotosState = useSelector(
    (props: RootState) => {
      return props.customerPhotos;
    }
  );

  useEffect(() => {
    dispatch(fetchCustomerPhotos());
  }, [dispatch]);

  const photosData = customerPhotos?.items?.map((current: CustomerPhoto) => ({
    thumb: current.thumbnailUrl,
    image: current.url,
  }));

  if (photosData.length) {
    return (
      <ImageSlider items={photosData}>
        <ImageSlider.Image />
        <Box>
          <ImageSlider.Thumbs />
          <ImageSlider.Prev>
            <Octicon icon={ChevronLeft} />
            Prev
          </ImageSlider.Prev>
          <ImageSlider.Next>
            Next
            <Octicon icon={ChevronRight} />
          </ImageSlider.Next>
        </Box>
      </ImageSlider>
    );
  }
  return <>Loading</>;
};

export default CustomerPhotos;
