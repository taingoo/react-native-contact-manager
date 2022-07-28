import {useDispatch, useSelector as useReduxSelector} from 'react-redux';

const useStore = () => {
  const dispatch = useDispatch();

  const useSelector = state => useReduxSelector(store => store[state]);

  return {dispatch, useSelector};
};

export default useStore;
