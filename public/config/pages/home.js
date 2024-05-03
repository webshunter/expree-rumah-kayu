export const Home = async function () {
   return new Promise(async (resolve, reject)=>{
       let [{ navigateTo }, { Grid }, { Card }, { Carousel }] = await call([
            import('../router.js?v='+Version)
            ,import('../component/grid.js?v='+Version)
            ,import('../component/card.js?v='+Version)
            ,import('../component/carousel.js?v='+Version)
        ]);

        let dataGrid = [];

        for (let z = 0; z < 6; z++) {
            dataGrid.push(Card({
                image: '/assets/contoh.jpeg'
                ,link : '/produk/kursi-pahatan-kayu-jati'
                , module: {
                    go: navigateTo
                }
            }).get())
        }


        let page = el('div').class('p-10')
        .child(
            el('div')
            .class('mb-[20px]')
            .child(
                Carousel()
            )
        )
        .child(
            el('div').class('mb-3')
            .child(
                el('h1').class('text-xl font-bold').text('Produk Baru')
            )
        )
        .child(
            Grid({
                data: dataGrid
            })
        );
        
        resolve(page)
   }).catch((e)=>{
    console.log(e);
   })
};