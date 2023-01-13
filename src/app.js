import './app.css';
import AccountOverview from './account-overview';
import { accountOverviewStub } from './data/account-overview';

function App() {

  return (
    <div className="App">
      <AccountOverview data={accountOverviewStub}/>
    </div>
  );
}

export default App;
