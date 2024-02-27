import { IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <Header />
      <IonContent fullscreen>
        <ExploreContainer />
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Home;
