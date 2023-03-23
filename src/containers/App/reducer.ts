import produce from 'immer';

export const initialState = {
  auth: null,
  loading: {
    showLoading: false,
  },
  isShowLoginModal: false,
};

const appReducer = (state = initialState, action: { type: string }) =>
  produce(state, draft => {
    switch (action.type) {
      default:
        break;
    }
  });

export default appReducer;
