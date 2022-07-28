import {isIos} from '@utils/helper';
import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

const useContact = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    if (isIos) {
      Contacts.checkPermission().then(permission => {
        if (permission === 'undefined') {
          Contacts.requestPermission();
        }
        if (permission === 'authorized') {
          Contacts.getAll().then(data => setContacts(data));
        }
      });
    } else {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: 'This app would like to view your contacts.',
        buttonPositive: 'Please accept bare mortal',
      }).then(Contacts.getAll().then(data => setContacts(data)));
    }
  }, []);

  return {contacts};
};

export default useContact;
