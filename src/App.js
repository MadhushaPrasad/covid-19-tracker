import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRoutes from './routes/AppRoutes';

class App extends React.Component {
  render() {
    return (
        <div>
          <AppRoutes/>
        </div>
    );
  }
}

export default App;
