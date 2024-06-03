import React, { ChangeEvent, KeyboardEvent } from 'react';

interface InputProps {
  clearApp: () => void;
  onSubmit: (input: string) => void;
}

interface InputState {
  input: string;
}

class Input extends React.Component<InputProps, InputState> {
  constructor(props: InputProps) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    let value = e.currentTarget.value;
    if (value === '') {
      this.props.clearApp();
    }
    this.setState({ input: value });
  };

  handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    let { input } = this.state;
    if (e.key === 'Enter') {
      this.props.onSubmit(input);
    }
  };

  render() {
    let { input } = this.state;

    return (
      <>
        <input
          id="query-input"
          type="search"
          name="input"
          value={input}
          placeholder="Search by book title or author..."
          onChange={(e) => {
            this.handleUserInput(e);
          }}
          onKeyUp={(e) => {
            this.handleKeyPress(e);
          }}
        />
        <button
          className="query-btn"
          type="button"
          onClick={() => {
            this.props.onSubmit(input);
          }}
        >
          Search
        </button>
      </>
    );
  }
}

export default Input;
