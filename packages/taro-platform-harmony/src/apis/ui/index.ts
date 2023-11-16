import { Animation } from './animation'

import type Taro from '@tarojs/api'

export const createAnimation = (option: Taro.createAnimation.Option) => {
  return new Animation(option)
}

export * from './pull-down-refresh'
