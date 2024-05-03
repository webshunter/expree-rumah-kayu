Promise.all([
    import('./config/router.js?v=' + Version)
    , import('./config/index.js?v=' + Version)
    , import('./config/component/navbar.js?v=' + Version)
    , import('./config/component/footer.js?v=' + Version)
    , import('./config/menu/component.js?v=' + Version)
    , import('./config/pages/home.js?v=' + Version)
    , import('./config/pages/produk.js?v=' + Version)
    , import('./config/pages/admin.js?v=' + Version)
]).then(async function ([
    {Pages, routes, navigateTo, handleRoute }
    , conf
    , {NavBar}
    , {Footer}
    , ls
    , {Home}
    , {Produk}
    , {Admin}
]) {
    let [{config}, {toolsConfig}] = await conf.conf
    
    const App = document.getElementById('app');
    
    let Container = el('div');

    Container.child(NavBar({
        module : {
            go : navigateTo
        }
    }));

    Container.child(
        el('div')
        .load(function(e){
            
            Pages.Container = e.el;

            routes['/admin'] = function(params){
                Admin().then(function(page){
                    Pages.call(page.get());
                })
            }
            
            routes['/produk/{id}'] = function(params){
                Produk().then(function(page){
                    Pages.call(page.get());
                })
            }
            
            routes['/'] = function(){
                Home().then(function(page){
                    Pages.call(page.get());
                })
            }
            
            handleRoute();

        })
    )

    Container.child(Footer())


    App.appendChild(Container.get())

})
.catch(function(e){
    console.log(e)
})
