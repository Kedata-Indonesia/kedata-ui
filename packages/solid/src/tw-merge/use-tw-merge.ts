import { useContext } from 'solid-js';
import TwMergeContext from './tw-merge-context';
import tw from '@kedataindo/slots/tw';

const useTwMerge = () => {
  const context = useContext(TwMergeContext);

  return context ?? tw.base;
};

export default useTwMerge;
