import Dexie from 'dexie';
import uuidV4 from 'uuid/v4';
import { Friend } from './friend.model';

export class FriendService extends Dexie {
  relationships = ['Father', 'Mother', 'Friend', 'Girlfriend', 'Boyfriend', 'Brother', 'Sister', 'Other'];
  friends: Dexie.Table<Friend, string>;

  constructor() {
      super('MyApp');
      this.version(1).stores({
        friends: 'id'
      });
  }

  getFriends(): Dexie.Promise<Friend[]> {
    return this.friends.toArray();
  }

  getFriend(friendId: string): Dexie.Promise<Friend> {
    return this.friends.get(friendId);
  }

  updateFriend(friend: Friend) {
    this.friends.update(friend.id, friend);
  }

  addFriend(friend: Friend) {
    friend.id = uuidV4();
    this.friends.add(friend);
  }

  removeFriend(friendId: string) {
    this.friends.delete(friendId);
   }

}