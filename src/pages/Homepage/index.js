import Loadable from '@loadable/component';

const HomepageLoadable = Loadable(() => import('./View'));

export default HomepageLoadable;