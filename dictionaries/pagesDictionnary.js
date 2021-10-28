import HomePage from '../pages/HomePage'
import SearchPage from '../pages/SearchPage'
import SellPage from '../pages/SellPage'
import MessagePage from '../pages/MessagePage'
import ProfilPage from '../pages/ProfilPage'

const pagesDictionnary = {
    HOME: {
        Component: HomePage,
        icon: 'Component-icon',
        title: 'Accueil'
    },
    SEARCH: {
        Component: SearchPage,
        icon: 'Component-icon',
        title: 'Recherche'
    },
    SELL: {
        Component: SellPage,
        icon: 'Cc-icon',
        title: 'Vendre'
    },
    MESSAGE: {
        Component: MessagePage,
        icon: 'Cc-icon',
        title: 'Messages'
    },
    PROFIL: {
        Component: ProfilPage,
        icon: 'Cccount-icon',
        title: 'Profil'
    }
}

export default pagesDictionnary