import { IonItem, IonLabel, IonIcon, IonGrid, IonRow, IonCol } from "@ionic/react";
import {
  trashBin,
  trashBinOutline,
  trashBinSharp,
  trashOutline,
  trashSharp,
  trendingDown,
  banSharp,
  pencilSharp
} from "ionicons/icons";
import './ListItem.css';

interface ListItemProps {
  amount: number;
  category_id: string;
  category_label: string;
  description: string;
  icon: string;
}


const ListItem: React.FC<ListItemProps> = ({ amount, category_id, category_label, description, icon }) => {
  return (
    <IonItem>
      <IonGrid>
        <IonRow class="ion-justify-content-between">
          <IonCol size='1'>
            <IonIcon icon={icon} />
          </IonCol>
          <IonCol size='5'>
            <IonLabel>{category_label}</IonLabel>
          </IonCol>
          {/* <IonCol size='3'>
            <IonLabel>{description}</IonLabel>
          </IonCol> */}
          <IonCol size='4'>
            <IonLabel>{amount + " $"}</IonLabel>
          </IonCol>
          <IonCol size='1'>
            <IonIcon icon={pencilSharp} />
          </IonCol>
          <IonCol size='1'>
            <IonIcon icon={banSharp} />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
}

export default ListItem;