/*! Fabrik */
!function(a,b,c){function d(){var a;try{a=navigator.plugins["Shockwave Flash"],a=a.description}catch(b){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")}catch(c){a="0.0"}}return a=a.match(/\d+/g),parseFloat(a[0]+"."+a[1])}var e={},f={};c.flash={trigger:function(a,b,c){setTimeout(function(){var d=e[a];d&&d.trigger("Flash:"+b,c)},0)}},c.runtimes.Flash=c.addRuntime("flash",{getFeatures:function(){return{jpgresize:!0,pngresize:!0,maxWidth:8091,maxHeight:8091,chunks:!0,progress:!0,multipart:!0,multi_selection:!0}},init:function(a,g){function h(){return b.getElementById(a.id+"_flash")}function i(){return l++>5e3?void g({success:!1}):void(f[a.id]||setTimeout(i,1))}var j,k,l=0,m=b.body;return d()<10?void g({success:!1}):(f[a.id]=!1,e[a.id]=a,j=b.getElementById(a.settings.browse_button),k=b.createElement("div"),k.id=a.id+"_flash_container",c.extend(k.style,{position:"absolute",top:"0px",background:a.settings.shim_bgcolor||"transparent",zIndex:99999,width:"100%",height:"100%"}),k.className="plupload flash",a.settings.container&&(m=b.getElementById(a.settings.container),"static"===c.getStyle(m,"position")&&(m.style.position="relative")),m.appendChild(k),function(){var d,e;d='<object id="'+a.id+'_flash" type="application/x-shockwave-flash" data="'+a.settings.flash_swf_url+'" ',c.ua.ie&&(d+='classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '),d+='width="100%" height="100%" style="outline:0"><param name="movie" value="'+a.settings.flash_swf_url+'" /><param name="flashvars" value="id='+escape(a.id)+'" /><param name="wmode" value="transparent" /><param name="allowscriptaccess" value="always" /></object>',c.ua.ie?(e=b.createElement("div"),k.appendChild(e),e.outerHTML=d,e=null):k.innerHTML=d}(),i(),j=k=null,void a.bind("Flash:Init",function(){var d={};h().setFileFilters(a.settings.filters,a.settings.multi_selection),f[a.id]||(f[a.id]=!0,a.bind("UploadFile",function(b,e){var f=b.settings,g=a.settings.resize||{};h().uploadFile(d[e.id],f.url,{name:e.target_name||e.name,mime:c.mimeTypes[e.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream",chunk_size:f.chunk_size,width:g.width,height:g.height,quality:g.quality,multipart:f.multipart,multipart_params:f.multipart_params||{},file_data_name:f.file_data_name,format:/\.(jpg|jpeg)$/i.test(e.name)?"jpg":"png",headers:f.headers,urlstream_upload:f.urlstream_upload})}),a.bind("Flash:UploadProcess",function(a,b){var e=a.getFile(d[b.id]);e.status!=c.FAILED&&(e.loaded=b.loaded,e.size=b.size,a.trigger("UploadProgress",e))}),a.bind("Flash:UploadChunkComplete",function(a,b){var e,f=a.getFile(d[b.id]);e={chunk:b.chunk,chunks:b.chunks,response:b.text},a.trigger("ChunkUploaded",f,e),f.status!=c.FAILED&&h().uploadNextChunk(),b.chunk==b.chunks-1&&(f.status=c.DONE,a.trigger("FileUploaded",f,{response:b.text}))}),a.bind("Flash:SelectFiles",function(b,e){var f,g,h,i=[];for(g=0;g<e.length;g++)f=e[g],h=c.guid(),d[h]=f.id,d[f.id]=h,i.push(new c.File(h,f.name,f.size));i.length&&a.trigger("FilesAdded",i)}),a.bind("Flash:SecurityError",function(b,e){a.trigger("Error",{code:c.SECURITY_ERROR,message:c.translate("Security error."),details:e.message,file:a.getFile(d[e.id])})}),a.bind("Flash:GenericError",function(b,e){a.trigger("Error",{code:c.GENERIC_ERROR,message:c.translate("Generic error."),details:e.message,file:a.getFile(d[e.id])})}),a.bind("Flash:IOError",function(b,e){a.trigger("Error",{code:c.IO_ERROR,message:c.translate("IO error."),details:e.message,file:a.getFile(d[e.id])})}),a.bind("Flash:ImageError",function(b,e){a.trigger("Error",{code:parseInt(e.code,10),message:c.translate("Image error."),file:a.getFile(d[e.id])})}),a.bind("Flash:StageEvent:rollOver",function(d){var e,f;e=b.getElementById(a.settings.browse_button),f=d.settings.browse_button_hover,e&&f&&c.addClass(e,f)}),a.bind("Flash:StageEvent:rollOut",function(d){var e,f;e=b.getElementById(a.settings.browse_button),f=d.settings.browse_button_hover,e&&f&&c.removeClass(e,f)}),a.bind("Flash:StageEvent:mouseDown",function(d){var e,f;e=b.getElementById(a.settings.browse_button),f=d.settings.browse_button_active,e&&f&&(c.addClass(e,f),c.addEvent(b.body,"mouseup",function(){c.removeClass(e,f)},d.id))}),a.bind("Flash:StageEvent:mouseUp",function(d){var e,f;e=b.getElementById(a.settings.browse_button),f=d.settings.browse_button_active,e&&f&&c.removeClass(e,f)}),a.bind("Flash:ExifData",function(b,c){a.trigger("ExifData",a.getFile(d[c.id]),c.data)}),a.bind("Flash:GpsData",function(b,c){a.trigger("GpsData",a.getFile(d[c.id]),c.data)}),a.bind("QueueChanged",function(){a.refresh()}),a.bind("FilesRemoved",function(a,b){var c;for(c=0;c<b.length;c++)h().removeFile(d[b[c].id])}),a.bind("StateChanged",function(){a.refresh()}),a.bind("Refresh",function(d){var e,f,g;h().setFileFilters(a.settings.filters,a.settings.multi_selection),e=b.getElementById(d.settings.browse_button),e&&(f=c.getPos(e,b.getElementById(d.settings.container)),g=c.getSize(e),c.extend(b.getElementById(d.id+"_flash_container").style,{top:f.y+"px",left:f.x+"px",width:g.w+"px",height:g.h+"px"}))}),a.bind("Destroy",function(a){var d;c.removeAllEvents(b.body,a.id),delete f[a.id],delete e[a.id],d=b.getElementById(a.id+"_flash_container"),d&&m.removeChild(d)}),g({success:!0}))}))}})}(window,document,plupload);