export const Admin = async function () {
    return new Promise(async (resolve, reject) => {

        let login = await fetch('/cek-login');
        let {status} = await login.json();

        let [
            { NavBarAction }
            , { FooterAction }
            , { Grid }
            , { Card }
        ] = await call([
            import('../component/navbar.js?v='+Version)
            , import('../component/footer.js?v='+Version)
            , import('../component/grid.js?v=' + Version)
            , import('../component/card.js?v=' + Version)
        ]);

        let dataGrid = [];

        for (let z = 0; z < 1; z++) {
            dataGrid.push(Card({
                image: '/assets/contoh.jpeg'
            }).get())
        }

        let page = null;
        
        /*
        if(!status){
            page = el('div').child(
                el('div').class('h-[60vh] flex justify-center items-center').child(
                    el('div')
                        .html('Anda Belum login')
                )
            );
        }
        */

        // if(status){
            NavBarAction.hide();
            FooterAction.hide();
            page = el('div')
            .child(
                el('style').html(`
                    <style type="text/css">
                        .icons-flex {
                        background-size: 70% 65% !important;
                        height: 15px;
                        width: 17px;
                        opacity: 0.9;
                        }
                        .icon-dir-row {
                        background: url("./img/flex-dir-row.png") no-repeat center;
                        }
                        .icon-dir-row-rev {
                        background: url("./img/flex-dir-row-rev.png") no-repeat center;
                        }
                        .icon-dir-col {
                        background: url("./img/flex-dir-col.png") no-repeat center;
                        }
                        .icon-dir-col-rev {
                        background: url("./img/flex-dir-col-rev.png") no-repeat center;
                        }
                        .icon-just-start{
                        background: url("./img/flex-just-start.png") no-repeat center;
                        }
                        .icon-just-end{
                        background: url("./img/flex-just-end.png") no-repeat center;
                        }
                        .icon-just-sp-bet{
                        background: url("./img/flex-just-sp-bet.png") no-repeat center;
                        }
                        .icon-just-sp-ar{
                        background: url("./img/flex-just-sp-ar.png") no-repeat center;
                        }
                        .icon-just-sp-cent{
                        background: url("./img/flex-just-sp-cent.png") no-repeat center;
                        }
                        .icon-al-start{
                        background: url("./img/flex-al-start.png") no-repeat center;
                        }
                        .icon-al-end{
                        background: url("./img/flex-al-end.png") no-repeat center;
                        }
                        .icon-al-str{
                        background: url("./img/flex-al-str.png") no-repeat center;
                        }
                        .icon-al-center{
                        background: url("./img/flex-al-center.png") no-repeat center;
                        }

                        [data-tooltip]::after {
                        background: rgba(51, 51, 51, 0.9);
                        }

                        .gjs-pn-commands {
                        min-height: 40px;
                        }

                        #gjs-sm-float {
                            display: none;
                        }

                        .gjs-logo-version {
                        background-color: #756467;
                        }

                        .gjs-pn-btn.gjs-pn-active {
                        box-shadow: none;
                        }

                        .CodeMirror {
                        min-height: 450px;
                        margin-bottom: 8px;
                        }
                        .grp-handler-close {
                        background-color: transparent;
                        color: #ddd;
                        }

                        .grp-handler-cp-wrap {
                        border-color: transparent;
                        }
                    </style>
                `)
            )
            .child(
                el('div').html(`
                <div style="display: none">
                    <div class="gjs-logo-cont">
                        <a href="https://grapesjs.com"><img class="gjs-logo" src="img/grapesjs-logo-cl.png"></a>
                        <div class="gjs-logo-version"></div>
                    </div>
                </div>
                <div class="ad-cont">
                    <!-- <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=grapesjscom" id="_carbonads_js"></script> -->
                    <div id="native-carbon"></div>
                    <script async type="text/javascript" src="./js/carbon-v2.js"></script>
                </div>
                `)
            )
            .child(
                el('div')
                .html(`<header class="header-banner">
        <div class="container-width">
          <div class="logo-container">
            <div class="logo">GrapesJS</div>
          </div>
          <nav class="menu">
            <div class="menu-item">BUILDER</div>
            <div class="menu-item">TEMPLATE</div>
            <div class="menu-item">WEB</div>
          </nav>
          <div class="clearfix"></div>
          <div class="lead-title">Build your templates without coding</div>
          <div class="sub-lead-title">All text blocks could be edited easily with double clicking on it. You can create new text blocks with the command from the left panel</div>
          <div class="lead-btn">Hover me</div>
        </div>
      </header>
`)
                .id('gjs-'+Date.now())
                .height('100vh')
                .load(function(e){
                    let id = e.el.id;
    
                    // grapes script
    
                    let lp = './img/';
                    let plp = 'https://via.placeholder.com/350x250/';
                    let images = [
                        lp + 'team1.jpg',
                        lp + 'team2.jpg',
                        lp + 'team3.jpg',
                        plp + '78c5d6/fff',
                        plp + '459ba8/fff',
                        plp + '79c267/fff',
                        plp + 'c5d647/fff',
                        plp + 'f28c33/fff',
                        plp + 'e868a2/fff',
                        plp + 'cc4360/fff',
                        lp + 'work-desk.jpg',
                        lp + 'phone-app.png',
                        lp + 'bg-gr-v.png'
                    ];
    
                    let editor = grapesjs.init({
                        height: '100vh',
                        container: '#'+id,
                        fromElement: true,
                        showOffsets: true,
                        assetManager: {
                            embedAsBase64: true,
                            assets: images
                        },
                        selectorManager: { componentFirst: true },
                        styleManager: {
                            sectors: [{
                                name: 'General',
                                properties: [
                                    {
                                        extend: 'float',
                                        type: 'radio',
                                        default: 'none',
                                        options: [
                                            { value: 'none', className: 'fa fa-times' },
                                            { value: 'left', className: 'fa fa-align-left' },
                                            { value: 'right', className: 'fa fa-align-right' }
                                        ],
                                    },
                                    'display',
                                    { extend: 'position', type: 'select' },
                                    'top',
                                    'right',
                                    'left',
                                    'bottom',
                                ],
                            }, {
                                name: 'Dimension',
                                open: false,
                                properties: [
                                    'width',
                                    {
                                        id: 'flex-width',
                                        type: 'integer',
                                        name: 'Width',
                                        units: ['px', '%'],
                                        property: 'flex-basis',
                                        toRequire: 1,
                                    },
                                    'height',
                                    'max-width',
                                    'min-height',
                                    'margin',
                                    'padding'
                                ],
                            }, {
                                name: 'Typography',
                                open: false,
                                properties: [
                                    'font-family',
                                    'font-size',
                                    'font-weight',
                                    'letter-spacing',
                                    'color',
                                    'line-height',
                                    {
                                        extend: 'text-align',
                                        options: [
                                            { id: 'left', label: 'Left', className: 'fa fa-align-left' },
                                            { id: 'center', label: 'Center', className: 'fa fa-align-center' },
                                            { id: 'right', label: 'Right', className: 'fa fa-align-right' },
                                            { id: 'justify', label: 'Justify', className: 'fa fa-align-justify' }
                                        ],
                                    },
                                    {
                                        property: 'text-decoration',
                                        type: 'radio',
                                        default: 'none',
                                        options: [
                                            { id: 'none', label: 'None', className: 'fa fa-times' },
                                            { id: 'underline', label: 'underline', className: 'fa fa-underline' },
                                            { id: 'line-through', label: 'Line-through', className: 'fa fa-strikethrough' }
                                        ],
                                    },
                                    'text-shadow'
                                ],
                            }, {
                                name: 'Decorations',
                                open: false,
                                properties: [
                                    'opacity',
                                    'border-radius',
                                    'border',
                                    'box-shadow',
                                    'background', // { id: 'background-bg', property: 'background', type: 'bg' }
                                ],
                            }, {
                                name: 'Extra',
                                open: false,
                                buildProps: [
                                    'transition',
                                    'perspective',
                                    'transform'
                                ],
                            }, {
                                name: 'Flex',
                                open: false,
                                properties: [{
                                    name: 'Flex Container',
                                    property: 'display',
                                    type: 'select',
                                    defaults: 'block',
                                    list: [
                                        { value: 'block', name: 'Disable' },
                                        { value: 'flex', name: 'Enable' }
                                    ],
                                }, {
                                    name: 'Flex Parent',
                                    property: 'label-parent-flex',
                                    type: 'integer',
                                }, {
                                    name: 'Direction',
                                    property: 'flex-direction',
                                    type: 'radio',
                                    defaults: 'row',
                                    list: [{
                                        value: 'row',
                                        name: 'Row',
                                        className: 'icons-flex icon-dir-row',
                                        title: 'Row',
                                    }, {
                                        value: 'row-reverse',
                                        name: 'Row reverse',
                                        className: 'icons-flex icon-dir-row-rev',
                                        title: 'Row reverse',
                                    }, {
                                        value: 'column',
                                        name: 'Column',
                                        title: 'Column',
                                        className: 'icons-flex icon-dir-col',
                                    }, {
                                        value: 'column-reverse',
                                        name: 'Column reverse',
                                        title: 'Column reverse',
                                        className: 'icons-flex icon-dir-col-rev',
                                    }],
                                }, {
                                    name: 'Justify',
                                    property: 'justify-content',
                                    type: 'radio',
                                    defaults: 'flex-start',
                                    list: [{
                                        value: 'flex-start',
                                        className: 'icons-flex icon-just-start',
                                        title: 'Start',
                                    }, {
                                        value: 'flex-end',
                                        title: 'End',
                                        className: 'icons-flex icon-just-end',
                                    }, {
                                        value: 'space-between',
                                        title: 'Space between',
                                        className: 'icons-flex icon-just-sp-bet',
                                    }, {
                                        value: 'space-around',
                                        title: 'Space around',
                                        className: 'icons-flex icon-just-sp-ar',
                                    }, {
                                        value: 'center',
                                        title: 'Center',
                                        className: 'icons-flex icon-just-sp-cent',
                                    }],
                                }, {
                                    name: 'Align',
                                    property: 'align-items',
                                    type: 'radio',
                                    defaults: 'center',
                                    list: [{
                                        value: 'flex-start',
                                        title: 'Start',
                                        className: 'icons-flex icon-al-start',
                                    }, {
                                        value: 'flex-end',
                                        title: 'End',
                                        className: 'icons-flex icon-al-end',
                                    }, {
                                        value: 'stretch',
                                        title: 'Stretch',
                                        className: 'icons-flex icon-al-str',
                                    }, {
                                        value: 'center',
                                        title: 'Center',
                                        className: 'icons-flex icon-al-center',
                                    }],
                                }, {
                                    name: 'Flex Children',
                                    property: 'label-parent-flex',
                                    type: 'integer',
                                }, {
                                    name: 'Order',
                                    property: 'order',
                                    type: 'integer',
                                    defaults: 0,
                                    min: 0
                                }, {
                                    name: 'Flex',
                                    property: 'flex',
                                    type: 'composite',
                                    properties: [{
                                        name: 'Grow',
                                        property: 'flex-grow',
                                        type: 'integer',
                                        defaults: 0,
                                        min: 0
                                    }, {
                                        name: 'Shrink',
                                        property: 'flex-shrink',
                                        type: 'integer',
                                        defaults: 0,
                                        min: 0
                                    }, {
                                        name: 'Basis',
                                        property: 'flex-basis',
                                        type: 'integer',
                                        units: ['px', '%', ''],
                                        unit: '',
                                        defaults: 'auto',
                                    }],
                                }, {
                                    name: 'Align',
                                    property: 'align-self',
                                    type: 'radio',
                                    defaults: 'auto',
                                    list: [{
                                        value: 'auto',
                                        name: 'Auto',
                                    }, {
                                        value: 'flex-start',
                                        title: 'Start',
                                        className: 'icons-flex icon-al-start',
                                    }, {
                                        value: 'flex-end',
                                        title: 'End',
                                        className: 'icons-flex icon-al-end',
                                    }, {
                                        value: 'stretch',
                                        title: 'Stretch',
                                        className: 'icons-flex icon-al-str',
                                    }, {
                                        value: 'center',
                                        title: 'Center',
                                        className: 'icons-flex icon-al-center',
                                    }],
                                }]
                            }
                            ],
                        },
                        plugins: [
                            'gjs-blocks-basic',
                            'grapesjs-plugin-forms',
                            'grapesjs-component-countdown',
                            'grapesjs-plugin-export',
                            'grapesjs-tabs',
                            'grapesjs-custom-code',
                            'grapesjs-touch',
                            'grapesjs-parser-postcss',
                            'grapesjs-tooltip',
                            'grapesjs-tui-image-editor',
                            'grapesjs-typed',
                            'grapesjs-style-bg',
                            'grapesjs-preset-webpage',
                        ],
                        pluginsOpts: {
                            'gjs-blocks-basic': { flexGrid: true },
                            'grapesjs-tui-image-editor': {
                                script: [
                                    // 'https://cdnjs.cloudflare.com/ajax/libs/fabric.js/1.6.7/fabric.min.js',
                                    'https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js',
                                    'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js',
                                    'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js'
                                ],
                                style: [
                                    'https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css',
                                    'https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css',
                                ],
                            },
                            'grapesjs-tabs': {
                                tabsBlock: { category: 'Extra' }
                            },
                            'grapesjs-typed': {
                                block: {
                                    category: 'Extra',
                                    content: {
                                        type: 'typed',
                                        'type-speed': 40,
                                        strings: [
                                            'Text row one',
                                            'Text row two',
                                            'Text row three',
                                        ],
                                    }
                                }
                            },
                            'grapesjs-preset-webpage': {
                                modalImportTitle: 'Import Template',
                                modalImportLabel: '<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',
                                modalImportContent: function (editor) {
                                    return editor.getHtml() + '<style>' + editor.getCss() + '</style>'
                                },
                            },
                        },
                    });
    
                    editor.I18n.addMessages({
                        en: {
                            styleManager: {
                                properties: {
                                    'background-repeat': 'Repeat',
                                    'background-position': 'Position',
                                    'background-attachment': 'Attachment',
                                    'background-size': 'Size',
                                }
                            },
                        }
                    });
    
                    let pn = editor.Panels;
                    let modal = editor.Modal;
                    let cmdm = editor.Commands;
    
                    // Update canvas-clear command
                    cmdm.add('canvas-clear', function () {
                        if (confirm('Are you sure to clean the canvas?')) {
                            editor.runCommand('core:canvas-clear')
                            setTimeout(function () { localStorage.clear() }, 0)
                        }
                    });
    
                    // Add info command
                    let mdlClass = 'gjs-mdl-dialog-sm';
                    let infoContainer = document.getElementById('info-panel');
    
                    cmdm.add('open-info', function () {
                        let mdlDialog = document.querySelector('.gjs-mdl-dialog');
                        mdlDialog.className += ' ' + mdlClass;
                        infoContainer.style.display = 'block';
                        modal.setTitle('About this demo');
                        modal.setContent(infoContainer);
                        modal.open();
                        modal.getModel().once('change:open', function () {
                            mdlDialog.className = mdlDialog.className.replace(mdlClass, '');
                        })
                    });
    
                    pn.addButton('options', {
                        id: 'open-info',
                        className: 'fa fa-question-circle',
                        command: function () { editor.runCommand('open-info') },
                        attributes: {
                            'title': 'About',
                            'data-tooltip-pos': 'bottom',
                        },
                    });
    
    
                    // Simple warn notifier
                    let origWarn = console.warn;
                    toastr.options = {
                        closeButton: true,
                        preventDuplicates: true,
                        showDuration: 250,
                        hideDuration: 150
                    };
                    console.warn = function (msg) {
                        if (msg.indexOf('[undefined]') == -1) {
                            toastr.warning(msg);
                        }
                        origWarn(msg);
                    };
    
    
                    // Add and beautify tooltips
                    [['sw-visibility', 'Show Borders'], ['preview', 'Preview'], ['fullscreen', 'Fullscreen'],
                    ['export-template', 'Export'], ['undo', 'Undo'], ['redo', 'Redo'],
                    ['gjs-open-import-webpage', 'Import'], ['canvas-clear', 'Clear canvas']]
                        .forEach(function (item) {
                            pn.getButton('options', item[0]).set('attributes', { title: item[1], 'data-tooltip-pos': 'bottom' });
                        });
                    [['open-sm', 'Style Manager'], ['open-layers', 'Layers'], ['open-blocks', 'Blocks']]
                        .forEach(function (item) {
                            pn.getButton('views', item[0]).set('attributes', { title: item[1], 'data-tooltip-pos': 'bottom' });
                        });
                    let titles = document.querySelectorAll('*[title]');
    
                    for (let i = 0; i < titles.length; i++) {
                        let el = titles[i];
                        let title = el.getAttribute('title');
                        title = title ? title.trim() : '';
                        if (!title)
                            break;
                        el.setAttribute('data-tooltip', title);
                        el.setAttribute('title', '');
                    }
    
    
                    // Store and load events
                    editor.on('storage:load', function (e) { console.log('Loaded ', e) });
                    editor.on('storage:store', function (e) { console.log('Stored ', e) });
    
    
                    // Do stuff on load
                    editor.on('load', function () {
                        let $ = grapesjs.$;
    
                        // Show borders by default
                        pn.getButton('options', 'sw-visibility').set({
                            command: 'core:component-outline',
                            'active': true,
                        });
    
                        // Show logo with the version
                        let logoCont = document.querySelector('.gjs-logo-cont');
                        document.querySelector('.gjs-logo-version').innerHTML = 'v' + grapesjs.version;
                        let logoPanel = document.querySelector('.gjs-pn-commands');
                        logoPanel.appendChild(logoCont);
    
    
                        // Load and show settings and style manager
                        let openTmBtn = pn.getButton('views', 'open-tm');
                        openTmBtn && openTmBtn.set('active', 1);
                        let openSm = pn.getButton('views', 'open-sm');
                        openSm && openSm.set('active', 1);
    
                        // Remove trait view
                        pn.removeButton('views', 'open-tm');
    
                        // Add Settings Sector
                        let traitsSector = $('<div class="gjs-sm-sector no-select">' +
                            '<div class="gjs-sm-sector-title"><span class="icon-settings fa fa-cog"></span> <span class="gjs-sm-sector-label">Settings</span></div>' +
                            '<div class="gjs-sm-properties" style="display: none;"></div></div>');
                        let traitsProps = traitsSector.find('.gjs-sm-properties');
                        traitsProps.append($('.gjs-traits-cs'));
                        $('.gjs-sm-sectors').before(traitsSector);
                        traitsSector.find('.gjs-sm-sector-title').on('click', function () {
                            let traitStyle = traitsProps.get(0).style;
                            let hidden = traitStyle.display == 'none';
                            if (hidden) {
                                traitStyle.display = 'block';
                            } else {
                                traitStyle.display = 'none';
                            }
                        });
    
                        // Open block manager
                        let openBlocksBtn = editor.Panels.getButton('views', 'open-blocks');
                        openBlocksBtn && openBlocksBtn.set('active', 1);
    
                        // Move Ad
                        $('#gjs').append($('.ad-cont'));
                    });
    
                    // grapes end script
    
                }) 
            )
        // }
        
        if(page){
            resolve(page)
        }else{
            reject({status: 'Page error'})
        }
    }).catch((e) => {
        reject({error: e})
    })
};