import { handleActions } from 'redux-actions'
import { CACHE_USER_INFO_DATA, CACHE_TABBAR_BOTTOM_DATA } from '../types/cache'

export default handleActions({
  [CACHE_USER_INFO_DATA] (state, action) {
    return {
      ...state,
      userInfoCacheData: action.payload
    }
  },
  [CACHE_TABBAR_BOTTOM_DATA] (state, action) {
    return {
      ...state,
      tabBarBottomCacheData: action.payload
    }
  }
}, {
  userInfoCacheData: {
    userName: 'hahah',
    role: 'user'
  },
  tabBarBottomCacheData: {
    user: [
      {
        index: 0,
        name: '用户',
        img: '../assets/images/tabBarBottom/tabBom0.png',
        bar: '../assets/images/tabBarBottom/tabBom0_bar.png',
        routerLink: 'busineMainPage',
        isSelected: true
      },
      {
        index: 1,
        name: '选择2',
        img: '../assets/images/tabBarBottom/tabBom1.png',
        bar: '../assets/images/tabBarBottom/tabBom1_bar.png',
        routerLink: 'extendMainPage',
        isSelected: false
      },
      {
        index: 2,
        name: '选择3',
        img: '../assets/images/tabBarBottom/tabBom2.png',
        bar: '../assets/images/tabBarBottom/tabBom2_bar.png',
        routerLink: 'busineMainPage',
        isSelected: false
      },
      {
        index: 3,
        name: '选择4',
        img: '../assets/images/tabBarBottom/tabBom3.png',
        bar: '../assets/images/tabBarBottom/tabBom3_bar.png',
        routerLink: 'extendMainPage',
        isSelected: false
      }
    ],
    business: [
      {
        index: 0,
        name: '商家1',
        img: '../assets/images/tabBarBottom/tabBom0.png',
        bar: '../assets/images/tabBarBottom/tabBom0_bar.png',
        routerLink: 'busineMainPage',
        isSelected: true
      },
      {
        index: 1,
        name: '选择2',
        img: '../assets/images/tabBarBottom/tabBom1.png',
        bar: '../assets/images/tabBarBottom/tabBom1_bar.png',
        routerLink: 'extendMainPage',
        isSelected: false
      },
      {
        index: 2,
        name: '选择3',
        img: '../assets/images/tabBarBottom/tabBom2.png',
        bar: '../assets/images/tabBarBottom/tabBom2_bar.png',
        routerLink: 'busineMainPage',
        isSelected: false
      },
      {
        index: 3,
        name: '选择4',
        img: '../assets/images/tabBarBottom/tabBom3.png',
        bar: '../assets/images/tabBarBottom/tabBom3_bar.png',
        routerLink: 'extendMainPage',
        isSelected: false
      }
    ]
  }
})
