db={},db.API_URL="http://vps.provolot.com/manila_api/",db.API_CURRENT_URL="get_tab",db.PLAYLIST_URL="get_playlist",db.PLAYLIST="surfclub",db.current_url="",chrome.browserAction.onClicked.addListener(function(e){var o=e.id;console.log("clicked browserAction in tab id: ",o);var n={clicked:!0};chrome.tabs.sendMessage(o,n)});var onChangeLoadPage=function(e){console.log("### loading "+e+"###"),chrome.tabs.query({active:!0},function(o){console.log("sending message"),chrome.tabs.sendMessage(o[0].id,{url:e})})},checkIfNewUrl=function(e){console.log("## checking if new url"),$.ajax({url:db.API_URL+db.API_CURRENT_URL+"?tabroom="+db.PLAYLIST,success:function(o){console.log("url received..:"+o.url),db.current_url!=o.url&&(console.log("new url!"),e(o.url),db.current_url=o.url)},error:function(e){console.log("FAILURE")}})};$(document).ready(function(){console.log("WOWOWO document ready"),window.setInterval(function(){checkIfNewUrl(onChangeLoadPage)},5e3)}),chrome.alarms.onAlarm.addListener(function(e){checkIfNewUrl(onChangeLoadPage)});