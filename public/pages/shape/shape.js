define(["jquery","juicer","app/config","jquery.cookie"],function(e,t,s){var l=0,a=0,i=1,o=1,r="",n=1,c=1,h=1,y=1;return{init:function(){var l,a,r,n=location.hash,c=JSON.parse(e.cookie("storeInfo"));i=c.style.value,o=n.substr(1),e("#selectStyle").text(s.allData.style[i].name),e("#selectSeries").text(s.allData.style[i].series[o].name),e("#effectImage").attr("src",s.allData.style[i].series[o].effectImage),r={list:s.objToArray(s.allData.style[i].series[o].menXing)},l=e("#menXingTpl").html(),a=t(l,r),e("#menXingList").html(a),r={list:s.objToArray(s.allData.style[i].series[o].menSe)},l=e("#menSeTpl").html(),a=t(l,r),e("#menSeList").html(a),r={list:s.objToArray(s.allData.style[i].series[o].taiSe)},l=e("#taiSeTpl").html(),a=t(l,r),e("#taiSeList").html(a),r={list:s.objToArray(s.allData.style[i].series[o].laShou)},l=e("#laShouTpl").html(),a=t(l,r),e("#laShouList").html(a),e("#size li").hide()},storeInfo:function(){var t=JSON.parse(e.cookie("storeInfo"));t.style.series={value:o},t.style.series.shape=r,t.style.series.totalM=l,t.style.series.totalMoney=a,t.style.series.menSe=c,t.style.series.menXing=n,t.style.series.taiSe=h,t.style.series.laShou=y,e.cookie("storeInfo",JSON.stringify(t))},storeValue:function(e,t){switch(e){case"menXing":n=t;break;case"menSe":c=t;break;case"taiSe":h=t;break;case"laShou":y=t}},selectShape:function(t){switch(e("#size input").val(""),e("#totalMValue").text(""),t){case"一字型":e("#size li").hide(),e("#size li:eq(0)").show();break;case"L字型":e("#size li").show(),e("#size li:eq(2)").hide();break;case"U字型":e("#size li").show()}r=t,e("#selectShape").text(t)},getTotalM:function(){l=0,e("#size input").each(function(){l+=Number(e(this).val())}),a=l*Number(s.allData.style[i].series[o].price),e("#selectTotalM").text(l),e(".selectTotalMoney").text(a),e("#totalMValue").text(l)}}});