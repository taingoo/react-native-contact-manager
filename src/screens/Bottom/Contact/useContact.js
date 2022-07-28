import {useStore} from '@hooks';
import {isIos} from '@utils/helper';
import {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';

const useContact = () => {
  const {useSelector} = useStore();
  const {data} = useSelector('contact');
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    if (!data) {
      if (isIos) {
        Contacts.checkPermission().then(permission => {
          if (permission === 'undefined') {
            Contacts.requestPermission();
          }
          if (permission === 'authorized') {
            Contacts.getAll().then(c => setContacts(c));
          }
        });
      } else {
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
          {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
          },
        ).then(Contacts.getAll().then(c => setContacts(c)));
      }
    }
  }, [data]);

  return {contacts};
};

export default useContact;
