import { useQuery } from '@tanstack/react-query';
import { ME } from '../constants';
import { me } from './MeService';

const useMe = () => {
  return useQuery({
    queryKey: [ME],
    queryFn: me,
    retry: false,
  });
};

export default useMe;

