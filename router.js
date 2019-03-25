import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomePage from './Page/HomePage';
import Page from './Page/Page';
import TestScreen from './Page/TestScreen';
import KtpPage from './Page/KtpPage';
import KK from './Page/KK';
import PageSuratPindah from './Page/PageSuratPindah';
import ImbDibawah200m from './Page/ImbDibawah200m';
import ImbDiatas200m from './Page/ImbDiatas200m';
import Jampersal from './Page/Jampersal';
import SIUPdanTDP from './Page/SIUPdanTDP';
import VISUM from './Page/VISUM';
import PPATS from './Page/PPATS';
import PageAhliWaris from './Page/PageAhliWaris';
import PagePinjamBank from './Page/PagePinjamBank';
import IzinReklame from './Page/IzinReklame';
import IzinRame from './Page/IzinRame';
import Elapor from './Page/Elapor';
import Setting from './Page/Setting';
import SettingAkun from './Page/SettingAkun';
import SettingId from './Page/SettingID';

const Screen = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page: {
        screen: Page
    },
    TestScreen: {
        screen: TestScreen
    },
    KtpPage: {
        screen: KtpPage
    },
    KK: {
        screen: KK
    },
    PageSuratPindah: {
        screen: PageSuratPindah
    },
    ImbDibawah200m: {
        screen: ImbDibawah200m
    },
    ImbDiatas200m: {
        screen: ImbDiatas200m
    },
    Jampersal: {
        screen: Jampersal
    },
    SIUPdanTDP: {
        screen: SIUPdanTDP
    },
    VISUM: {
        screen: VISUM
    },
    PPATS: {
        screen: PPATS
    },
    PageAhliWaris: {
        screen: PageAhliWaris
    },
    PagePinjamBank: {
        screen: PagePinjamBank
    },
    IzinReklame: {
        screen: IzinReklame
    },
    IzinRame: {
        screen: IzinRame
    },
    Elapor: {
        screen: Elapor
    },
    Setting: {
        screen: Setting
    },
    SettingAkun: {
        screen: SettingAkun
    },
    SettingId: {
        screen: SettingId
    }
},
    {
        headerMode: 'none'

    });
export const ScreenContainer = createAppContainer(Screen);

export const createRootNavigator = () => {
    return ScreenContainer
}