<script setup>
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css'
import GC from '@grapecity/spread-sheets'
import '@grapecity/spread-sheets-shapes'
import '@grapecity/spread-sheets-charts'
import '@grapecity/spread-sheets-slicers'
import '@grapecity/spread-sheets-print'
import '@grapecity/spread-sheets-barcode'
import '@grapecity/spread-sheets-pdf'
import '@grapecity/spread-sheets-pivot-addon'
import '@grapecity/spread-sheets-tablesheet'
import '@grapecity/spread-sheets-ganttsheet'
import '@grapecity/spread-sheets-formula-panel'
import '@grapecity/spread-sheets-reportsheet-addon'
import '@grapecity/spread-sheets-io'
import '@grapecity/spread-excelio'
import '@grapecity/spread-sheets-resources-zh'
import { GcSpreadSheets } from '@grapecity/spread-sheets-vue'

GC.Spread.Common.CultureManager.culture('zh-cn')

let spread
let sheet
const initSpread = (value) => {
  spread = value
  sheet = spread.getActiveSheet()

  sheet
    .getCell(0, 0)
    .value('当前为 Spread 示例，点击下方链接跳转到 Designer 示例')
  let linkStyle = new GC.Spread.Sheets.CellTypes.HyperLink()
  linkStyle.text('跳转到 Designer 示例')
  sheet.setCellType(1, 0, linkStyle)
  sheet
    .getCell(1, 0)
    .value('./designer')
    .hAlign(GC.Spread.Sheets.HorizontalAlign.left)
  sheet.autoFitColumn(0)

  // 为方便调试引入下方代码，生产环境请移除
  window.GC = GC
  window.spread = spread
  window.sheet = sheet
}
</script>

<template>
  <gc-spread-sheets id="spread-container" @workbookInitialized="initSpread" />
</template>

<style scoped>
#spread-container {
  width: 100vw;
  height: 100vh;
}
</style>
