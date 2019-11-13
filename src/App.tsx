import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BankingHeader from './BankingHeader';
import WelcomeForm from './WelcomeFormRefactored';
import './App.css';

const ComponentOne = () => (
  <h2>Component One</h2>
)

const ComponentTwo = () => (
  <h2>Component Two</h2>
)

const App: React.FC = () => {
  const companyName = 'Variable Company Name';
  return (
    <Router>
      <main>
        <BankingHeader company={companyName} region="Chicagoland" />
        <section>
          <WelcomeForm />
        </section>
        <section>
          <ul>
            <li>
              <Link to="/component-one">Component One</Link>
            </li>
            <li>
              <Link to="/component-two">Component Two</Link>
            </li>
            <li>
              <Link to="/option-three">Option Three</Link>
            </li>
          </ul>
          <Route path="/component-one" component={ComponentOne} />
          <Route path="/component-two" component={ComponentTwo} />
          <Route path="/option-three" render={ () => (
            <h3>This is option three</h3>
          )} />


        </section>
      </main>
    </Router>
  );
};


export default App;
