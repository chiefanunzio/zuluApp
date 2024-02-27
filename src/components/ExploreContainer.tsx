import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonInput, IonRow, IonSegment } from '@ionic/react';
import './ExploreContainer.css';
import profile from '../assets/images/profile.png';
import ChartComponent from './ChartComponent';
import { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore';

interface Month {
  entrate: number,
  uscite: number
}


interface ContainerProps { }



const ExploreContainer: React.FC<ContainerProps> = () => {
  const [data, setData] = useState({ entrate: 0, uscite: 0 } as Month)
  const montRef = collection(db, 'budget_mese')
  
  useEffect(() => {
    const fetchData = async () => {
      const dataRes = await getDocs(montRef);
      setData(dataRes.docs.map((doc) => doc.data())[0] as Month);
      console.log(dataRes.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    }
    fetchData();
  }, []);
  return (
    <div id="" className='ion-padding'>
      <IonCard>
        <IonCardHeader>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonAvatar>
                  <img alt="Silhouette of a person's head" src={profile} />
                </IonAvatar>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonCardTitle>
            <h1 className='ion-text-center'>Zulu Dashboard</h1>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          {/*  2 mini card for "entrate & Uscite" */}
          <hr />
          <IonGrid>
            <IonRow>
              <IonCol size='6'>
                <h2 className='ion-text-center ion-padding-bottom'>Entrate</h2>
                <input type="number" readOnly className='zulu-input ion-text-center' placeholder={data.entrate + ' $'} />
              </IonCol>
              <IonCol size='6'>
                <h2 className='ion-text-center ion-padding-bottom'>Uscite</h2>
                <input type="text" readOnly className='zulu-input ion-text-center' placeholder={data.uscite + ' $'} />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>
            <h1 className='ion-text-center'>Grafico Mensile</h1>
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <IonGrid>
            <IonRow className='ion-justify-content-center'>
              <IonCol>
                <ChartComponent entrate={data.entrate} uscite={data.uscite} />
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default ExploreContainer;
