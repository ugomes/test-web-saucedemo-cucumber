export default class InventoryPage {
    constructor(page){
        this.page = page
        this.title = '.title'
    }

    async verificarPaginaInventario(){
        await this.page.waitForSelector(this.title)
        const tiltuloSecao = await this.page.textContent(this.title)
        if (!tiltuloSecao.includes('Products')){
            throw new Error('Pagina de Inventario nao encontrada')
        }
    }   

}