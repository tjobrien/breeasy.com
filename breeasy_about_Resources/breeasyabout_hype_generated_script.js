//	HYPE.documents["breeasy_about"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "breeasy_about_Resources";
	var documentName = "breeasy_about";
	var documentLoaderFilename = "breeasyabout_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",aS:"i",d:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"10":{aV:8,w:"Grow",x:"visible",a:453,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"4",k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",aT:8,j:"absolute",t:16,b:300,e:"0.000000",u:"italic",G:"#000000",aU:8},"8":{aV:8,w:"Communicate",x:"visible",a:88,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"2",k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",aT:8,j:"absolute",t:16,b:300,e:"0.000000",u:"italic",G:"#000000",aU:8},"6":{o:"content-box",w:"",h:"Breeasy3.jpg",x:"visible",a:16,q:"100% 100%",b:16,j:"absolute",r:"inline",c:568,k:"div",z:"1",d:268},"9":{aV:8,w:"Manage",x:"visible",a:291,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"3",k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",aT:8,j:"absolute",t:16,b:300,e:"0.000000",u:"italic",G:"#000000",aU:8},"11":{aV:8,w:"It's Easy With Breeasy!",x:"visible",a:198,Z:"break-word",y:"preserve",aS:8,r:"inline",z:"5",k:"div",s:"Verdana,Tahoma,Geneva,Sans-Serif",aT:8,j:"absolute",t:16,b:349,e:"0.000000",u:"italic",G:"#000000",aU:8}},timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"0",t:-0.033333361,d:0.033333361,i:"e",e:"0.000000",r:1,s:"0.000000",o:"8"},{f:"0",t:0,d:1,i:"e",e:"1.000000",s:"0.000000",o:"8"},{f:"2",t:1,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"9"},{f:"2",t:2,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{f:"2",t:3,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"11"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:4}},sceneIndex:0,perspective:"600px",oid:"5",onSceneAnimationCompleteAction:{type:1,transition:6,sceneSymbol:3},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("breeasyabout_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(1);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

