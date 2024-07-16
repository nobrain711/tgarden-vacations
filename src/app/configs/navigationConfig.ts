import i18next from 'i18next';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	{
		id: 'Employee',
		title: '各種申請',
		type: 'group',
		children: [
			{
				id: 'Vacations',
				title: '休暇申請',
				type: 'item',
				icon: 'heroicons-outline:chart-pie',
				url: 'employee/vacations'
			}
		]
	},
];

export default navigationConfig;
