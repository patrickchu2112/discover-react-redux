import React from 'react';
import BankingHeader from './BankingHeader';
import WelcomeForm from './WelcomeForm';
import './App.css';

const App: React.FC = () => {
  const companyName= 'Variable Company Name'
  return (
    <main>
      <BankingHeader company={companyName} region="Chicagoland"/>
      <section>
        <WelcomeForm />
      </section>
    </main>
  );
}

export default App;
