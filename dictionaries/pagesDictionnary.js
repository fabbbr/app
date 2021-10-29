import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import SellPage from '../pages/SellPage'
import MessagePage from '../pages/MessagePage'
import ProfilPage from '../pages/ProfilPage'

const pagesDictionnary = {
    HOME: {
        Component: HomePage,
        icon: 'house-icon',
        title: 'Accueil'
    },
    SEARCH: {
        Component: SearchPage,
        icon: 'search-icon',
        title: 'Recherche'
    },
    SELL: {
        Component: SellPage,
        icon: 'sell-icon',
        title: 'Vendre'
    },
    MESSAGE: {
        Component: MessagePage,
        icon: 'letter-icon',
        title: 'Messages'
    },
    PROFIL: {
        Component: ProfilPage,
        icon: 'account-icon',
        title: 'Profil'
    }
}

export default pagesDictionnary