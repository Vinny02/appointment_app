import React from 'react';
import Appointments from './Appointments';

const App = () => {
  return (
    <div className="App">
      <header className="bg-slate-800 text-white py-6 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold tracking-tight">Appointments Application</h1>
        </div>
      </header>
      <main className="mt-4">
        <Appointments />
      </main>
    </div>
  );
};

export default App;
