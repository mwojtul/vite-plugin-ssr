export * from 'libframe-docs/_default.page.server'
import { setFrame } from 'libframe-docs/setFrame'
import { headings, headingsWithoutLink } from '../headings'
import { projectInfo } from '../utils'
import logoUrl from '../icons/vite-plugin-ssr.svg'
import React from 'react'
import { NavHeader, NavHeaderMobile } from './NavHeader'

setFrame({
  projectInfo,
  logoUrl,
  // TODO: remove @ts-ignore once https://github.com/vikejs/libframe/pull/1 is merged
  // @ts-ignore
  algolia: {
    // @ts-ignore
    appId: 'MUXG1ZE9F6',
    apiKey: '8d5986fca9ba9110bcbbfc51263de88b',
    indexName: 'vite-pluginssr',
  },
  navHeaderMobile: <NavHeaderMobile />,
  navHeader: <NavHeader />,
  headings,
  headingsWithoutLink,
})
