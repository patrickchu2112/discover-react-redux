import React from 'react';

interface BankingHeaderProps {
  company: string;
  region?: string;
}

export default class BankingHeader extends React.Component<BankingHeaderProps> {
  constructor(props: BankingHeaderProps) {
    super(props);
    this.props;
    this.state = {
      name: 'John',
      city: 'Chicago',
      state: 'IL'
    };

    this.boundHandleClick = this.boundHandleClick.bind(this);
  }

  changeSomeState() {
    this.setState({
      name: 'Fred Rogers'
    });
  }

  handleClick = () => {
    console.log('You clicked on the button');
    this.changeSomeState();
  }

  boundHandleClick() {
    console.log('You clicked on the button');
    this.changeSomeState();
  }

  render() {
    const {company, region} = this.props;

    return (
      <header>
        <h1>Welcome to {this.props.company}'s Banking App</h1>
        <small>Serving the {this.props.region} area since Tuesday morning</small>
        <button type="button" onClick={this.handleClick}></button>
      </header>
    );
  }
}
