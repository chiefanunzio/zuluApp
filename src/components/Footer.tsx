import { IonFooter, IonToolbar, IonGrid, IonRow, IonCol, IonRouterLink } from "@ionic/react";

const Footer: React.FC = () => {
  return (
    <IonFooter>
      <IonToolbar>
        {/* menu 3 items */}
        <IonGrid fixed={true}>
          <IonRow className='ion-padding'>
            <IonCol size="4" >
              <IonRouterLink href="/dashboard">
                <button className='btn-zulu'>Home</button>
              </IonRouterLink>
            </IonCol>
            <IonCol size="4" >
              <IonRouterLink href="/mounth">
                <button className='btn-zulu'>Month</button>
              </IonRouterLink>
            </IonCol>
            <IonCol size="4" >
              <IonRouterLink href="/year">
                <button className='btn-zulu'>Year</button>
              </IonRouterLink>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonFooter>
  );
}

export default Footer;