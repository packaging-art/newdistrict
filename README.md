newdistrict.github.io
=====================   

## 1. General preview/footer 

File: <https://github.com/deadtype/newdistrict/blob/master/index.html>  
Preview: <http://deadtype.ca/newdistrict/>  


This shows full site preview and specifically the footer design.


## 2. Notifications

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/main_navigation/main-nav-cart_notifications.html>  
Preview: <http://deadtype.ca/newdistrict/notifications_demo.html>


## 3. Winery Hero Banner/Navigation

Preview: <http://deadtype.ca/newdistrict>

1. [Winery Title/Navigation](#1-winery-titlenavigation)
2. [Winery Hero Photo Slide](#2-winery-hero-photo-slide)
3. [Location Slide](#3-location-slide)
4. [About Slide](#4-about-slide)
5. [Contact Slide](#5-contact-slide)



### 1. Winery Title/Navigation  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/slider_navigation.html>  
Preview: <http://deadtype.ca/newdistrict/>


### 2. Winery Hero Photo Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/hero_photo_slide.html>  
Preview: <http://deadtype.ca/newdistrict>  


### 3. Location Slide  

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


### 4. About Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/about_slide.html>  
Preview: <http://deadtype.ca/newdistrict/about_slide_demo.html>  

### 5. Contact Slide  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/hero_banner/contact_slide.html>  
Preview: <http://deadtype.ca/newdistrict/contact_slide_demo.html>  


--- 

## 4. Wine Categories/Controls   

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview_info_controls/product_selection_controls.html>  
Preview: <http://deadtype.ca/newdistrict>   


## 5. Wine Category Info  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview_info_controls/product_selection_info.html>  
Preview: <http://deadtype.ca/newdistrict/product_preview.html>  


  
## 6. Grid Product View  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview/product_view_grid.html>  
Preview: <http://deadtype.ca/newdistrict/product_preview.html>  

Preview: <http://deadtype.ca/newdistrict/product_grid_focusedon_banner.html> 



## 7. Banner Product View  

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/product_preview/product_view_banner.html>  
Preview: <http://deadtype.ca/newdistrict>  


## 8. Section Separator 

File: <https://github.com/deadtype/newdistrict/blob/master/_includes/misc/section_separator.html>  
Preview: <http://deadtype.ca/newdistrict>   

A small helper component used to separate sections of content. For example it can be used to segregate production years in the product section.

## 9. Full Product Page  
  
Files:  <https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_controls.html> 
<https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_intro.html>  
<https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_info_section.html>  
<https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_list_entry.html>

Preview: <http://deadtype.ca/newdistrict>   

This page is reached via the more info link in Banner View. The design recycles components used on other pages.  

It starts with fixed [navigation pattern](https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_controls.html) similar to the [Wine Categories/Controls](#4-wine-categoriescontrols) but adjusted for the actions needed on this page:  

The left link duplicates the functionality of the back button. It needs to be be aware of the state of the previous page and reflect if in the wording. For example, — if user reached the 'Full Product Page' from product view focused on 'Summer 2007 Reds Collection' this button would say "Back to Summer 2007 Reds". It should also have a max character limit after it which it would be appended with an ellipsis. This prevents the design breaking in case of excessively long names, while retaining its contextual information.  

The link on the righ is 'add to cart'.  

In the middle once again we have the winery title, which behaves identically to the extensive interactions described in the [Wine Categories/Controls](#4-wine-categoriescontrols). If page is scrolled down, clicking it smooth scrolls the user to the top of the page. If user is at the top of the page, the arrow fades in and clicking either he arrow or the winery title, unhides the [Winery Hero Banner/Navigation](#3-winery-hero-bannernavigation) and smooth scrolls to the top.

----   

Below the fixed navigation we recycle the [Wine Title/Meta info pattern](https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_intro.html) used on the 'Grid Product View' to show the wine title and information such as 'price', 'volume' and 'year of make'. 


This is follow by an image below, this may be the same image used on banner or a different image alltogether. Likely uploaded by B/E it will need to accept two versions: portrait for small screens and landscape for larger. 1x and 2X versions will be needed.

Past the image we get into the 'wine summary', which is simply the extended version of the text that appeared in the 'Banner Product View'.  

Below it are several sections such as 'Tasting Notes', 'Food pairings', 'Additional Notes'([template](https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_info_section.html)) and 'Awards'([template](https://github.com/deadtype/newdistrict/blob/master/_includes/product_full_page/product_full_page_list_entry.html)). These will be editable by winery owners in the backend.  

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
  
---- 

#### The Main Preview  

<http://deadtype.ca/newdistrict/modal_addtocart.html>  


#### Additional Previews showing Summary section variations:  
(not covering all possibilities, but showcasing ways to deal with variations in each 'add to cart' modal section)   


Minimum purchase of a case required (single case)  
   <http://deadtype.ca/newdistrict/modal_addtocart_single_case.html>  

Minimum purchase of a case required with multiple case quantities  
   <http://deadtype.ca/newdistrict/modal_addtocart_multiple_cases.html>  

Initial 'Mix and Match' order  
   <http://deadtype.ca/newdistrict/modal_addtocart_mix.html>  

'Mix and Match' order that does not complete the set  
   <http://deadtype.ca/newdistrict/modal_addtocart_mix_partial.html>  

'Mix and Match' order that completes a set  
   <http://deadtype.ca/newdistrict/modal_addtocart_mix_complete.html>  

'Mix and Match' order that completes a set and still has additional items  
   <http://deadtype.ca/newdistrict/modal_addtocart_mix_overflow.html>  

----  

#### Possible Scenarios:

The following are scenarios which can exist for winery shipping — which influence how the modal will present itself. Research was done by Ben on a number of BC wineries. Winery admin will have to select one of these options (at the moment it appears we will not have comibinations):

1. No constrains. Example — you can order 1 to infinity.  
  
       *This scenario seemed to be present in about a quarter of the wineries. How they actually pack and ship these quantities was not clear.*

2. Minimum order of 'x +', single wine only. Example — you must order at least 6 bottles of a single wine, but can order more so 6 to infinity.  
  
       *This scenario was not present in any of the wineries reviewed. Scenario 3 and 7 are far more likely.*

3. Case based order of a single wine, - 'aka. a multiple of x'. Example, - a single wine must be ordered in sets of 6.  
  
       *This scenario was common but normally overlapped with scenario 7. In one example a particular order was not eligible for mix and match but the minimum of 6 still applied.*

4. Case based order of a single wine, with multiple case sizes. Example, a single wine must be ordered in cases of 6 or 12 or 18, etc. Thus you can order 2*6 + 1*12 + 4 * 18. This would be a winery completely dependent on its packaging.  
  
       *For many wineries the minimum order sizes were largely dependent on packaging sizes. For extremely simple ecommerce systems complete cases were often sold in 6 or 12.*

5. 'Mix + match'  with minimum order of 'x +', aka not multiple based. Example, you must order at least 6 bottles of various wines, but can order more so 6 to infinity.  
  
       *This scenario was not present in any winery reviewed.*

6. 'Mix + match' based on a specific case size. Example you can mix and match wines but they will only ship in sets of 6.  
  
       *This scenario often existed for wineries offering 12 bottle cases.*

7. 'Mix + match' based on several case sizes. You can mix and match wines in sets of 6 and 12. But they will only ship in some sort of combination of those set numbers. Aka 6, 12, 18, 24, etc.  
  
       *The majority of wineries offer this scenario with either 6 or 12 bottle cases.*


#### Behaviour



1. On clicking the 'add to cart' button anywhere on the site the modal window fades-in while simultaneously darkening the background, which should cover the whole site (will need a script for this). An example of this is the ['Super Scaled' transition on this site](http://tympanus.net/Development/ModalWindowEffects/). This is preview of the general look on [New District](http://deadtype.ca/newdistrict/modal_addtocart.html). The file showing the external structure is located [here](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_outer_structure.html).  

2. The only way to exit or cancel out of adding the item to cart is to click the ['Cancel' button](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_cancel.html), which sits below the modal window. The darkened background is transparent and scrollable, showing the site below, but is not clickable. This ensures no accidental clickouts happen, which could confuse the user. An example is at [modal cancel](http://deadtype.ca/newdistrict/modal_addtocart_unconstrained_plusmix.html).  

3. The first part of the modal is the [Image Element](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_title_image_specifics.html) — . The important part is the text at the bottom were we provide contextual information about the wine. Such as its availability (single bottle, case or mix and match), and any specifics about it. 

4. The second part is the [Quantity Section](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_quantity_section.html). Depending on the context it can show contextual information about the wine being added, ex. bottles vs case. If the winery has multiple case sizes then this could expand to numerous fields with labels about and below the field ([Example](http://deadtype.ca/newdistrict/modal_addtocart_multiple_cases.html)).  
  

5. CURRENTLY NOT NEEDED ANYMORE — IGNORE OR READ OUT OF INTEREST (since it appears no winery will have combinations of shipping options, ex. single orders and a specific min-order 'mix and match).  
     
      This is a conditional [Destination Section](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_destination_section.html) which only appears when the product being selected is available for both regular order (unconstrained ordering and case based) and 'mix and match' AND there is an open 'mix and match' present. It provides user with information about the options of adding the product and buttons to select the options.  
  
       The are to put the selected quantity in 'Cart' or into 'Mix and Match' (if the selected quantity is less then or equal to the amount requried to complete the 'mix and match' set). If the selected quantity is more then required to complete the 'mix and match' set then the button would turn into 'Cart + "Mix and Match". This would complete the set and add the overflow bottles to cart. See [Example](http://deadtype.ca/newdistrict/modal_addtocart_unconstrained_plusmix.html).  
  
       The situation is similar for ordering cases. For example when ordering a 6-bottle case and at the same time having a 12-bottle 'mix and match' set open (that must have at least 6 or more bottle spots available, if less then it is impossible to add the case and thus the option should not appear) then this option would present itself as well (See [Preview](http://deadtype.ca/newdistrict/modal_addtocart_single_case_plusmix.html)). Same pattern as above to overflow and multiple case orders, — put all in cart or put some in cart and augment the 'mix and match' set with a suitable case.  
  
       The options described above start unselected. While they are unselected no next section appears for the user. Effectively they can either select one of the options to have the next section appear (fade-in) or use the cancel button to exit the 'add to cart' modal.   

6. The fourth part is the [Summary Section](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_summary_section.html).  
  
       This section provides context about what user has selected:     

       1. Price
       
       2. A summary paragraph ('modal summary') outlining what bottles go where (cart, 'mix and match'), whether the users need to take any actions after, whether a new 'mix and match' set was created.  
         
         See examples for various ways the summary section can appear. For the paragrahs we will likely get B/E to define the wording and then we will replace thin like bottle numbers accoring to context.   

7. The fifth section is the [Action Buttons](https://github.com/deadtype/newdistrict/blob/master/_includes/modal_addtocart/modal_action_section.html).   
        
       This has two buttons: 
       
       1. A conditional 'Checkout' button, which would hide if the user does not have enough bottles in cart to checkout.
         
       2. A 'Explore Our Wines' button which takes user back to the context they were in — what ever page they were on when they clicked 'add to cart'  
  
  

## 11. Cart Page  

Files: <https://github.com/deadtype/newdistrict/blob/master/cart_look.html>   
<https://github.com/deadtype/newdistrict/blob/master/_includes/cart_preview/cart_header.html>
<https://github.com/deadtype/newdistrict/blob/master/_includes/cart_preview/individual_winery_format.html>
<https://github.com/deadtype/newdistrict/blob/master/_includes/cart_preview/single_cart_item.html>

Preview: <http://deadtype.ca/newdistrict/cart_look.html>   


The goal of this page is to lets users quickly look at their cart contents, scroll through and change quantities without leaving the context of where they are.  

Ideally we hide this on page and reveal (slide up from the fixed footer) whenever user clicks the cart numbers/descriptions in the fixed footer (then they can close it by either pressing the hide cart button or the back button). Additionally this needs to have a standalone page — which looks and functions exactly the same, but has a link, which would let users reach it directly.

-----

First the cart shows the overall total, links to overall checkout and contextual text (this does not have to appear if there is nothing neccessary to write)

After the section above we first show the store the user is currently in (if, in future, cart is reached from general marketplace page, this section is not present).

After this is an alphabetical list of other stores (only showing ones with items in them), the current store is omitted from this list (if in general marketplace, all stores with items in it would show in alphabetical order).

-----

Individual items have controls on the to quickly change quantity (should not be able to move below 1 - that is reserved for delete item), update totals - which updates cart total with the changed quantities (this may not be necessary if it is possible to dynamically update numbers arross the page without a hit to performance), and delete item.
  
## Checkout Page   

File: <https://github.com/deadtype/newdistrict/blob/master/checkout.html>
Preview <http://deadtype.ca/newdistrict/checkout.html>

This is a basic structure of the checkout page, will be supplemented with additional entry fields once Ben and Elin will go over the details.  
  
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

File — Edit Order:  <https://github.com/deadtype/newdistrict/blob/master/backend_edit_order.html>   
Preview: <http://deadtype.ca/newdistrict/backend_edit_order.html> 



       
