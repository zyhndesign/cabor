requirejs.config({baseUrl:"static/js/lib",paths:{app:"../app",page:"../../../pages/custom"},shim:{juicer:{exports:"juicer"},"jquery.cookie":["jquery"]}}),requirejs(["page/custom"],function(i){i.init(),$(".taiMianType").click(function(){i.changeTaiMianList($(this).data("type")),$(".taiMianType").addClass("btnGray"),$(this).removeClass("btnGray")}),$("#taiMianList").on("click","input[type='radio']",function(){i.taiMianItemSelect($(this).val())}),$("#shangFanList").on("click","input[type='radio']",function(){i.shangFanItemSelect($(this).val())}),$("#nextStep").click(function(){i.storeInfo()})});