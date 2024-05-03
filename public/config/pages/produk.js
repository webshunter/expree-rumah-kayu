export const Produk = async function () {
    return new Promise(async (resolve, reject) => {
        let [{ Grid }, { Card }] = await call([
            import('../component/grid.js')
            , import('../component/card.js')
        ]);

        let dataGrid = [];

        for (let z = 0; z < 1; z++) {
            dataGrid.push(Card({
                image: '/assets/contoh.jpeg'
            }).get())
        }


        let page = el('div').class('p-10').child(
            Grid({
                data: dataGrid
            })
        );

        resolve(page)
    }).catch((e) => {
        console.log(e);
    })
};