(function () {

    var sessionDir = window.sessionStorage["webappDirectory"];
    var webAppDirectory;

    if (typeof (sessionDir) != 'undefined') {
        webAppDirectory = sessionDir;
    } else {
        webAppDirectory = "/V16_65/WebApp_36";
        window.sessionStorage.setItem("webappDirectory", webAppDirectory);
    }

    window.sessionStorage.setItem("webappDirectory_started_ver", webAppDirectory);


    function addImportMap() {
        var s = document.createElement('script');
        s.type = 'systemjs-importmap';
        s.id = 'imports';
        s.innerHTML = '{"imports" : {"ng7-wrapper":"https://webapp.pepperi.com/main_ng7wrapper.js"}}';
        document.getElementsByTagName('head')[0].appendChild(s);
        appendHtml(document.body, '<div id="importmap-container"></div>');

    }

    function addScript(src, appendTo, scriptType = null, jsAttrObj = null) {

        var s = document.createElement('script');
        s.src = src;
        s.async = false;

        if(scriptType != null){
            s.type = scriptType;//"text/javascript"; //or type = 'module'
        }
        if(jsAttrObj!=null)
          {
              //s.noModule = jsAttrObj.noModule;
              s.defer = jsAttrObj.defer;
          }
        if (appendTo === 'body') {
            document.body.appendChild(s);
        }
        else if (appendTo === 'head') {
            document.getElementsByTagName('head')[0].appendChild(s);
        }
    }


    function addStyle(src) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = ionicons;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = src;
        link.media = 'all';
        head.appendChild(link);
    }


    function appendHtml(el, str) {
        var div = document.createElement('div');
        div.innerHTML = str;
        while (div.children.length > 0) {
            el.appendChild(div.children[0]);
        }
    }



    var ionicons = 'myCss';  // you could encode the css path itself to generate id..
    if (!document.getElementById(ionicons)) {
        addStyle('https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');
    }

    addScript('https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js', 'head', 'text/javascript');


    if (webAppDirectory.indexOf("/V16_55/") >= 0 || webAppDirectory.indexOf("/V16_60/") >= 0) {//support angular 9, 10,   

        document.body.classList.add("pepperi-theme");
        window.getAssetsURL = () => 'https://webapp.pepperi.com' + webAppDirectory + '/';
        appendHtml(document.body, '<app-root></app-root>');

        addStyle('https://webapp.pepperi.com' + webAppDirectory + '/styles.css');
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/polyfills.js', 'body',null, { defer: true});
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/main.js', 'body',null, { defer: true});
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/scripts.js', 'body', null, { defer: true});
        addImportMap();
    }
    else if (webAppDirectory.indexOf("/V16_65/") >= 0 || webAppDirectory.indexOf("/V17_0/") >= 0) {//support angular 12        
        document.body.classList.add("pepperi-theme");
        window.getAssetsURL = () => 'https://webapp.pepperi.com' + webAppDirectory + '/';
        appendHtml(document.body, '<app-root></app-root>');  

        addStyle('https://webapp.pepperi.com' + webAppDirectory + '/styles.css');
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/polyfills.js', 'body',null, { defer: true});
        //addScript('https://webapp.pepperi.com' + webAppDirectory + '/runtime.js', 'body', null, { defer: true});
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/main.js', 'body',null, { defer: true});
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/scripts.js', 'body', null, { defer: true});
        //addScript('https://webapp.pepperi.com' + webAppDirectory + '/vendors-node_modules_quill_dist_quill_js.js', 'body', null, { defer: true});
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/418.js', 'body', null, { defer: true});
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/161.js', 'body', null, { defer: true});
        //addScript('https://webapp.pepperi.com' + webAppDirectory + '/node_modules_quill_dist_quill_js.js', 'body', null, { defer: true});
        //addScript('https://webapp.pepperi.com' + webAppDirectory + '/src_app_spa-host_spa-host_module_ts.js', 'body', null, { defer: true});

        addImportMap();
    
    }
    else{//support angular 7

        var htmlStr = '<app-root></app-root><div id="users-device-size"><div id="xs" class="hidden-sm hidden-md hidden-lg hidden-xl"></div><div id="sm" class="hidden-xs hidden-md hidden-lg hidden-xl"></div><div id="md" class="hidden-xs hidden-sm hidden-lg hidden-xl">';
        htmlStr += '</div><div id="lg" class="hidden-xs hidden-sm hidden-md hidden-xl"></div><div id="xl" class="hidden-xs hidden-sm hidden-md hidden-lg"></div></div>';
        appendHtml(document.body, htmlStr);

        addStyle('https://webapp.pepperi.com' + webAppDirectory + '/styles.css');
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/runtime.js', 'body', 'text/javascript');
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/polyfills.js', 'body', 'text/javascript');
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/scripts.js', 'body', 'text/javascript');
        addScript('https://webapp.pepperi.com' + webAppDirectory + '/main.js', 'body', 'text/javascript');
    }

    /******load clientapi.js*********/

    addScript('https://webapp.pepperi.com' + webAppDirectory + '/ClientApi/clientapi.js', 'body', 'text/javascript');
    /*************************************************************************************************************/



    var isProdEnv = window.location.href.indexOf('sandbox') === -1 ;
    //if (isProdEnv) {//for PROD only
        ////////////Google Analytics////////////
        (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
                (i[r].q = i[r].q || []).push(arguments)
            }, i[r].l = 1 * new Date(); a = s.createElement(o),
                m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
        })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'googleAnalytics');

        googleAnalytics('create', isProdEnv ? 'UA-25663149-8' : 'UA-25663149-9', 'auto');
        //googleAnalytics('create',  'UA-142668004-1', 'auto', 'clientTracker');//client account, we should get the Tracker ID


        googleAnalytics('set', 'appName', 'Webapp');
        ////////////Google Analytics////////////
    //}
})();
