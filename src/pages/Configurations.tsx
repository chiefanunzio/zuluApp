import { IonPage, IonHeader, IonToggle , IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonList, IonItem, IonLabel, IonIcon } from "@ionic/react";
import Header from "../components/Header";
import { trash } from "ionicons/icons";
import ListItem from "../components/ListItem";
import React, { useState } from "react";



const Configurations: React.FC = () => {

  const [ entratePreviste, setEntratePreviste ] = useState([])
  const [ uscitePreviste, setUscitePreviste ] = useState([])
  const [isentries, setIsEntries] = useState(true)


  return (
    <IonPage>
     <Header />
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <h1 className='ion-text-center'>Configurazioni</h1>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonGrid>
              <IonRow className="ion-justify-content-between">
                <IonCol size='5'>
                  <h2 className='ion-text-center ion-padding-bottom'>Entrate Previste</h2>
                  <input type="number" readOnly className='zulu-input ion-text-center' placeholder='0 $' />
                </IonCol>
                <IonCol size='5'>
                  <h2 className='ion-text-center ion-padding-bottom'>Uscite Previste</h2>
                  <input type="text" readOnly className='zulu-input ion-text-center' placeholder='0 $' />
                </IonCol>
              </IonRow>
              <IonRow className="ion-justify-content-center">
                <IonToggle mode="ios" labelPlacement="start" checked={isentries} onIonChange={e => setIsEntries(e.detail.checked)} /><span className="ion-padding "> Lista delle {isentries ? 'entrate' : 'uscite'} previste</span>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

      {/* lista delle entrate previste o delle uscite previste io list*/}
        {isentries ? (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <h1 className='ion-text-center'>Lista delle entrate previste</h1>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <ListItem amount={10000} category_id='1' category_label='Stipendio' description='novembre sfgh sf ' icon={trash} />
              <ListItem amount={100} category_id='1' category_label='Stipendio' description='novembre' icon={trash} />
              <ListItem amount={100} category_id='1' category_label='Stipendio' description='novembre' icon={trash} />
              <ListItem amount={100} category_id='1' category_label='Stipendio' description='novembre' icon={trash} />
              <ListItem amount={100} category_id='1' category_label='Stipendio' description='novembre' icon={trash} />
            </IonList>
          </IonCardContent>
        </IonCard>
        ) : (
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <h1 className='ion-text-center'>Lista delle uscite previste</h1>
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <ListItem amount={100} category_id='1' category_label='Stipendio' description='novembre' icon={trash} />
              <ListItem amount={100} category_id='1' category_label='Stipendio' description='novembre' icon={trash} />
              <ListItem amount={100} category_id='1' category_label='Stipendio' description='novembre' icon={trash} />
              <ListItem amount={100} category_id='1' category_label='Stipendio' description='novembre' icon={trash} />
              <ListItem amount={100} category_id='1' category_label='Stipendio' description='novembre' icon={trash} />
            </IonList>
          </IonCardContent>
        </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Configurations;