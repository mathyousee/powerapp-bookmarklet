javascript: (function () { var form = $("iframe").filter(function () { return $(this).css("visibility") == "visible" })[0].contentWindow; window.open("https://web.powerapps.com/apps/00000000-0000-0000-0000-000000000000"+"&record_id="+form.Xrm.Page.data.entity.getId().slice(1, -1), '_blank') })();