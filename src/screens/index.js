import routes from '@navigation/routes';
import Contact from './Bottom/Contact';
import ContactDetails from './Common/ContactDetails';

export const auth = {};

export const bottom = {
  [routes.CONTACT_SCREEN]: Contact,
};

export const common = {
  [routes.CONTACT_DETAILS_SCREEN]: ContactDetails,
};
