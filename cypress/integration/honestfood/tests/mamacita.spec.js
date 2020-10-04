import HomePage from '../pages/HomePage';
import Mamacita from '../pages/Mamacita';

const mamacita = new Mamacita();
const homePage = new HomePage();

describe('select products from mamacita brand and add to cart', () => {

    it ('should navigate to mamacita products list page', () => {
        mamacita.goToMamacitaProductPage();
    })

    it('should add items to cart from Desserts', () => {
        mamacita.addChocoBrownieToCart();
    })

    it('should add items to cart from Nachos', () => {
        mamacita.addPinkColeslawToCart();
    })
})