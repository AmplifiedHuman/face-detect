import React from 'react';
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      failedAttempt: false,
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch('https://powerful-mountain-92874.herokuapp.com/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      }),
    })
      .then((data) => data.json())
      .then((user) => {
        if (user.id) {
          this.setState({ failedAttempt: false });
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        } else {
          this.setState({ failedAttempt: true });
        }
      });
  };

  render() {
    let emailClasses = 'block border w-full p-3 rounded';
    if (this.state.failedAttempt) {
      emailClasses += ' border-red-500';
    }
    return (
      <div className='flex flex-col'>
        <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
          <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
            <h1 className='mb-8 text-3xl text-center'>Register</h1>
            <input
              type='text'
              className='block border w-full p-3 rounded mb-4'
              name='fullname'
              placeholder='Full Name'
              onChange={this.onNameChange}
            />

            <input
              type='text'
              className={emailClasses}
              name='email'
              placeholder='Email'
              onChange={this.onEmailChange}
            />

            <div className='mt-2'>
              {this.state.failedAttempt && (
                <p className='text-red-500 text-xs'>Invalid Email</p>
              )}
            </div>

            <input
              type='password'
              className='block border w-full p-3 rounded my-4'
              name='password'
              placeholder='Password'
              onChange={this.onPasswordChange}
            />

            <button
              className='bg-pink-500 hover:bg-pink-400 text-white font-bold py-3 rounded focus:outline-none focus:shadow-outline w-full'
              type='button'
              onClick={this.onSubmitSignIn}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
