// FIXME: Fix imports
import IconHome from "../components/icons/IconHome.astro";
import IconSearch from "../components/icons/IconSearch.astro";
import IconExplore from "../components/icons/IconExplore.astro";
import IconNotification from "../components/icons/IconNotification.astro";
import IconMessage from "../components/icons/IconMessage.astro";
import IconCreate from "../components/icons/IconCreate.astro";
import IconProfile from "../components/icons/IconProfile.astro";
import IconSetting from "../components/icons/IconSetting.astro";

interface IMenuNavigation {
    title: string;
    url: string;
    icon: Function;
}

const MENU_NAVIGATION: IMenuNavigation[] = [
    {
        title: 'Home',
        url: '/home',
        icon: IconHome
    },
    {
        title: 'Search',
        url: '/search',
        icon: IconSearch
    },
    {
        title: 'Explore',
        url: '/explore',
        icon: IconExplore
    },
    {
        title: 'Notifications',
        url: '/notifications',
        icon: IconNotification
    },
    {
        title: 'Messages',
        url: '/messages',
        icon: IconMessage
    },
    {
        title: 'Create',
        url: '/create',
        icon: IconCreate
    },
    {
        title: 'Profile',
        url: '/profile',
        icon: IconProfile
    },
    {
        title: 'Settings',
        url: '/settings',
        icon: IconSetting
    }

]

export { MENU_NAVIGATION };