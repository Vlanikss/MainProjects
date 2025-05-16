import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchTickets, ticketsSelectors } from './ticketsSlice';
import './TicketCard.css';

const TicketsList: React.FC = () => {
  const dispatch = useAppDispatch();
  const tickets = useAppSelector(ticketsSelectors.selectAll);
  const loading = useAppSelector(state => state.tickets.loading);
  const error = useAppSelector(state => state.tickets.error);
  const sortBy = useAppSelector(state => state.sort.sortBy); // Получаем текущий критерий сортировки

  useEffect(() => {
    dispatch(fetchTickets());
  }, [dispatch]);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка: {error}</div>;

  // Сортировка билетов перед отображением
  const sortedTickets = [...tickets].sort((a, b) => {
    switch (sortBy) {
      case 'price':
        return a.price - b.price;
      case 'duration':
        return a.duration - b.duration;
      case 'connections':
        return (a.connectionAmount ?? 0) - (b.connectionAmount ?? 0);
      default:
        return 0;
    }
  });

  return (
    <div>
      {sortedTickets.map(ticket => (
        <div key={ticket.id} className="ticket-card">
          <div>
            <strong>{ticket.price.toLocaleString()} {ticket.currency}</strong>
          </div>
          <div>{ticket.from} - {ticket.to}</div>
          <div>{ticket.time.startTime} - {ticket.time.endTime}</div>
          <div>Перевозчик: {ticket.company}</div>
          <div>Пересадок: {ticket.connectionAmount ?? 0}</div>
          <div>В пути: {Math.floor(ticket.duration / 60)} ч {ticket.duration % 60} мин</div>
        </div>
      ))}
    </div>
  );
};

export default TicketsList;
