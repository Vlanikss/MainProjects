import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setSortBy, SortType } from './sortSlice';

const SortControls: React.FC = () => {
  const dispatch = useAppDispatch();
  const selected = useAppSelector(state => state.sort.sortBy);

  const handleSort = (type: SortType) => {
    dispatch(setSortBy(type));
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <button onClick={() => handleSort('price')} disabled={selected === 'price'}>
        Самый дешевый
      </button>
      <button onClick={() => handleSort('duration')} disabled={selected === 'duration'}>
        Самый быстрый
      </button>
      <button onClick={() => handleSort('connections')} disabled={selected === 'connections'}>
        Самый оптимальный
      </button>
    </div>
  );
};

export default SortControls;
