import PropTypes from 'prop-types';
import { lazy } from 'react';
import { useIntl } from 'react-intl';
import {
  Link as RouterLink,
  Switch,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import { useApplicationContext } from '@commercetools-frontend/application-shell-connectors';
import { NO_VALUE_FALLBACK } from '@commercetools-frontend/constants';
import {
  usePaginationState,
  useDataTableSortingState,
} from '@commercetools-uikit/hooks';
import { BackIcon } from '@commercetools-uikit/icons';
import Constraints from '@commercetools-uikit/constraints';
import FlatButton from '@commercetools-uikit/flat-button';
import LoadingSpinner from '@commercetools-uikit/loading-spinner';
import DataTable from '@commercetools-uikit/data-table';
import { ContentNotification } from '@commercetools-uikit/notifications';
import { Pagination } from '@commercetools-uikit/pagination';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import { SuspendedRoute } from '@commercetools-frontend/application-shell';
import {
  formatLocalizedString,
  transformLocalizedFieldToLocalizedString,
} from '@commercetools-frontend/l10n';
// import messages from './messages';
// import { useChannelsFetcher } from '../../hooks/use-channels-connector';
import { getErrorMessage } from '../../helpers';
import { useCallback } from 'react';
import { docToFormValues, formValuesToDoc } from './conversions';

// const ChannelDetails = lazy(() => import('../channel-details'));

// const columns = [
//   { key: 'name', label: 'Channel name' },
//   { key: 'key', label: 'Channel key', isSortable: true },
//   { key: 'roles', label: 'Roles' },
// ];

// const itemRenderer = (item, column, dataLocale, projectLanguages) => {
//   switch (column.key) {
//     case 'roles':
//       return item.roles.join(', ');
//     case 'name':
//       return formatLocalizedString(
//         { name: transformLocalizedFieldToLocalizedString(item.nameAllLocales) },
//         {
//           key: 'name',
//           locale: dataLocale,
//           fallbackOrder: projectLanguages,
//           fallback: NO_VALUE_FALLBACK,
//         }
//       );
//     default:
//       return item[column.key];
//   }
// };
const Hello = (props) => {
  const intl = useIntl();
  const match = useRouteMatch();
  const { push } = useHistory();
//   const { page, perPage } = usePaginationState();
//   const tableSorting = useDataTableSortingState({ key: 'key', order: 'asc' });
  const { dataLocale, projectLanguages } = useApplicationContext((context) => ({
    dataLocale: context.dataLocale,
    projectLanguages: context.project.languages,
  }));
//   const { channelsPaginatedResult, error, loading } = useChannelsFetcher({
//     page,
//     perPage,
//     tableSorting,
//   });


  return (
    <Spacings.Stack scale="xl">
    <Text.Headline as="h1">
         Hello, world! Lets create a form.
    </Text.Headline>
    {/* insert form componenet here. */}
  </Spacings.Stack>
  );
};
Hello.displayName = 'Hello';
Hello.propTypes = {
  linkToWelcome: PropTypes.string.isRequired,
};

export default Hello;