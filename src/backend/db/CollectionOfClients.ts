import firebase from "../config";
import Client from "../../components/core/Client";
import ClientRepository from "../../components/core/ClientRepository";

export default class CollectionOfClients implements ClientRepository {
  #converter = {
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
    if (client?.id) {
      await this.range().doc(client.id).set(client);
      return client;
    } else {
      const docRef = await this.range().add(client);
      const doc = await docRef.get();
      return doc.data();
    }
  }

  async delete(client: Client): Promise<void> {
    return this.range().doc(client.id).delete();
  }

  async allClients(): Promise<Client[]> {
    const query = await this.range().get();
    return query.docs.map((doc) => doc.data()) ?? [];
  }

  private range() {
    return firebase
      .firestore()
      .collection("clients")
      .withConverter(this.#converter);
  }
}
