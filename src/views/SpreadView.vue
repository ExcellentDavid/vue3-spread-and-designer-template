<script setup>
import '@grapecity-software/spread-sheets/styles/gc.spread.sheets.excel2013white.css'
import GC from '@grapecity-software/spread-sheets'
import '@grapecity-software/spread-sheets-shapes'
import '@grapecity-software/spread-sheets-charts'
import '@grapecity-software/spread-sheets-slicers'
import '@grapecity-software/spread-sheets-print'
import '@grapecity-software/spread-sheets-barcode'
import '@grapecity-software/spread-sheets-pdf'
import '@grapecity-software/spread-sheets-pivot-addon'
import '@grapecity-software/spread-sheets-tablesheet'
import '@grapecity-software/spread-sheets-ganttsheet'
import '@grapecity-software/spread-sheets-formula-panel'
import '@grapecity-software/spread-sheets-reportsheet-addon'
import '@grapecity-software/spread-sheets-io'
import '@grapecity-software/spread-excelio'
import '@grapecity-software/spread-sheets-resources-zh'
import { GcSpreadSheets } from '@grapecity-software/spread-sheets-vue'
import { ref, onMounted } from "vue";

GC.Spread.Common.CultureManager.culture('zh-cn')

// 引用SpreadJS的宿主Dom元素
const spreadContainerRef = ref(null)

// 这里不要使用ref
let spread
let sheet

onMounted(() => {
  spread = new GC.Spread.Sheets.Workbook(spreadContainerRef.value)
  sheet = spread.getActiveSheet()

  // 为方便调试引入下方代码，生产环境请移除
  window.GC = GC
  window.spread = spread
  window.sheet = sheet

  // 业务逻辑，不一定写在这里，可以写在其他地方
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
})
</script>

<template>
  <div id="spread-container" ref="spreadContainerRef"></div>
</template>

<style scoped>
#spread-container {
  width: 100vw;
  height: 100vh;
}
</style>
