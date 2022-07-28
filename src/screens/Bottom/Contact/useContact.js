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
    const _getContacts = async () => {
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
          const permission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              title: 'Contacts',
              message: 'This app would like to view your contacts.',
              buttonPositive: 'Please accept bare mortal',
            },
          );
          if (permission === 'granted') {
            Contacts.getAll().then(c => setContacts(c));
          }
        }
      }
    };
    _getContacts();
  }, [data]);

  return {contacts};
};

export default useContact;
