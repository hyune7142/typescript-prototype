import { TestComp, LoginPage } from '@components/pages';

const menuInfo = {
    test: TestComp,
    login: LoginPage,
}

export const getMenuList = () => {
    return menuInfo
}