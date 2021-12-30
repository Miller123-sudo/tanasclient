import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AddEditProductmaster } from './productMaster/AddEditProductmaster';
import { ProductMasterList } from './productMaster/ProductMasterList';
import { AddEditGroupMaster } from './groupMaster/AddEditGroupMaster';
import { GroupMasterList } from './groupMaster/GroupMasterList';
import { AddEditBrand } from './Brand/AddEditBrand';
import { BrandList } from './Brand/BrandList';
import { AddEditFirstCategory } from './FirstCategory/AddEditFirstCategory';
import { FirstCategoryList } from './FirstCategory/FirstCategoryList';
import { AddEditSecondCategory } from './secondCategory/AddEditSecondCategory';
import { SecondCategoryList } from './secondCategory/SecondCategoryList';
import { AddEditSize } from './size/AddEditSize';
import { SizeList } from './size/SizeList';

import React from 'react'

const ItemCategoryRoutes = () => {
    return (
        <div>
            <div id="productMasterRoutes">
                <Route exact path='/itemcategory/productmaster'><AddEditProductmaster /></Route>
                <Route exact path='/itemcategory/productmasterlist'><ProductMasterList /></Route>
                <Route exact path='/itemcategory/productmaster/id:'><AddEditProductmaster /></Route>
            </div>
            <div id="groupMasterRoutes">
                <Route exact path='/itemcategory/groupmaster'><AddEditGroupMaster /></Route>
                <Route exact path='/itemcategory/groupmasterlist'><GroupMasterList /></Route>
                <Route exact path='/itemcategory/groupmaster/id:'><AddEditGroupMaster /></Route>
            </div>
            <div id="brandRoutes">
                <Route exact path='/itemcategory/brand'><AddEditBrand /></Route>
                <Route exact path='/itemcategory/brandlist'><BrandList /></Route>
                <Route exact path='/itemcategory/brand/id:'><AddEditBrand /></Route>
            </div>
            <div id="firstCategoryRoutes">
                <Route exact path='/itemcategory/firstcategory'><AddEditFirstCategory /></Route>
                <Route exact path='/itemcategory/firstcategorylist'><FirstCategoryList /></Route>
                <Route exact path='/itemcategory/firstcategory/id:'><AddEditFirstCategory /></Route>
            </div>
            <div id="secondCategoryRoutes">
                <Route exact path='/itemcategory/secondcategory'><AddEditSecondCategory /></Route>
                <Route exact path='/itemcategory/secondcategorylist'><SecondCategoryList /></Route>
                <Route exact path='/itemcategory/secondcategory/id:'><AddEditSecondCategory /></Route>
            </div>
            <div id="sizeRoutes">
                <Route exact path='/itemcategory/size'><AddEditSize /></Route>
                <Route exact path='/itemcategory/sizelist'><SizeList /></Route>
                <Route exact path='/itemcategory/size/id:'><AddEditSize /></Route>
            </div>
        </div>
    )
}

export default ItemCategoryRoutes

