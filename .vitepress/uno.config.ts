// import { defineConfig, presetUno } from 'unocss'
import {
  defineConfig,
  presetAttributify,
  // presetIcons,
  presetUno,
  // presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'
// export default defineConfig({
//   presets: [
//     presetUno()
//   ],
//   // 可选: 添加自定义规则
//   rules: [
//     // 示例: ['custom-rule', { color: 'red' }]
//   ],
//   // 可选: 添加快捷方式
//   shortcuts: {
//     // 示例: 'btn': 'px-4 py-2 rounded-lg'
//   }
// })
export default defineConfig({
  rules: [
      ['w-100%', { width: '100%' }],
      [/^main-bg-(\d+)$/, match => ({ 'background-color': mainColor[match[1]] })],
      [/^main-text-(\d+)$/, match => ({ color: mainColor[match[1]] })],
      [/^compel-bg-(\d+)$/, match => ({ 'background-color': compelColor[match[1]] })],
      [/^compel-text-(\d+)$/, match => ({ color: compelColor[match[1]] })],
      [/^main-text-opacity-(\d+)$/, match => ({ color: `rgba(20, 18, 34, ${match[1]}%)` })],
  ],
  shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
      ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  presets: [
      presetUno(),
      presetAttributify(),
      // presetIcons({
      //     scale: 1.2,
      //     warn: true,
      // }),
      // presetWebFonts({
      //     fonts: {
      //         sans: 'DM Sans',
      //         serif: 'DM Serif Display',
      //         mono: 'DM Mono',
      //     },
      // }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
