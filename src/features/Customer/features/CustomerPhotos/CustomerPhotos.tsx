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

  useEffect(() => {
    dispatch(fetchCustomerPhotos());
  }, [dispatch]);

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
      <Box>
        <ImageSlider.Thumbs selectedColor="colorGray600">
          {{
            prevControl: (
              <ImageSlider.Prev>
                <Octicon icon={ChevronLeft} />
              </ImageSlider.Prev>
            ),
            nextControl: (
              <ImageSlider.Next>
                <Octicon icon={ChevronRight} />
              </ImageSlider.Next>
            ),
          }}
        </ImageSlider.Thumbs>
      </Box>
    </ImageSlider>
  );
};

export default CustomerPhotos;
