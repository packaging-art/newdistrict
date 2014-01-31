newdistrict.github.io
=====================   

### General preview/footer 

File: <https://github.com/deadtype/newdistrict/blob/master/index.html>  
Preview: <http://deadtype.ca/newdistrict/>  


This shows full site preview and specifically the footer design.

## Fixed Article Page

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/misc/footer_infopage.html>  
Preview: <http://deadtype.ca/newdistrict/footer_infopage.html>   

A small helper component used to separate sections of content. For example it can be used to segregate production years in the product section.

### Notifications

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/main_navigation/main-nav-cart_notifications.html>  
Preview: <http://deadtype.ca/newdistrict/notifications_demo.html>


### Winery Hero Banner/Navigation

Preview: <http://deadtype.ca/newdistrict>


### Winery Title/Navigation  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/slider_navigation.html>  
Preview: <http://deadtype.ca/newdistrict/>


### Winery Hero Photo Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/hero_photo_slide.html>  
Preview: <http://deadtype.ca/newdistrict>  


### Location Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/location_slide.html>  
MAP API Call code: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/location_slide_api_call.html>  
MAP Script code: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/location_slide_script_call.html>  
Preview: <http://deadtype.ca/newdistrict/location_slide_demo.html>  

Location slide uses [Mapbox](https://www.mapbox.com/tour/) to generate a map for each winery. This is used instead of Google or Bing maps as it allows for a high level of customization for the map overall (ex. a completely custom tile design for new district) and can have Ben and Elin easily create multiple maps and customize each to fit the brand of the winery (ex. have monochrome maps with the highlight color using the winery brand color).  

After they do the editing in browser, Mapbox will generate code for them to plug into New District. Example:

```
<script>
var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
    .setView([40, -74.50], 9);
</script>
```  


### About Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/about_slide.html>  
Preview: <http://deadtype.ca/newdistrict/about_slide_demo.html>  

### Contact Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/contact_slide.html>  
Preview: <http://deadtype.ca/newdistrict/contact_slide_demo.html>  


## Wine Categories/Controls   

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview_info_controls/product_selection_controls.html>  
Preview: <http://deadtype.ca/newdistrict>   


## Wine Category Info  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview_info_controls/product_selection_info.html>  
Preview: <http://deadtype.ca/newdistrict/product_preview.html>  


  
## Grid Product View  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview/product_view_grid.html>  
Preview: <http://deadtype.ca/newdistrict/product_preview.html>  

Preview: <http://deadtype.ca/newdistrict/product_grid_focusedon_banner.html> 


## Banner Product View  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview/product_view_banner.html>  
Preview: <http://deadtype.ca/newdistrict>  


## Section Separator 

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/misc/section_separator.html>  
Preview: <http://deadtype.ca/newdistrict>   

A small helper component used to separate sections of content. For example it can be used to segregate production years in the product section.

## Full Product Page  
  
Files:  <https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_controls.html> 
<https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_intro.html>  
<https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_info_section.html>  
<https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_list_entry.html>

Preview: <http://deadtype.ca/newdistrict/product_full_page.html>   


## 10. 'Add to Cart' Modal  

Files:  
1. Outer Structure  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_outer_structure.html>  
2. Cancel Button  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_cancel.html>  
3. Section 1: Title/Image/Product Specifics  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_title_image_specifics.html>  
4. Section 2: Quantity  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_quantity_section.html>  
5. Optional Section 3: Destination  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_destination_section.html>  
6. Section 4: Summary  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_summary_section.html>  
7. Section 5: Action Buttons  
   <https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_action_section.html>  

Example: <https://github.com/deadtype/newdistrict/blob/master/modal_addtocart.html>   

## 'Select category' Modal 

File: <https://github.com/deadtype/newdistrict/blob/master/modal_selectcategory.html>  
Preview: <http://deadtype.ca/newdistrict/modal_selectcategory.html>   

## 'Select View' Modal 

File: <https://github.com/deadtype/newdistrict/blob/master/modal_selectview.html>  
Preview: <http://deadtype.ca/newdistrict/modal_selectview.html>   


## Cart Page  

Files: <https://github.com/deadtype/newdistrict/blob/master/cart_overall_look.html>   
Preview: <http://deadtype.ca/newdistrict/cart_overall_look.html>   

## 'Success Order' page 

File: <https://github.com/deadtype/newdistrict/blob/master/order_successful.html>  
Preview: <http://deadtype.ca/newdistrict/order_successful.html> 


# Back End Interface  

Back end inteface is currently split into 4 tabs 'store layout', 'product stock', 'store settings' and 'current orders'. 

As these will have a lots of content, each has additional subtabs. The following preview show the design approach to layout and styling of these.

Every section of the back end interface should have an optional text field (see previews), which Ben and Elin can use to define helper text related to the section. 

## Store layout:   

Consists of two subtabs — 'default options' and 'product order'.  

File — default options — <https://github.com/deadtype/newdistrict/blob/master/backend_design_options.html>  
Preview — <http://deadtype.ca/newdistrict/backend_design_options.html>  

This section provides basic options for the winery owner to adjust the look of the website. Current two options include setting the default preview style (banner or grid) and whether the hero banner section is shown or hidden by default.  

File - product order - <https://github.com/deadtype/newdistrict/blob/master/backend_design_order.html>  
Preview — <http://deadtype.ca/newdistrict/backend_design_order.html>


This section enables winery owner to change the order of the products layed out by default (in either grid or banner view). This is a basic list of of all wines with controls to shift products up and down. Additionaly users should be able to drag and drop the items up and down to rearrange them.

If users switch categories to something else these should generally respect the selected order (ex, if selecting 'summer reds' which only has 3 bottles, the 3 bottles shown should be in the set order), unless the category is based around a specific order (ex. year based arrangement).
 

## Product Stock   

This section has two tabs — 'wines' and 'product order'.

File — All wines: <https://github.com/deadtype/newdistrict/blob/master/backend_stock_wines.html>  
Preview — <http://deadtype.ca/newdistrict/backend_stock_wines.html>  
This section provides a place to see all wines, edit them or add new ones.  

File - Collections: <https://github.com/deadtype/newdistrict/blob/master/backend_stock_categories.html>  
Preview — <http://deadtype.ca/newdistrict/backend_stock_categories.html>  
A place to see the created categories, edit them and add new categories.

This sections can lead to two additional pages: 'Create/Edit Wine' and 'Create/Edit Collection'

File — 'Create/Edit Wine': <https://github.com/deadtype/newdistrict/blob/master/backend_edit_product.html> 
Preview: <http://deadtype.ca/newdistrict/backend_edit_product.html>  
Fields to review/edit product.  

'Create/Edit Collection': <https://github.com/deadtype/newdistrict/blob/master/backend_edit_category.html>  
Preview: <http://deadtype.ca/newdistrict/backend_edit_category.html>

here users can edit category name, description and which wines are in it.


## Store Settings  

File — General info: <https://github.com/deadtype/newdistrict/blob/master/backend_store_general_info.html>   
Preview: <http://deadtype.ca/newdistrict/backend_store_general_info.html>  
Section to edit general store settings.  

File — Shipping: <https://github.com/deadtype/newdistrict/blob/master/backend_store_shipping.html>   
Preview: <http://deadtype.ca/newdistrict/backend_store_shipping.html>  
Section lets users choose shipping related settings.  

File — Your Account: <https://github.com/deadtype/newdistrict/blob/master/backend_store_useraccount.html>   
Preview: <http://deadtype.ca/newdistrict/backend_store_useraccount.html>  
Settings for the currently logged in user.  

File — User Permissions: <https://github.com/deadtype/newdistrict/blob/master/backend_store_userpermissions.html>   
Preview: <http://deadtype.ca/newdistrict/backend_store_userpermissions.html>  
If logged in user has access to setting user accounts and permissions this section is available.  

This section is also lead to Edit/Create User page:

File — Edit/Create User Page:  <https://github.com/deadtype/newdistrict/blob/master/backend_edit_user.html>   
Preview: <http://deadtype.ca/newdistrict/backend_edit_user.html>  


## Current Orders  

File: <https://github.com/deadtype/newdistrict/blob/master/backend_orders.html>   
Preview: <http://deadtype.ca/newdistrict/backend_orders.html>  

This section has a number of tabs for order stages (ex. placed, packed, picked up, delivered, returns and all orders). There is a search field which permists searching products.

Clicking on any order leads to an additional page (same visual laguage as 'Edit User/Product/Category' pages) wher uses can edit the order, print waybills and move order between stages of completion


Edit Order — Status Placed:

File — Edit Order Customer Info:  <https://github.com/deadtype/newdistrict/blob/master/backend_edit_order_customerinfo.html>   
Preview: <http://deadtype.ca/newdistrict/backend_edit_order_customerinfo.html>   

File — Edit Order Order Info:  <https://github.com/deadtype/newdistrict/blob/master/backend_edit_order_orderinfo.html>   
Preview: <http://deadtype.ca/newdistrict/backend_edit_order_orderinfo.html>   


----- 

Edit Order - Status Delivered:   

File — Edit Order Transport Info:   
<https://github.com/deadtype/newdistrict/blob/master/backend_edit_order_transportinfo.html>   
Preview: <http://deadtype.ca/newdistrict/backend_edit_order_transportinfo.html>  

File — Edit Order Shipping Info:   
<https://github.com/deadtype/newdistrict/blob/master/backend_edit_order_shippinginfo.html>   
Preview: <http://deadtype.ca/newdistrict/backend_edit_order_shippinginfo.html>   


----

Edit Order - Status Refund:   

File — Edit Order Refund Info:   
<https://github.com/deadtype/newdistrict/blob/master/backend_edit_order_returninfo.html>   
Preview: <http://deadtype.ca/newdistrict/backend_edit_order_returninfo.html> 





       
