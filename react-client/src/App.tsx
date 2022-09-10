import Layout from 'components/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import StoreWrapper from 'store/StoreWrapper';
import RoutesWrapper from 'utils/RoutesWrapper';

const App = () => {
  return (
    <StoreWrapper>
      <BrowserRouter>
        <Layout>
          <RoutesWrapper />
        </Layout>
      </BrowserRouter>
    </StoreWrapper>
  );
};

export default App;
