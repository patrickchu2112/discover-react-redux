import React from 'react';

interface BankingHeaderProps {
  company: string;
  region?: string;
}

const BankingHeader = ({ company, region = 'Tri-Cities' }: BankingHeaderProps) => {
  return (
    <header>
      <h1>Welcome to {company}'s Banking App</h1>
      <small>Serving the {region} area since Tuesday morning</small>
    </header>
  );
};

export default BankingHeader;
