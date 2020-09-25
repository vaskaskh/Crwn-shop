import {combineReducers} from 'redux';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import   directoryReducer from '../DirectoryDataReducer/directory.reducer';
import shopDataReducer from '../ShopDataReducer/shop.reducer';
import menReducer from '../smallPageData/Men/menReducer';
import sneakersReducer from '../smallPageData/Sneakers/Sneakers';
import womenReducer from './../smallPageData/Women/womenReducer';
import hatsReducer from '../smallPageData/Hats/hatsReducer';
import jacketReducer from '../smallPageData/Jackets/jacketsReducer';


const reducer = combineReducers({
    user: authReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopDataReducer,
    men: menReducer,
    sneakers: sneakersReducer,
    women: womenReducer,
    hats: hatsReducer,
    jackets: jacketReducer,
})

export default reducer;