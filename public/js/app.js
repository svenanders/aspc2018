webpackJsonp([0],{182:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var s=a(84),o=n(s),r=a(85),i=n(r),c=a(28),l=n(c),u=a(86);(0,u.render)(l.default.createElement(o.default,null),document.getElementById("camera")),(0,u.render)(l.default.createElement(i.default,null),document.getElementById("findFace"))},49:function(e,t,a){"use strict";t.getOrientation=function(e,t){var a=new FileReader;a.onload=function(e){var a=new DataView(e.target.result);if(65496!=a.getUint16(0,!1))return t(-2);for(var n=a.byteLength,s=2;s<n;){var o=a.getUint16(s,!1);if(s+=2,65505==o){if(1165519206!=a.getUint32(s+=2,!1))return t(-1);var r=18761==a.getUint16(s+=6,!1);s+=a.getUint32(s+4,r);var i=a.getUint16(s,r);s+=2;for(var c=0;c<i;c++)if(274==a.getUint16(s+12*c,r))return t(a.getUint16(s+12*c+8,r))}else{if(65280!=(65280&o))break;s+=a.getUint16(s,!1)}}return t(-1)},a.readAsArrayBuffer(e)}},50:function(e,t,a){"use strict";t.resizeImage=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1e3,s=e,o=t,r=e/t;return s>a&&(s=a,o=~~(s/r)),o>n&&(r=e/t,o=n,s=~~(o*r)),{sw:s,sh:o}},t.toImg=function(e){var t=document.createElement("img");return t.src=e,t},t.toPng=function(e){var t=document.createElement("img");return t.src=e.toDataURL("image/png"),t}},51:function(e,t,a){"use strict";t.serializeImage=function(e){var t=";base64,";if(e.indexOf(t)==-1){var a=e.split(","),n=a[0].split(":")[1],s=decodeURIComponent(a[1]);return new Blob([s],{type:n})}for(var o=e.split(t),r=o[0].split(":")[1],i=window.atob(o[1]),c=i.length,l=new Uint8Array(c),u=0;u<c;++u)l[u]=i.charCodeAt(u);return new Blob([l],{type:r})}},84:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(28),l=n(c),u=a(52),d=n(u),f=a(56),p=n(f),m=a(83),g=n(m),h=a(50),v=h.resizeImage,y=(h.toPng,h.toImg,a(49)),b=y.getOrientation,I=a(51),D=I.serializeImage,w=function(e){function t(){s(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={imageLoaded:!1,imageCanvasDisplay:"none",spinnerDisplay:!1,imageCanvasWidth:"28px",imageCanvasHeight:"320px",faceApiText:null,updateFeedback:"",storingFace:!1,userData:"",detectedFaces:null,faceDataFound:!1,currentImg:null},e.putImage=e.putImage.bind(e),e.takePhoto=e.takePhoto.bind(e),e.faceRecog=e.faceRecog.bind(e),e.uploadImage=e.uploadImage.bind(e),e.createPersistedFaceID=e.createPersistedFaceID.bind(e),e.addPersonFace=e.addPersonFace.bind(e),e.createPerson=e.createPerson.bind(e),e.trainGroup=e.trainGroup.bind(e),e}return r(t,e),i(t,[{key:"putImage",value:function(e,t){var a=this.refs.photoCanvas,n=(a.getContext("2d"),e.width),s=e.height,o=v(n,s),r=o.sw,i=o.sh,c=document.createElement("canvas"),l=c.getContext("2d");c.width=r,c.height=i,l.drawImage(e,0,0,r,i),p.default.drawCanvas(a,e,t,r,i,1,0,!1)}},{key:"takePhoto",value:function(e){var t=this,a=(this.refs.camera,e.target.files),n=void 0;if(a&&a.length>0){n=a[0];var s=new FileReader;this.putImage;s.onload=function(e){var a=new Image;a.src=e.target.result;a.onload=function(){b(n,function(e){e<0&&(e=1),t.putImage(a,e),t.setState({imageLoaded:!0,currentImg:a.src}),t.faceRecog()})}},s.readAsDataURL(n)}}},{key:"faceRecog",value:function(){var e=this,t=this.refs.photoCanvas;t.toDataURL();this.setState({spinnerDisplay:!0}),g.default.post("https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false").send(D(this.state.currentImg)).set("Content-Type","application/octet-stream").set("Ocp-Apim-Subscription-Key","286fe5360c85463bac4315dff365fdc2").set("processData",!1).set("Accept","application/json").end(function(t,a){if(t||!a.ok)console.error(t);else{var n=JSON.stringify(a.body);console.log(n);var s=a.body.map(function(e){return{faceId:e.faceId,target:""+e.faceRectangle.top+","+e.faceRectangle.left+","+e.faceRectangle.width+","+e.faceRectangle.height,faceRectangle:e.faceRectangle}});e.setState({detectedFaces:s,faceApiText:n,faceDataFound:!0,spinnerDisplay:!1})}})}},{key:"createPersistedFaceID",value:function(){var e=this,t=this.refs.photoCanvas;t.toDataURL(),this.state.userData;return new Promise(function(t,a){g.default.post("https://westus.api.cognitive.microsoft.com/face/v1.0/facelists/aspc2017faces/persistedFaces").send(D(e.state.currentImg)).set("Content-Type","application/octet-stream").set("Ocp-Apim-Subscription-Key","286fe5360c85463bac4315dff365fdc2").set("Accept","application/json").end(function(e,a){e||!a.ok?console.error(e):t(a.body)})})}},{key:"createPerson",value:function(){var e=this;this.state.userData;return new Promise(function(t,a){g.default.post("https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/aspc2017facegroup/persons").send({name:e.refs.inputname.value,userData:e.refs.inputdata.value}).set("Ocp-Apim-Subscription-Key","286fe5360c85463bac4315dff365fdc2").set("Content-Type","application/json").set("Accept","application/json").end(function(e,a){if(e||!a.ok)console.error(e);else{JSON.stringify(a.body);t(a.body.personId)}})})}},{key:"trainGroup",value:function(){this.state.userData;return new Promise(function(e,t){g.default.post("https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/aspc2017facegroup/train").set("Ocp-Apim-Subscription-Key","286fe5360c85463bac4315dff365fdc2").set("Content-Type","application/json").set("Accept","application/json").end(function(t,a){t||!a.ok?alert(t):e(a)})})}},{key:"addPersonFace",value:function(e,t){var a=this;this.state.userData;return new Promise(function(t,n){g.default.post("https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/aspc2017facegroup/persons/"+e+"/persistedFaces").send(D(a.state.currentImg)).set("Content-Type","application/octet-stream").set("Ocp-Apim-Subscription-Key","286fe5360c85463bac4315dff365fdc2").set("Accept","application/json").end(function(e,a){if(e||!a.ok)console.error(e);else{var n=JSON.stringify(a.body);t(n)}})})}},{key:"uploadImage",value:function(){var e=this;this.setState({spinnerDisplay:!0,storingFace:!0,updateFeedback:"Creating a face ID"}),this.createPersistedFaceID().then(function(t){e.setState({updateFeedback:"Creating a Person"}),e.createPerson().then(function(a){e.setState({updateFeedback:"Adding the face to the person"}),e.addPersonFace(a).then(function(n){e.setState({updateFeedback:"Training the new list"}),e.trainGroup().then(function(){e.setState({updateFeedback:""}),console.log("success"),console.log("persistedFaceId",t),console.log("personId",a),console.log("persistedGroupFaceId",n),window.location.href="/#uploaded"})}).catch(function(e){alert(JSON.stringify(e))})}).catch(function(e){alert(JSON.stringify(e))})}).catch(function(e){alert(JSON.stringify(e))})}},{key:"render",value:function(){var e=(0,d.default)({hidden:!this.state.faceDataFound,cameraFrame:!0}),t=(0,d.default)({hidden:this.state.imageLoaded}),a=(0,d.default)({hidden:!this.state.spinnerDisplay}),n=(0,d.default)({spinner:!0}),s=(0,d.default)({hidden:!this.state.faceDataFound,metaInput:!0}),o=(0,d.default)({hidden:this.state.storingFace}),r=(0,d.default)({hidden:!this.state.storingFace&&""!==this.state.updateFeedback});return l.default.createElement("div",null,l.default.createElement("h1",{className:"center"},"ADD A PERSON"),l.default.createElement("div",{className:"center"},l.default.createElement("div",{className:t},l.default.createElement("label",{className:"camera-snap"},l.default.createElement("img",{src:"/assets/camera_bw.svg",className:"icon-camera",alt:"Click to snap a photo or select an image from your photo roll"}),l.default.createElement("input",{type:"file",label:"Camera",onChange:this.takePhoto,ref:"camera",className:"camera",accept:"image/*"}))),l.default.createElement("div",{className:r},this.state.updateFeedback),l.default.createElement("div",{className:a},l.default.createElement("div",{className:n},l.default.createElement("div",{className:"double-bounce1"}),l.default.createElement("div",{className:"double-bounce2"}))),l.default.createElement("div",{className:o},l.default.createElement("div",{className:e},l.default.createElement("canvas",{ref:"photoCanvas",className:"imageCanvas"},"Your browser does not support the HTML5 canvas tag.")),l.default.createElement("div",{className:s},l.default.createElement("label",{htmlFor:"name"},"NAME"),l.default.createElement("input",{id:"name",type:"text",ref:"inputname",className:"darkInput"}),l.default.createElement("label",{htmlFor:"metadata"},"METADATA"),l.default.createElement("textarea",{id:"metadata",ref:"inputdata",className:"darkInput"}),l.default.createElement("label",{htmlFor:"addBtn"}),l.default.createElement("button",{id:"addBtn",className:"darkButton",onClick:this.uploadImage,value:"add"},"ADD")))))}}]),t}(l.default.Component);t.default=w},85:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(28),l=n(c),u=a(52),d=n(u),f=a(56),p=n(f),m=a(83),g=n(m),h=a(50),v=h.resizeImage,y=(h.toPng,h.toImg,a(49)),b=y.getOrientation,I=a(51),D=I.serializeImage,w=function(e){function t(){s(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={imageLoaded:!1,imageCanvasDisplay:"none",clickedTheButton:!1,spinnerDisplay:!1,imageCanvasWidth:"28px",imageCanvasHeight:"320px",faceApiText:null,userData:"",faceDataFound:!1,currentImg:null},e.putImage=e.putImage.bind(e),e.takePhoto=e.takePhoto.bind(e),e.faceIdentify=e.faceIdentify.bind(e),e.verifyFaces=e.verifyFaces.bind(e),e.uploadImage=e.uploadImage.bind(e),e.getPersonDetails=e.getPersonDetails.bind(e),e}return r(t,e),i(t,[{key:"putImage",value:function(e,t){var a=this.refs.photoCanvas,n=(a.getContext("2d"),e.width),s=e.height,o=v(n,s),r=o.sw,i=o.sh,c=document.createElement("canvas"),l=c.getContext("2d");c.width=r,c.height=i,l.drawImage(e,0,0,r,i),p.default.drawCanvas(a,e,t,r,i,1,0,!1)}},{key:"takePhoto",value:function(e){var t=this,a=(this.refs.camera,e.target.files),n=void 0;if(a&&a.length>0){n=a[0];var s=new FileReader;this.putImage;s.onload=function(e){var a=new Image;a.src=e.target.result;a.onload=function(){b(n,function(e){e<0&&(e=1),t.putImage(a,e),t.setState({imageLoaded:!0,clickedTheButton:!0,currentImg:a.src}),t.faceIdentify()})}},s.readAsDataURL(n)}}},{key:"faceIdentify",value:function(){var e=this,t=this.refs.photoCanvas;t.toDataURL();this.setState({spinnerDisplay:!0,imageLoaded:!1}),g.default.post("https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false").send(D(this.state.currentImg)).set("Content-Type","application/octet-stream").set("Ocp-Apim-Subscription-Key","286fe5360c85463bac4315dff365fdc2").set("processData",!1).set("Accept","application/json").end(function(t,a){if(t||!a.ok)console.error(t);else{var n=a.body.map(function(e){return e.faceId});e.setState({faces:n}),n.length?e.verifyFaces(n):e.setState({personDetails:{userData:"No faces found"},spinnerDisplay:!1,imageLoaded:!0})}})}},{key:"verifyFaces",value:function(e){var t=this;this.setState({imageLoaded:!1});var a={personGroupId:"aspc2017facegroup",faceIds:e,maxNumOfCandidatesReturned:1,confidenceThreshold:.5};g.default.post("https://westus.api.cognitive.microsoft.com/face/v1.0/identify").send(a).set("Content-Type","application/json").set("Ocp-Apim-Subscription-Key","286fe5360c85463bac4315dff365fdc2").set("Accept","application/json").end(function(e,a){e||!a.ok?console.error(e):a.body.length<0?t.setState({personDetails:{userData:"No match found"},spinnerDisplay:!1,imageLoaded:!0}):a.body[0].candidates.length?t.getPersonDetails(a.body[0].candidates[0].personId):t.setState({personDetails:{userData:"Face found, but it was not recognized"},spinnerDisplay:!1,imageLoaded:!0})})}},{key:"getPersonDetails",value:function(e){var t=this;g.default.get("https://westus.api.cognitive.microsoft.com/face/v1.0/persongroups/aspc2017facegroup/persons/"+e).set("Ocp-Apim-Subscription-Key","286fe5360c85463bac4315dff365fdc2").set("Accept","application/json").end(function(e,a){e||!a.ok?console.error(e):t.setState({personDetails:a.body,spinnerDisplay:!1,imageLoaded:!0})})}},{key:"uploadImage",value:function(){var e=this.refs.photoCanvas,t=(e.toDataURL(),this.state.userData);g.default.post("https://westus.api.cognitive.microsoft.com/face/v1.0/facelists/aspc2017faces/persistedFaces?userData="+JSON.stringify(t)).send(D(this.state.currentImg)).set("Content-Type","application/octet-stream").set("Ocp-Apim-Subscription-Key","286fe5360c85463bac4315dff365fdc2").set("Accept","application/json").end(function(e,t){if(e||!t.ok)console.error(e);else{var a=JSON.stringify(t.body);console.log(a),alert(a),window.location.href="/#uploaded"}})}},{key:"render",value:function(){var e=(0,d.default)({hidden:!this.state.imageLoaded,cameraFrame:!0}),t=(0,d.default)({hidden:this.state.clickedTheButton}),a=(0,d.default)({hidden:!this.state.spinnerDisplay}),n=(0,d.default)({spinner:!0}),s=(0,d.default)({hidden:this.state.spinnerDisplay,metaInput:!0});return l.default.createElement("div",null,l.default.createElement("h1",{className:"center light-color"},"IDENTIFY"),l.default.createElement("div",{className:"center"},l.default.createElement("div",{className:t},l.default.createElement("label",{className:"camera-snap"},l.default.createElement("img",{src:"/assets/camera.svg",className:"icon-camera",alt:"Click to snap a photo or select an image from your photo roll"}),l.default.createElement("input",{type:"file",label:"Camera",onChange:this.takePhoto,ref:"camera",className:"camera",accept:"image/*"}))),l.default.createElement("div",{className:a},l.default.createElement("div",{className:n},l.default.createElement("div",{className:"double-bounce1"}),l.default.createElement("div",{className:"double-bounce2"}))),l.default.createElement("div",{className:e},l.default.createElement("canvas",{ref:"photoCanvas",className:"imageCanvas"},"Your browser does not support the HTML5 canvas tag.")),l.default.createElement("div",{className:s},l.default.createElement("div",{className:"personDetails"},this.state.personDetails&&this.state.personDetails.name),l.default.createElement("div",{className:"personDetails"},this.state.personDetails&&this.state.personDetails.userData))))}}]),t}(l.default.Component);t.default=w}},[182]);