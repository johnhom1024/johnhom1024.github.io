/*
 * @Date: 2021-12-01 23:17:54
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 
 */
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import path from 'path';

import { sidebar } from './config/sidebar'
import { navbar } from './config/navbar'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: 'JohnHom的博客',
  description: 'Just playing around',

  themeConfig: {
    logo: '/website/avatar.png',
    navbar,
    sidebar,
  },
  plugins: [
    [
      '@vuepress/register-components',
      {
        // 该目录下文件会被自动注册为 Vue 组件。
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  alias: {
    '@style': path.resolve(__dirname, './public/scss'),
    '@assets': path.resolve(__dirname, './public'),
    '@config': path.resolve(__dirname, './config')
  },
  bundlerConfig: {
    // 查看下方
    scss: {
      // 导入全局的scss变量
      additionalData: `
        @use "@style/base.scss";
      `
    },
  },
})