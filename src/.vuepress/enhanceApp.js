/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import Avataaars from 'vuejs-avataaars'
import Avatar from 'vue-avatar'
import { formatRelative } from 'date-fns';
import { es } from 'date-fns/locale';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.component('avataaars', Avataaars)
  Vue.component('initials', Avatar)
  Vue.filter('timeElapsed', function (value) {
    if (value) {
      return formatRelative(new Date(value), new Date(), { locale: es });
    }
    return '';
  });
}
