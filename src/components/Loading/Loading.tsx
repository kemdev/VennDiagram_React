import '@/assets/loading.css';
import Container from '../Container';
import StyledPaper from '../StyledPaper';

const LoadingScreen = () => (
  <StyledPaper className='container'>
    <div className='loading-container'>
      <div className='loading-circle'></div>
      <div className='loading-circle'></div>
    </div>
  </StyledPaper>
);

export default LoadingScreen;
