import React from 'react';
import { Provider } from 'react-redux';
import { store } from './create-store';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BankingHeader from './BankingHeader';
import WelcomeForm from './WelcomeFormRefactored';
import PayeesManager from './payees/PayeesManager';
import TransactionsManager from './transactions/TransactionsManager';
import CounterDemo from './demos/CounterDemo';

const ComponentOne = () => <h2>Component One</h2>;

const ComponentTwo = () => <h2>Component Two</h2>;

const App: React.FC = () => {
  const companyName = 'Variable Company Name';
  return (
    <Provider store={store}>
      <Router>
        <main className="container">
          <div className="row">
            <div className="col">
              <BankingHeader company={companyName} region="Chicagoland" />
            </div>
          </div>
          {/*         <section className="row">
          <div className="col">
            <WelcomeForm />
          </div>
        </section>
 */}
          <section>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/payees">Payees</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/transactions">Transactions</Link>
              </li>
              <li className="list-inline-item">
                <Link to="/redux-demo">Counter Demo</Link>
              </li>
            </ul>
            <Route path="/payees" component={PayeesManager} />
            <Route path="/transactions" component={TransactionsManager} />
            <Route path="/redux-demo" component={CounterDemo} />
          </section>
        </main>
      </Router>
    </Provider>
  );
};

export default App;
