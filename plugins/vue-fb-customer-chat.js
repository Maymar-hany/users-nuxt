import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'
 
Vue.use(VueFbCustomerChat, {
  page_id: 106862354263894, //  change 'null' to your Facebook Page ID,
  theme_color: '#f04e30', // theme color in HEX
  locale: 'en_US', // default 'en_US'
})