import firebase from "../config";
import Client from "../../components/core/Client";
import ClientRepository from "../../components/core/ClientRepository";

export default class CollectionOfClients implements ClientRepository {
  converter = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ): Client {
      const dataC = snapshot.data(options);
      return new Client(dataC.name, dataC.age, snapshot.id);
    },
  };

  async save(client: Client): Promise<Client> {
    return null;
  }

  async delete(client: Client): Promise<void> {
    return null;
  }

  async allClients(): Promise<Client[]> {
    return null;
  }

  private range() {
    return firebase
      .firestore()
      .collection("clients")
      .withConverter(this.converter);
  }
}
