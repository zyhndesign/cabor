define(["jquery","juicer","app/config","jquery.cookie"],function(t,e,a){var l,s,o=0,i=a.allData.custom.taiMian.price,n=a.allData.custom.shangFan.price,c=0;return{init:function(){var l,s,i,n,c,r=JSON.parse(t.cookie("storeInfo"));n=r.style.value,c=r.style.series.value,o=r.style.series.totalMoney,t("#selectStyle").text(a.allData.style[n].name),t("#selectSeries").text(a.allData.style[n].series[c].name),t("#selectShape").text(r.style.series.shape),t("#selectTotalM").text(r.style.series.totalM),t("#selectBaseTotalMoney").text(r.style.series.totalMoney),t("#selectTotalMoney").text(r.style.series.totalMoney),l={list:a.allData.custom.taiMian[1].child},s=t("#taiMianTpl").html(),i=e(s,l),t("#taiMianList").html(i)},changeTaiMianList:function(s){var n,r,y;n={list:a.allData.custom.taiMian[s].child},r=t("#taiMianTpl").html(),y=e(r,n),t("#taiMianList").html(y),l&&(c-=i,o-=i,t("#selectCustomTotalMoney").text(c),t("#selectTotalMoney").text(o)),l=""},taiMianItemSelect:function(e){l||(c+=i,o+=i,t("#selectCustomTotalMoney").text(c),t("#selectTotalMoney").text(o)),l=e},shangFanItemSelect:function(e){s=e,c+=n,o+=n,t("#selectCustomTotalMoney").text(c),t("#selectTotalMoney").text(o)},storeInfo:function(){var e=JSON.parse(t.cookie("storeInfo"));e.custom={taiMian:l,shangFan:s,totalMoney:c},t.cookie("storeInfo",JSON.stringify(e))}}});