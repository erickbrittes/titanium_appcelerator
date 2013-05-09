var Config = {	
	clientName : "NAME USER",
	clientPassword : "PASSWORD",
	position : "-25.8210, -49.4467"// LOCAL CENTER MAP	
}

if(!Config.clientName || !Config.clientPassword) alert("Opps! That didn't work...\n\nTo view the examples you need to provide your authentication credentials. \n\nSee Config.js for intructions.");

/* 
If you are running your own instance of DDS/WebServices, 
you can further edit the configuration with the following properties. 
*/

/** Url for DDS WebServices (String)*/
//deCarta.Core.Configuration.url = "http://d.decarta.com/openls/JSON";
deCarta.Core.Configuration.url = "https://vip5dzsv.decartahws.com/openls/JSON"; //SSL endpoint

/** digital globe keys. These are only valid for use on the devzone. */
deCarta.Core.Configuration.digitalGlobeKey = '2hq3AwyaQsMahDA5vYh1iBTaCMlFojTxLtCuzcIT2Ip7dY5d04VLPJEZvSSQd8u9';
/** Required  for DG3. Only available when projection is set to spherical */
deCarta.Core.Configuration.digitalGlobeConnectID = 'b1f329a9-663b-4f97-a188-b30209a20288';

/** Localizer values */
deCarta.Core.Configuration.language = 'EN';
/** Localizer values */
deCarta.Core.Configuration.country = 'US';
/** Projection system; valid values are= EPSG:3857 (Spherical) or EPSG:3395 (ellipsoidal) */
deCarta.Core.Configuration.projection = 'EPSG:3857'; 
/** Path to image resources */
deCarta.Core.Configuration.imgPath = "img/";
/** This flag can be used for debugging. By setting to <em>true</em>;
 *  all exceptions will be also displayed as alerts. */
deCarta.Core.Configuration.vocalExceptions = true;
/** Base z-index for overlays (int). Use this to control the base css index
 * for any map overlays that are created. */
deCarta.Core.Configuration.baseOvlZ = 100;
/** Tile config used for standard resolution devices (String)*/
deCarta.Core.Configuration.defaultConfig = 'global-decarta';
/** Tile config used for high res devices (String)*/
deCarta.Core.Configuration.defaultHighResConfig = 'global-decarta';
/** Tile Config used in transparent tiles */
deCarta.Core.Configuration.defaultTransparentConfig = 'global-decarta-transparent';
/** Resource timeout; milliseconds */
deCarta.Core.Configuration.resourceTimeout = 20000;
/** Request timeout; milliseconds */
deCarta.Core.Configuration.requestTimeout= 15000;
/** When <em>true</em>; the map will use hardware acceleration; if available */
deCarta.Core.Configuration.useHardwareAcceleration = false;
/* force  port on the tile urls if server does not return a port in the init call */
deCarta.Core.Configuration.imagePort = 0; /*8080*/
/* if true; sets the  TILE image URL to 'image-cache'; else just 'image'  */
deCarta.Core.Configuration.useCache = true;
/* DDS dataset which goes into the TILE image URL */
deCarta.Core.Configuration.dataSet = "navteq-world";
/* apiVersion used if server is in strict mode; else leave it null */
deCarta.Core.Configuration.apiVersion = null;    
deCarta.Core.Configuration.urlVersion = 'auto'; //1;auto
deCarta.Core.Configuration.consolelogXML = false;
/** Use precaching if the tilestore supports it */
deCarta.Core.Configuration.usePrecaching = true;
