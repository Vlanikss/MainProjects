import React from 'react';
import './App.css';
import TicketsList from './features/tickets/TicketsList';
import SortControls from './features/filters/SortControls';

function App() {
  return (
    <div className="app-wrapper">
      <h1 className="header">Поиск авиабилетов</h1>
      <SortControls />
      <TicketsList />
    </div>
  );
}

export default App;
