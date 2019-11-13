import { Payee } from './payee-types';

const baseUrl = 'http://localhost:8000/api/v1/banking/payees';

const getPayees = () => {
  const p = fetch(baseUrl);

  const p2 = p.then(results => {
    // Status 200 or similar
    if (results.ok) {
      return results.json();
      // Bad status like 404, 500
    } else {
      return Promise.reject({ message: 'Bad results' });
    }
  });

  return p2;
};

const handleError = (results: Response) => {
  if (results.status) {
    return Promise.reject({ message: 'Bad status' });
  } else {
    return Promise.reject({ message: 'Unknown error' });
  }
};

const getPayeesImproved = (): Promise<Payee[]> => {
  return fetch(baseUrl)
    .then(results => (results.ok ? results.json() : handleError(results)))
    .catch(error => {
      if (error.message) {
        return Promise.reject(error);
      } else {
        return Promise.reject({ message: 'DAO Error' });
      }
    });
};

const payeesDao = {
  getPayees: getPayeesImproved
};

export { payeesDao };
