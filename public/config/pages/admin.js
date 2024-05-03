export const Admin = async function () {
    return new Promise(async (resolve, reject) => {

        let login = await fetch('/cek-login');
        let {status} = await login.json();

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

        

        let page = status ? el('div').class('p-10').child(
            Grid({
                data: dataGrid
            })
        ) 
        : 
        el('div').child(
            el('div').class('h-[60vh] flex justify-center items-center').child(
                el('div')
                .html('Anda Belum login')
            )
        );

        resolve(page)
    }).catch((e) => {
        console.log(e);
    })
};