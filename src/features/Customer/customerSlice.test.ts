import customers, {
  getAllCustomersStart,
  getAllCustomersSuccess,
  getAllCustomersFailure,
  setCurrentCustomer,
} from './customerSlice';

describe('Customer Slice:', () => {
  describe('Action creator should return the correct action for', () => {
    it('getAllCustomersStart', () => {
      expect(getAllCustomersStart()).toEqual({
        type: 'customer/getAllCustomersStart',
        payload: undefined,
      });
    });

    it('getAllCustomersSuccess action creator generates the correct action', () => {
      expect(getAllCustomersSuccess([])).toEqual({
        type: 'customer/getAllCustomersSuccess',
        payload: [],
      });
    });

    it('getAllCustomersFailure action creator generates the correct action', () => {
      expect(getAllCustomersFailure('error message')).toEqual({
        type: 'customer/getAllCustomersFailure',
        payload: 'error message',
      });
    });

    it('setCurrentCustomer action creator generates the correct action', () => {
      expect(setCurrentCustomer(1)).toEqual({
        type: 'customer/setCurrentCustomer',
        payload: 1,
      });
    });
  });

  //
  describe('Reducer', () => {
    it('initial state', () => {
      expect(
        customers(undefined, {
          type: null,
        })
      ).toEqual({
        isLoading: false,
        error: null,
        items: [],
        current: undefined,
      });
    });

    it('should return the correct state for getAllCustomersStart action creator', () => {
      expect(
        customers(undefined, {
          type: getAllCustomersStart.type,
        }).isLoading
      ).toBe(true);
    });

    it('should return the correct state for getAllCustomersSuccess action creator', () => {
      const payload = [{ id: 1, text: 'Item 1' }];
      expect(
        customers(undefined, {
          type: getAllCustomersSuccess.type,
          payload,
        }).items
      ).toEqual(payload);
    });

    it('should return the correct state for getAllCustomersFailure action creator', () => {
      const payload = 'error message';
      expect(
        customers(undefined, {
          type: getAllCustomersFailure.type,
          payload,
        }).error
      ).toEqual(payload);
    });

    it('should return the correct state for getAllCustomersFailure action creator', () => {
      const payload = 'error message';
      expect(
        customers(undefined, {
          type: getAllCustomersFailure.type,
          payload,
        }).error
      ).toEqual(payload);
    });

    it('should return the correct state for getAllCustomersFailure action creator', () => {
      const customer = {
        id: 123,
        name: '',
        username: '',
        email: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: '',
          geo: {
            lat: '',
            lng: '',
          },
        },
        phone: '',
        website: '',
        company: {
          name: '',
          catchPhrase: '',
          bs: '',
        },
      };
      const state = {
        isLoading: false,
        error: '',
        items: [customer],
        current: undefined,
      };

      expect(
        customers(state, {
          type: 'customer/setCurrentCustomer',
          payload: customer,
        })
      ).toEqual(state);
    });
  });
});
