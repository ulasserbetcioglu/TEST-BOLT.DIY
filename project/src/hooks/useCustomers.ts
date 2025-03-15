import { useEffect, useState } from 'react';
import supabase from '../lib/supabase';

const useCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('customers')
        .select('*');

      if (error) {
        setError(error);
      } else {
        setCustomers(data);
      }
      setLoading(false);
    };

    fetchCustomers();
  }, []);

  return { customers, loading, error };
};

export default useCustomers;
