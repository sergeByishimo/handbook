"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3535],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),o=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(a),v=n,m=c["".concat(s,".").concat(v)]||c[v]||u[v]||r;return a?i.createElement(m,l(l({ref:t},d),{},{components:a})):i.createElement(m,l({ref:t},d))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var o=2;o<r;o++)l[o]=a[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2418:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),l=["components"],p={id:"dev-guide-iframe-functions",title:"Functions"},s=void 0,o={unversionedId:"dev-guide/dev-guide-iframe-functions",id:"dev-guide/dev-guide-iframe-functions",title:"Functions",description:"Use the following API functions to control your embedded Jitsi Meet Conference.",source:"@site/docs/dev-guide/iframe-functions.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-iframe-functions",permalink:"/handbook/docs/dev-guide/dev-guide-iframe-functions",draft:!1,editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/iframe-functions.md",tags:[],version:"current",lastUpdatedAt:1668076146,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{id:"dev-guide-iframe-functions",title:"Functions"},sidebar:"docs",previous:{title:"IFrame API",permalink:"/handbook/docs/dev-guide/dev-guide-iframe"},next:{title:"Commands",permalink:"/handbook/docs/dev-guide/dev-guide-iframe-commands"}},d={},u=[{value:"captureLargeVideoScreenshot",id:"capturelargevideoscreenshot",level:3},{value:"getAvailableDevices",id:"getavailabledevices",level:3},{value:"getContentSharingParticipants",id:"getcontentsharingparticipants",level:3},{value:"getCurrentDevices",id:"getcurrentdevices",level:3},{value:"getDeploymentInfo",id:"getdeploymentinfo",level:3},{value:"getLivestreamUrl",id:"getlivestreamurl",level:3},{value:"getParticipantsInfo",id:"getparticipantsinfo",level:3},{value:"getRoomsInfo",id:"getroomsinfo",level:3},{value:"getVideoQuality",id:"getvideoquality",level:3},{value:"isDeviceChangeAvailable",id:"isdevicechangeavailable",level:3},{value:"isDeviceListAvailable",id:"isdevicelistavailable",level:3},{value:"isMultipleAudioInputSupported",id:"ismultipleaudioinputsupported",level:3},{value:"pinParticipant",id:"pinparticipant",level:3},{value:"resizeLargeVideo",id:"resizelargevideo",level:3},{value:"setAudioInputDevice",id:"setaudioinputdevice",level:3},{value:"setAudioOutputDevice",id:"setaudiooutputdevice",level:3},{value:"setLargeVideoParticipant",id:"setlargevideoparticipant",level:3},{value:"setVideoInputDevice",id:"setvideoinputdevice",level:3},{value:"startRecording",id:"startrecording",level:3},{value:"stopRecording",id:"stoprecording",level:3},{value:"getNumberOfParticipants",id:"getnumberofparticipants",level:3},{value:"getAvatarURL",id:"getavatarurl",level:3},{value:"getDisplayName",id:"getdisplayname",level:3},{value:"getEmail",id:"getemail",level:3},{value:"getIFrame",id:"getiframe",level:3},{value:"isAudioDisabled",id:"isaudiodisabled",level:3},{value:"isAudioMuted",id:"isaudiomuted",level:3},{value:"isVideoMuted",id:"isvideomuted",level:3},{value:"isAudioAvailable",id:"isaudioavailable",level:3},{value:"isVideoAvailable",id:"isvideoavailable",level:3},{value:"isModerationOn",id:"ismoderationon",level:3},{value:"isParticipantForceMuted",id:"isparticipantforcemuted",level:3},{value:"isParticipantsPaneOpen",id:"isparticipantspaneopen",level:3},{value:"isStartSilent",id:"isstartsilent",level:3},{value:"listBreakoutRooms",id:"listbreakoutrooms",level:3},{value:"invite",id:"invite",level:3},{value:"dispose",id:"dispose",level:3}],c={toc:u};function v(e){var t=e.components,a=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Use the following API functions to control your embedded Jitsi Meet Conference."),(0,r.kt)("h3",{id:"capturelargevideoscreenshot"},"captureLargeVideoScreenshot"),(0,r.kt)("p",null,"Captures a screenshot for the participant in the large video view (on stage)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'api.captureLargeVideoScreenshot().then(data => {\n    // data is an Object with only one param, dataURL\n    // data.dataURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABQAA..."\n});\n')),(0,r.kt)("h3",{id:"getavailabledevices"},"getAvailableDevices"),(0,r.kt)("p",null,"Retrieves a list of available devices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.getAvailableDevices().then(devices => {\n    // devices = {\n    //     audioInput: [{\n    //         deviceId: 'ID'\n    //         groupId: 'grpID'\n    //         kind: 'audioinput'\n    //         label: 'label'\n    //     },....],\n    //     audioOutput: [{\n    //         deviceId: 'ID'\n    //         groupId: 'grpID'\n    //         kind: 'audioOutput'\n    //         label: 'label'\n    //     },....],\n    //     videoInput: [{\n    //         deviceId: 'ID'\n    //         groupId: 'grpID'\n    //         kind: 'videoInput'\n    //         label: 'label'\n    //     },....]\n    // }\n    ...\n});\n")),(0,r.kt)("h3",{id:"getcontentsharingparticipants"},"getContentSharingParticipants"),(0,r.kt)("p",null,"Returns a promise which resolves with an array of currently sharing participants ID's."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.getContentSharingParticipants().then(res => {\n    //res.sharingParticipantIds = [particId1, particId2, ...]\n});\n")),(0,r.kt)("h3",{id:"getcurrentdevices"},"getCurrentDevices"),(0,r.kt)("p",null,"Retrieves a list of currently selected devices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.getCurrentDevices().then(devices => {\n    // devices = {\n    //     audioInput: {\n    //         deviceId: 'ID'\n    //         groupId: 'grpID'\n    //         kind: 'videoInput'\n    //         label: 'label'\n    //     },\n    //     audioOutput: {\n    //         deviceId: 'ID'\n    //         groupId: 'grpID'\n    //         kind: 'videoInput'\n    //         label: 'label'\n    //     },\n    //     videoInput: {\n    //         deviceId: 'ID'\n    //         groupId: 'grpID'\n    //         kind: 'videoInput'\n    //         label: 'label'\n    //     }\n    // }\n    ...\n});\n")),(0,r.kt)("h3",{id:"getdeploymentinfo"},"getDeploymentInfo"),(0,r.kt)("p",null,"Retrieves an object containing information about the deployment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.getDeploymentInfo().then(deploymentInfo => {\n    // deploymentInfo = {\n    //     region: 'deployment-region',\n    //     shard: 'deployment-shard',\n    //     ...\n    // }\n    ...\n});\n")),(0,r.kt)("h3",{id:"getlivestreamurl"},"getLivestreamUrl"),(0,r.kt)("p",null,"Retrieves an object containing information about livestreamUrl of the current live stream."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.getLivestreamUrl().then(livestreamData => {\n    // livestreamData = {\n    //     livestreamUrl: 'livestreamUrl'\n    // }\n    ...\n});\n")),(0,r.kt)("h3",{id:"getparticipantsinfo"},"getParticipantsInfo"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DEPRECATED")," Use ",(0,r.kt)("inlineCode",{parentName:"p"},"getRoomsInfo")," instead."),(0,r.kt)("p",null,"Returns an array containing participant information such as ID, display name, avatar URL, and email."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.getParticipantsInfo();\n")),(0,r.kt)("h3",{id:"getroomsinfo"},"getRoomsInfo"),(0,r.kt)("p",null,"Returns an array of available rooms and details of it:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isMainRoom")," (true,false), ",(0,r.kt)("inlineCode",{parentName:"li"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"jid")),(0,r.kt)("li",{parentName:"ul"},"participants: ",(0,r.kt)("inlineCode",{parentName:"li"},"Participant[]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"jid")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"role")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"displayName"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.getRoomsInfo().then(rooms => {\n    ... // see response example structure\n})\n")),(0,r.kt)("p",null,"Response example structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rooms": [\n    {\n      "isMainRoom": true,\n      "id": "room_name@conference.jitsi",\n      "jid": "room_name@conference.jitsi/aaaaaa",\n      "participants": [\n        {\n          "jid": "room_name@conference.jitsi/bbbbbb",\n          "role": "participant",\n          "displayName": "p1",\n          "id": "bbbbbb"\n        },\n        {\n          "jid": "room_name@conference.jitsi/cccccc",\n          "role": "participant",\n          "displayName": "p2",\n          "id": "cccccc"\n        }\n      ]\n    },\n    {\n    "isMainRoom": false,\n    "id": "aaaaaa-bbb-cccc-dddd-qwertyuiopas",\n    "jid": "aaaaaa-bbb-cccc-dddd-qwertyuiopas@breakout.jitsi",\n    "participants": [{\n        "jid": "aaaaaa-cccc-dddd-eeee-qwertyuiopas@jitsi/abcd1234",\n        "role": "moderator",\n        "displayName": "Participant name",\n        "avatarUrl": "",\n        "id": "abcd1234"\n    }]\n    },\n  ]\n}\n')),(0,r.kt)("h3",{id:"getvideoquality"},"getVideoQuality"),(0,r.kt)("p",null,"Returns the current video quality setting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.getVideoQuality();\n")),(0,r.kt)("h3",{id:"isdevicechangeavailable"},"isDeviceChangeAvailable"),(0,r.kt)("p",null,"Resolves to true if the device change is available and to false if not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// The accepted deviceType values are - 'output', 'input' or undefined.\napi.isDeviceChangeAvailable(deviceType).then(isDeviceChangeAvailable => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"isdevicelistavailable"},"isDeviceListAvailable"),(0,r.kt)("p",null,"Resolves to true if the device list is available and to false if not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isDeviceListAvailable().then(isDeviceListAvailable => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"ismultipleaudioinputsupported"},"isMultipleAudioInputSupported"),(0,r.kt)("p",null,"Resolves to true if multiple audio input is supported and to false if not."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isMultipleAudioInputSupported().then(isMultipleAudioInputSupported => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"pinparticipant"},"pinParticipant"),(0,r.kt)("p",null,"Selects the participant ID to be the pinned participant in order to always receive video for this participant."),(0,r.kt)("p",null,"The second parameter is optional and can be used to specify a ",(0,r.kt)("inlineCode",{parentName:"p"},"videoType"),". When multistream support is enabled by passing this parameter you can specify whether the desktop or the camera video for the specified participant should be pinned. The accepted values are ",(0,r.kt)("inlineCode",{parentName:"p"},"'camera'")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"'desktop'"),". The default is ",(0,r.kt)("inlineCode",{parentName:"p"},"'camera'"),". Any invalid values will be ignored and default will be used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.pinParticipant(participantId, videoType);\n")),(0,r.kt)("h3",{id:"resizelargevideo"},"resizeLargeVideo"),(0,r.kt)("p",null,"Resizes the large video container per the provided dimensions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.resizeLargeVideo(width, height);\n")),(0,r.kt)("h3",{id:"setaudioinputdevice"},"setAudioInputDevice"),(0,r.kt)("p",null,"Sets the audio input device to the one with the passed label or ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.setAudioInputDevice(deviceLabel, deviceId);\n")),(0,r.kt)("h3",{id:"setaudiooutputdevice"},"setAudioOutputDevice"),(0,r.kt)("p",null,"Sets the audio output device to the one with the passed label or ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.setAudioOutputDevice(deviceLabel, deviceId);\n")),(0,r.kt)("h3",{id:"setlargevideoparticipant"},"setLargeVideoParticipant"),(0,r.kt)("p",null,"Displays the participant with the given participant ID on the large video."),(0,r.kt)("p",null,"If no participant ID is given, a participant is picked based on the dominant, pinned speaker settings."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.setLargeVideoParticipant(participantId);\n")),(0,r.kt)("h3",{id:"setvideoinputdevice"},"setVideoInputDevice"),(0,r.kt)("p",null,"Sets the video input device to the one with the passed label or ID."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.setVideoInputDevice(deviceLabel, deviceId);\n")),(0,r.kt)("h3",{id:"startrecording"},"startRecording"),(0,r.kt)("p",null,"Starts a file recording or streaming session. See the ",(0,r.kt)("inlineCode",{parentName:"p"},"startRecording")," command for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.startRecording(options);\n")),(0,r.kt)("h3",{id:"stoprecording"},"stopRecording"),(0,r.kt)("p",null,"Stops an ongoing file recording or streaming session. See the ",(0,r.kt)("inlineCode",{parentName:"p"},"stopRecording")," command for more details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.stopRecording(mode);\n")),(0,r.kt)("h3",{id:"getnumberofparticipants"},"getNumberOfParticipants"),(0,r.kt)("p",null,"Returns the number of conference participants:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const numberOfParticipants = api.getNumberOfParticipants();\n")),(0,r.kt)("h3",{id:"getavatarurl"},"getAvatarURL"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DEPRECATED")," Use ",(0,r.kt)("inlineCode",{parentName:"p"},"getRoomsInfo")," instead."),(0,r.kt)("p",null,"Returns a participant's avatar URL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const avatarURL = api.getAvatarURL(participantId);\n")),(0,r.kt)("h3",{id:"getdisplayname"},"getDisplayName"),(0,r.kt)("p",null,"Returns a participant's display name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const displayName = api.getDisplayName(participantId);\n")),(0,r.kt)("h3",{id:"getemail"},"getEmail"),(0,r.kt)("p",null,"Returns a participant's email:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const email = api.getEmail(participantId);\n")),(0,r.kt)("h3",{id:"getiframe"},"getIFrame"),(0,r.kt)("p",null,"Returns the IFrame HTML element which is used to load the Jitsi Meet conference:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const iframe = api.getIFrame();\n")),(0,r.kt)("h3",{id:"isaudiodisabled"},"isAudioDisabled"),(0,r.kt)("p",null,"Returns a Promise which resolves to the current audio disabled state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isAudioDisabled().then(disabled => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"isaudiomuted"},"isAudioMuted"),(0,r.kt)("p",null,"Returns a Promise which resolves to the current audio muted state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isAudioMuted().then(muted => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"isvideomuted"},"isVideoMuted"),(0,r.kt)("p",null,"Returns a Promise which resolves to the current video muted state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isVideoMuted().then(muted => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"isaudioavailable"},"isAudioAvailable"),(0,r.kt)("p",null,"Returns a Promise which resolves to the current audio availability state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isAudioAvailable().then(available => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"isvideoavailable"},"isVideoAvailable"),(0,r.kt)("p",null,"Returns a Promise which resolves to the current video availability state:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isVideoAvailable().then(available => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"ismoderationon"},"isModerationOn"),(0,r.kt)("p",null,"Returns a Promise which resolves to the current moderation state of the given media type."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mediaType")," can be either ",(0,r.kt)("inlineCode",{parentName:"p"},"audio")," (default) or ",(0,r.kt)("inlineCode",{parentName:"p"},"video"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isModerationOn(mediaType).then(isModerationOn => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"isparticipantforcemuted"},"isParticipantForceMuted"),(0,r.kt)("p",null,"Returns a Promise which resolves to the current force mute state of the given participant for the given media type."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"mediaType")," can be either ",(0,r.kt)("inlineCode",{parentName:"p"},"audio")," (default) or ",(0,r.kt)("inlineCode",{parentName:"p"},"video"),"."),(0,r.kt)("p",null,"Force muted - moderation is on and participant is not allowed to unmute the given media type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isParticipantForceMuted(participantId, mediaType).then(isForceMuted => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"isparticipantspaneopen"},"isParticipantsPaneOpen"),(0,r.kt)("p",null,"Returns a Promise which resolves with the current participants pane state."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isParticipantsPaneOpen().then(state => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"isstartsilent"},"isStartSilent"),(0,r.kt)("p",null,"Returns a Promise which resolves with whether meeting was started in view only."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.isStartSilent().then(startSilent => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"listbreakoutrooms"},"listBreakoutRooms"),(0,r.kt)("p",null,"Returns a Promise which resolves with the map of breakout rooms."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.listBreakoutRooms().then(breakoutRooms => {\n    ...\n});\n")),(0,r.kt)("h3",{id:"invite"},"invite"),(0,r.kt)("p",null,"Invite the given array of participants to the meeting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.invite([ {...}, {...}, {...} ]).then(() => {\n    // success\n}).catch(() => {\n    // failure\n});\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," The invitee format in the array depends on the invite service used in the deployment."),(0,r.kt)("p",null,"PSTN invite objects have the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    type: 'phone',\n    number: <string> // the phone number in E.164 format  (ex. +31201234567)\n}\n")),(0,r.kt)("p",null,"SIP invite objects have the following structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n    type: 'sip',\n    address: <string> // the sip address\n}\n")),(0,r.kt)("h3",{id:"dispose"},"dispose"),(0,r.kt)("p",null,"Removes the embedded Jitsi Meet conference:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"api.dispose();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Jitsi recommends removing the conference before the page is unloaded."))}v.isMDXComponent=!0}}]);