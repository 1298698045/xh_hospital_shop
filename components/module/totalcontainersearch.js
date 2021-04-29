// if($('#total-container').length>0){
//     $('#total-container').append(`
//     <div class="main-content">
//       <div class="left-logo">
//           协和商城
//       </div>
//       <div class="mi-search">
//           <input type="text" placeholder="搜索 商品/店铺/品牌">
//           <span>搜索</span>
//       </div>
//     </div>`)
//     $(window).scroll(function(){
//         var scrollTop = scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//         if(scrollTop>1000){
//             $('#total-container').addClass('show')
//         }else{
//             $('#total-container').removeClass('show')
//         }
//     })
// }

// if($('#leftnav-container').length>0){
//     $('#leftnav-container').append(`
//         <ul>
//             <li class="red">导航</li>
//             <li><a href="#a1">美丽人生</a></li>
//             <li><a href="#a2">美丽人生</a></li>
//             <li><a href="#a3">美丽人生</a></li>
//             <li><a href="#a4">美丽人生</a></li>
//             <li><a href="#a5">美丽人生</a></li>
//             <li><a href="#a6">美丽人生</a></li>
//             <li><a href="#a7">美丽人生</a></li>
//             <li><a href="#a8">猜你喜欢</a></li>
//             <li onclick="totop()">
//                 <Icon type="up"/>
//                 <span>顶部</span>
//             </li>
//         </ul>`)
//     var interval
//     $(window).scroll(function(){
//         var scrollTop = scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//         if(scrollTop>1000){
//             $('#leftnav-container').addClass('show')
//         }else{
//             $('#leftnav-container').removeClass('show')
//         }
//         if(scrollTop == 0){
//             clearInterval(interval)
//         }
//     })
//     function totop(){
//         if(document.documentElement.scrollTop>0){
//             interval = setInterval(function(){
//                 document.documentElement.scrollTop-=50
//             },10)
//         }
//     }
// }
// if($('#site-nav').length>0){
//     $('#site-nav').append(`
//     <div class="container">
//     <div class="topbar-nav">
//         <a href="/index.html">首页</a>
//     </div>
//     <div class="topbar-cart">
//         <div class="topbar-cart-content">
//         <a href="/page/cart/index.html"  target="_blank">购物车</a>            
//             <span>(0)</span>
//         </div>
//         <div class="topbar-cart-msgempty">
//             购物车中还没有商品，赶紧选购吧！
//         </div>
//     </div>
//     <div class="topbar-info" id="login">
//         <a href="/page/login/login.html"  target="_blank">登录/注册</a>
//     </div>
//     <div class="topbar-info" style="margin-right:10px">
//         <a href="/page/user/index.html" target="_blank">个人中心</a>
//     </div>
//   </div>
//     `)
// }
// if($('.headsearch').length>0){
//     $('.headsearch').append(`
//     <div id="header-search">
//                 <div class="left-logo">
//                     <a href="../../index.html">
//                         <img src="https://img30.360buyimg.com/popshop/jfs/t28594/290/259029626/10859/d32a666c/5bed1cbfN337673b1.jpg" width="240" />
//                     </a>
//                 </div>
//                 <div class="head-sech-content">
//                     <div class="search-input">
//                         <input type="text" placeholder="搜索 商品/品牌/店铺">
//                     </div>
//                     <div class="search-text">搜 索</div>
//                 </div>
//             </div>
//     `)
// }
// if($('#cainixihuan').length>0){
//     $('#cainixihuan').append(`<div class="wonderful"> 
//     <div class="wonderful-line"></div>
//     <div class="wonderful-text">猜你喜欢</div>
// </div>
//   <div class="homelist-template2">
//       <div class="homelist2">
//           <div class="homelist-body">
//               <div class="homelist-body-right">
//                   <ul>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                   </ul>
//                   <ul>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                   </ul>
//                   <ul>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                       <li class="homelist-item">
//                           <div class="homelist-item-img">
//                               <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
//                           </div>
//                           <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
//                           <div class="homelist-item-price">￥ 27</div>
//                       </li>
//                   </ul>
//               </div>
//           </div>
//       </div>
//   </div>
//   <div class="tm-end"></div>
//   `)
// }


function headFun(){
//     let str = `
//     <div class="j-YXComponentTop">
//     <div class="yx-cp-base yx-cp-m-top">
//         <div class="yx-cp-m-siteNav">
//             <div class="yx-cp-row">
//                 <div class="yx-cp-siteNav-l">&nbsp;</div>
//                 <div class="yx-cp-siteNav-r">
//                     <div class="yx-cp-siteNavItem">
//                         <div class="yx-cp-siteNavItemHd">
//                             <div class="j-yx-cp-topLogin" title="网易严选登录">
//                                 <a href="javascript:;">登录/注册</a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="yx-cp-siteNavItem">
//                         <div class="yx-cp-siteNavItemHd pipe">
//                             <a href="/page/user/index.html">我的订单</a>
//                         </div>
//                     </div>
//                     <div class="yx-cp-siteNavItem">
//                         <div class="yx-cp-siteNavItemHd pipe">
//                             <a href="javascript:;">会员</a>
//                         </div>
//                     </div>
//                     <div class="yx-cp-siteNavItem">
//                         <div class="yx-cp-siteNavItemHd pipe">
//                             <a href="javascript:;">甄选家</a>
//                         </div>
//                     </div>
//                     <div class="yx-cp-siteNavItem">
//                         <div class="yx-cp-siteNavItemHd pipe">
//                             <a href="javascript:;">
//                                 <span>企业采购</span>
//                                 <i class="yx-cp-icon-yxtop icon-yxtop-upArrow" style="margin-left:10px;"></i>
//                             </a>
//                         </div>
//                     </div>
//                     <div class="yx-cp-siteNavItem">
//                         <div class="yx-cp-siteNavItemHd pipe">
//                             <a href="javascript:;">
//                                 <span>客户服务</span>
//                                 <i class="yx-cp-icon-yxtop icon-yxtop-upArrow" style="margin-left:10px;"></i>
//                             </a>
//                         </div>
//                     </div>
//                     <div class="yx-cp-siteNavItem">
//                         <div class="yx-cp-siteNavItemHd pipe">
//                             <a href="javascript:;">
//                                 <i class="yx-cp-icon-yxtop icon-yxtop-app" style="margin-left:10px;"></i>
//                                 <span>APP</span>
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="yx-cp-m-funcTab j-yx-cp-m-funcTab">
//             <div class="yx-cp-row">
//                 <div class="row_child">
//                     <a class="yx-cp-tabLogo yx-cp-funcTabFixed-hide" href="/page/home.html" title="网易严选" target="_blank">
//                         <i class="yx-cp-icon-yxtop icon-yxtop-logo"></i>
//                     </a>
//                     <div class="yx-cp-m-search yx-cp-zIndex3">
//                         <input type="text" class="yx-cp-searchInput">
//                         <div class="yx-cp-searchButton">
//                             <span>
//                                 搜索
//                             </span>
//                         </div>
//                     </div>
//                     <div class="yx-cp-m-cartEnterWrap">
//                         <div class="yx-cp-m-cartEnter">
//                             <i class="yx-cp-icon-yxtop icon-yxtop-cart-s"></i>
//                             <span class="yx-cp-cartName">购物车</span>
//                             <i class="j-cart-num j-cart-num2  icon-yxtop-badge">0</i>
//                         </div>
//                         <div class="yx-cp-m-miniCart">
//                             <i class="yx-cp-tw-1"></i>
//                             <i class="yx-cp-tw-2"></i>
//                             <div class="yx-cp-wrap">
//                                 <div class="yx-cp-cartInfo j-yx-cp-cartInfo">
//                                     <div class="yx-cp-cartInfo-inner">
//                                         <div class="yx-cp-cartItem">
//                                             <div class="yx-cp-item yx-cp-item-left">
//                                                 <a href="javascript:;">
//                                                     <img src="/img/tp_1.1.png" alt="">
//                                                 </a>
//                                             </div>
//                                             <div class="yx-cp-item yx-cp-item-middle">
//                                                 <p>
//                                                     <a href="javascript:;" title="办公室早餐神器，天然酵母面包">办公室早餐神器，天然酵母面包</a>
//                                                 </p>
//                                                 <p>
//                                                     <span class="yx-cp-specValue">北海道牛奶风味 270克 </span>
//                                                     <span class="yx-cp-count">
//                                                         <span>x &nbsp;</span>
//                                                         <span>1</span>
//                                                     </span>
//                                                 </p>
//                                             </div>
//                                             <div class="yx-cp-item yx-cp-item-right">
//                                                 <div class="yx-cp-price">
//                                                     ￥16.00
//                                                 </div>
//                                                 <div class="yx-cp-deleteItem">
//                                                     <i class="yx-cp-icon-yxclose icon-yxclose-close11"></i>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div class="yx-cp-cartBottom">
//                                         <div class="yx-cp-totalPrice">
//                                             <span style="color:#999;">商品合计:</span>
//                                             <br>
//                                             <span>￥33.90</span>
//                                         </div>
//                                         <div class="yx-cp-goToCart">
//                                             <a class="yx-cp-btn yx-w-button yx-w-button-primary" href="javascript:;" target="_blank">去购物车结算</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="yx-cp-m-tabNav clearfix">
//                     <li class="yx-cp-tabNav-item  yx-cp-firstItem">
//                         <a class="yx-cp-topLevel" href="/page/home.html" title="首页" target="_blank">首页</a>
//                     </li>
//                     <li class="yx-cp-tabNav-item">
//                         <a class="yx-cp-topLevel" href="/page/item/list.html" title="居家生活" target="_blank">居家生活</a>
//                         <div class="yx-cp-tabNav-dropdown">
//                             <div class="yx-cp-cateGroupList clearfix">
//                                 <div class="yx-cp-cateGroup">
//                                     <div class="yx-cp-cateGroup-name yx-f-text-overflow">
//                                         床品件套
//                                     </div>
//                                     <div class="yx-cp-columnList clearfix">
//                                         <div class="yx-cp-cateColumn">
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床品件套</span>
//                                                 </a>
//                                             </div>
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床品件套</span>
//                                                 </a>
//                                             </div>
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床品件套</span>
//                                                 </a>
//                                             </div>
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床品件套</span>
//                                                 </a>
//                                             </div>
//                                         </div>
//                                         <div class="yx-cp-cateColumn">
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床品件套</span>
//                                                 </a>
//                                             </div>
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床品件套</span>
//                                                 </a>
//                                             </div>
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床品件套</span>
//                                                 </a>
//                                             </div>
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床品件套</span>
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="yx-cp-cateGroup yx-min">
//                                     <div class="yx-cp-cateGroup-name yx-f-text-overflow yx-min">
//                                         被枕褥毯
//                                     </div>
//                                     <div class="yx-cp-columnList clearfix">
//                                         <div class="yx-cp-cateColumn">
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">被枕盖毯</span>
//                                                 </a>
//                                             </div>
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床垫床褥</span>
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div class="yx-cp-cateGroup yx-min">
//                                     <div class="yx-cp-cateGroup-name yx-f-text-overflow yx-min">
//                                         被枕褥毯
//                                     </div>
//                                     <div class="yx-cp-columnList clearfix">
//                                         <div class="yx-cp-cateColumn">
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">被枕盖毯</span>
//                                                 </a>
//                                             </div>
//                                             <div class="yx-cp-cateItem">
//                                                 <a href="javascript:;">
//                                                     <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                                     <span class="yx-cp-subCate-text">床垫床褥</span>
//                                                 </a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </li>
//                     <li class="yx-cp-tabNav-item">
//                         <a class="yx-cp-topLevel" href="javascript:;" title="服饰鞋包" target="_blank">服饰鞋包</a>
//                     </li>
//                     <li class="yx-cp-tabNav-item">
//                         <a class="yx-cp-topLevel" href="javascript:;" title="美食酒水" target="_blank">美食酒水</a>
//                     </li>
//                     <li class="yx-cp-tabNav-item">
//                         <a class="yx-cp-topLevel" href="javascript:;" title="个护清洁" target="_blank">个护清洁</a>
//                     </li>
//                     <li class="yx-cp-tabNav-item">
//                         <a class="yx-cp-topLevel" href="javascript:;" title="母婴亲子" target="_blank">母婴亲子</a>
//                     </li>
//                     <li class="yx-cp-tabNav-item">
//                         <a class="yx-cp-topLevel" href="javascript:;" title="运动旅行" target="_blank">运动旅行</a>
//                     </li>
//                     <li class="yx-cp-tabNav-item">
//                         <a class="yx-cp-topLevel" href="javascript:;" title="数码家电" target="_blank">数码家电</a>
//                     </li>
//                     <li class="yx-cp-tabNav-item">
//                         <a class="yx-cp-topLevel" href="javascript:;" title="严选全球" target="_blank">严选全球</a>
//                     </li>
//                     <li class="yx-cp-tabNav-split yx-cp-funcTabFixed-hide"></li>
//                     <li class="yx-cp-tabNav-item  yx-cp-funcTabFixed-hide">
//                         <a class="yx-cp-topLevel" href="javascript:;" title="为你严选" target="_blank">为你严选</a>
//                     </li>
//                     <li class="yx-cp-tabNav-item">
//                         <a class="yx-cp-topLevel" href="javascript:;" title="众筹" target="_blank">众筹</a>
//                     </li>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
// <div class="yx-cp-m-funcTab-fixed">
//     <div class="head-center">
//         <a class="yx-cp-tabLogo-fixed yx-cp-funcTab-hide" href="javascript:;" title="网易严选" target="_blank">
//             <i class="yx-cp-icon-yxtop icon-yxtop-miniLogo" data-reactid=".0.1.0.1.0"></i>
//         </a>
//         <div class="yx-cp-m-tabNav clearfix">
//             <li class="yx-cp-tabNav-item  yx-cp-firstItem">
//                 <a class="yx-cp-topLevel" href="javascript:;" title="首页" target="_blank">首页</a>
//             </li>
//             <li class="yx-cp-tabNav-item">
//                 <a class="yx-cp-topLevel" href="javascript:;" title="居家生活" target="_blank">居家生活</a>
//                 <div class="yx-cp-tabNav-dropdown">
//                     <div class="yx-cp-cateGroupList clearfix">
//                         <div class="yx-cp-cateGroup">
//                             <div class="yx-cp-cateGroup-name yx-f-text-overflow">
//                                 床品件套
//                             </div>
//                             <div class="yx-cp-columnList clearfix">
//                                 <div class="yx-cp-cateColumn">
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床品件套</span>
//                                         </a>
//                                     </div>
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床品件套</span>
//                                         </a>
//                                     </div>
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床品件套</span>
//                                         </a>
//                                     </div>
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床品件套</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                                 <div class="yx-cp-cateColumn">
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床品件套</span>
//                                         </a>
//                                     </div>
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床品件套</span>
//                                         </a>
//                                     </div>
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床品件套</span>
//                                         </a>
//                                     </div>
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床品件套</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="yx-cp-cateGroup yx-min">
//                             <div class="yx-cp-cateGroup-name yx-f-text-overflow yx-min">
//                                 被枕褥毯
//                             </div>
//                             <div class="yx-cp-columnList clearfix">
//                                 <div class="yx-cp-cateColumn">
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">被枕盖毯</span>
//                                         </a>
//                                     </div>
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床垫床褥</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="yx-cp-cateGroup yx-min">
//                             <div class="yx-cp-cateGroup-name yx-f-text-overflow yx-min">
//                                 被枕褥毯
//                             </div>
//                             <div class="yx-cp-columnList clearfix">
//                                 <div class="yx-cp-cateColumn">
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">被枕盖毯</span>
//                                         </a>
//                                     </div>
//                                     <div class="yx-cp-cateItem">
//                                         <a href="javascript:;">
//                                             <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">
//                                             <span class="yx-cp-subCate-text">床垫床褥</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </li>
//             <li class="yx-cp-tabNav-item">
//                 <a class="yx-cp-topLevel" href="javascript:;" title="服饰鞋包" target="_blank">服饰鞋包</a>
//             </li>
//             <li class="yx-cp-tabNav-item">
//                 <a class="yx-cp-topLevel" href="javascript:;" title="美食酒水" target="_blank">美食酒水</a>
//             </li>
//             <li class="yx-cp-tabNav-item">
//                 <a class="yx-cp-topLevel" href="javascript:;" title="个护清洁" target="_blank">个护清洁</a>
//             </li>
//             <li class="yx-cp-tabNav-item">
//                 <a class="yx-cp-topLevel" href="javascript:;" title="母婴亲子" target="_blank">母婴亲子</a>
//             </li>
//             <li class="yx-cp-tabNav-item">
//                 <a class="yx-cp-topLevel" href="javascript:;" title="运动旅行" target="_blank">运动旅行</a>
//             </li>
//             <li class="yx-cp-tabNav-item">
//                 <a class="yx-cp-topLevel" href="javascript:;" title="数码家电" target="_blank">数码家电</a>
//             </li>
//             <li class="yx-cp-tabNav-item">
//                 <a class="yx-cp-topLevel" href="javascript:;" title="严选全球" target="_blank">严选全球</a>
//             </li>
//         </div>
//         <a href="javascript:;">
//             <i class="yx-cp-icon-yxtop icon-yxtop-search"></i>
//         </a>
//         <a href="javascript:;">
//             <i class="yx-cp-icon-yxtop icon-yxtop-userempty"></i>
//         </a>
//         <div class="cartIcon" style="position: relative;">
//             <a href="javascript:;">
//                 <i class="yx-cp-icon-yxtop icon-yxtop-cart"></i>
//             </a>
//             <div class="yx-cp-m-miniCart">
//                 <i class="yx-cp-tw-1"></i>
//                 <i class="yx-cp-tw-2"></i>
//                 <div class="yx-cp-wrap">
//                     <div class="yx-cp-cartInfo j-yx-cp-cartInfo">
//                         <div class="yx-cp-cartInfo-inner">
//                             <div class="yx-cp-cartItem">
//                                 <div class="yx-cp-item yx-cp-item-left">
//                                     <a href="javascript:;">
//                                         <img src="/img/tp_1.1.png" alt="">
//                                     </a>
//                                 </div>
//                                 <div class="yx-cp-item yx-cp-item-middle">
//                                     <p>
//                                         <a href="javascript:;" title="办公室早餐神器，天然酵母面包">办公室早餐神器，天然酵母面包</a>
//                                     </p>
//                                     <p>
//                                         <span class="yx-cp-specValue">北海道牛奶风味 270克 </span>
//                                         <span class="yx-cp-count">
//                                             <span>x &nbsp;</span>
//                                             <span>1</span>
//                                         </span>
//                                     </p>
//                                 </div>
//                                 <div class="yx-cp-item yx-cp-item-right">
//                                     <div class="yx-cp-price">
//                                         ￥16.00
//                                     </div>
//                                     <div class="yx-cp-deleteItem">
//                                         <i class="yx-cp-icon-yxclose icon-yxclose-close11"></i>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="yx-cp-cartBottom">
//                             <div class="yx-cp-totalPrice">
//                                 <span style="color:#999;">商品合计:</span>
//                                 <br>
//                                 <span>￥33.90</span>
//                             </div>
//                             <div class="yx-cp-goToCart">
//                                 <a class="yx-cp-btn yx-w-button yx-w-button-primary" href="javascript:;" target="_blank">去购物车结算</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//     `
let str = '<div class="j-YXComponentTop">'+
'    <div class="yx-cp-base yx-cp-m-top">'+
'        <div class="yx-cp-m-siteNav">'+
'            <div class="yx-cp-row">'+
'                <div class="yx-cp-siteNav-l">&nbsp;</div>'+
'                <div class="yx-cp-siteNav-r">'+
'                    <div class="yx-cp-siteNavItem">'+
'                        <div class="yx-cp-siteNavItemHd">'+
'                            <div class="j-yx-cp-topLogin" title="网易严选登录">'+
'                                <a href="/page/register.html">登录/注册</a>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
'                    <div class="yx-cp-siteNavItem">'+
'                        <div class="yx-cp-siteNavItemHd pipe">'+
'                            <a href="/page/user/index.html">我的订单</a>'+
'                        </div>'+
'                    </div>'+
'                    <div class="yx-cp-siteNavItem">'+
'                        <div class="yx-cp-siteNavItemHd pipe">'+
'                            <a href="/page/membership/index.html">会员</a>'+
'                        </div>'+
'                    </div>'+
'                    <div class="yx-cp-siteNavItem">'+
'                        <div class="yx-cp-siteNavItemHd pipe">'+
'                            <a href="javascript:;">甄选家</a>'+
'                        </div>'+
'                    </div>'+
'                    <div class="yx-cp-siteNavItem">'+
'                        <div class="yx-cp-siteNavItemHd pipe">'+
'                            <a href="javascript:;">'+
'                                <span>企业采购</span>'+
'                                <i class="yx-cp-icon-yxtop icon-yxtop-upArrow" style="margin-left:10px;"></i>'+
'                            </a>'+
'                        </div>'+
'                    </div>'+
'                    <div class="yx-cp-siteNavItem">'+
'                        <div class="yx-cp-siteNavItemHd pipe">'+
'                            <a href="javascript:;">'+
'                                <span>客户服务</span>'+
'                                <i class="yx-cp-icon-yxtop icon-yxtop-upArrow" style="margin-left:10px;"></i>'+
'                            </a>'+
'                        </div>'+
'                    </div>'+
'                    <div class="yx-cp-siteNavItem">'+
'                        <div class="yx-cp-siteNavItemHd pipe">'+
'                            <a href="javascript:;">'+
'                                <i class="yx-cp-icon-yxtop icon-yxtop-app" style="margin-left:10px;"></i>'+
'                                <span>APP</span>'+
'                            </a>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'        <div class="yx-cp-m-funcTab j-yx-cp-m-funcTab">'+
'            <div class="yx-cp-row">'+
'                <div class="row_child">'+
'                    <a class="yx-cp-tabLogo yx-cp-funcTabFixed-hide" href="/page/home.html" title="网易严选" target="_blank">'+
'                        <i class="yx-cp-icon-yxtop icon-yxtop-logo"></i>'+
'                    </a>'+
'                    <div class="yx-cp-m-search yx-cp-zIndex3">'+
'                        <input type="text" class="yx-cp-searchInput">'+
'                        <div class="yx-cp-searchButton">'+
'                            <span>'+
'                                搜索'+
'                            </span>'+
'                        </div>'+
'                    </div>'+
'                    <div class="yx-cp-m-cartEnterWrap">'+
'                        <div class="yx-cp-m-cartEnter">'+
'                            <i class="yx-cp-icon-yxtop icon-yxtop-cart-s"></i>'+
'                            <span class="yx-cp-cartName">购物车</span>'+
'                            <i class="j-cart-num j-cart-num2  icon-yxtop-badge">0</i>'+
'                        </div>'+
'                        <div class="yx-cp-m-miniCart">'+
'                            <i class="yx-cp-tw-1"></i>'+
'                            <i class="yx-cp-tw-2"></i>'+
'                            <div class="yx-cp-wrap">'+
'                                <div class="yx-cp-cartInfo j-yx-cp-cartInfo">'+
'                                    <div class="yx-cp-cartInfo-inner">'+
'                                        <div class="yx-cp-cartItem">'+
'                                            <div class="yx-cp-item yx-cp-item-left">'+
'                                                <a href="javascript:;">'+
'                                                    <img src="/img/tp_1.1.png" alt="">'+
'                                                </a>'+
'                                            </div>'+
'                                            <div class="yx-cp-item yx-cp-item-middle">'+
'                                                <p>'+
'                                                    <a href="javascript:;" title="办公室早餐神器，天然酵母面包">办公室早餐神器，天然酵母面包</a>'+
'                                                </p>'+
'                                                <p>'+
'                                                    <span class="yx-cp-specValue">北海道牛奶风味 270克 </span>'+
'                                                    <span class="yx-cp-count">'+
'                                                        <span>x &nbsp;</span>'+
'                                                        <span>1</span>'+
'                                                    </span>'+
'                                                </p>'+
'                                            </div>'+
'                                            <div class="yx-cp-item yx-cp-item-right">'+
'                                                <div class="yx-cp-price">'+
'                                                    ￥16.00'+
'                                                </div>'+
'                                                <div class="yx-cp-deleteItem">'+
'                                                    <i class="yx-cp-icon-yxclose icon-yxclose-close11"></i>'+
'                                                </div>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                    <div class="yx-cp-cartBottom">'+
'                                        <div class="yx-cp-totalPrice">'+
'                                            <span style="color:#999;">商品合计:</span>'+
'                                            <br>'+
'                                            <span>￥33.90</span>'+
'                                        </div>'+
'                                        <div class="yx-cp-goToCart">'+
'                                            <a class="yx-cp-btn yx-w-button yx-w-button-primary" href="javascript:;" target="_blank">去购物车结算</a>'+
'                                        </div>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'                <div class="yx-cp-m-tabNav clearfix">'+
'                    <li class="yx-cp-tabNav-item  yx-cp-firstItem">'+
'                        <a class="yx-cp-topLevel" href="/page/home.html" title="首页" target="_blank">首页</a>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-item">'+
'                        <a class="yx-cp-topLevel" href="/page/item/list.html" title="居家生活" target="_blank">居家生活</a>'+
'                        <div class="yx-cp-tabNav-dropdown">'+
'                            <div class="yx-cp-cateGroupList clearfix">'+
'                                <div class="yx-cp-cateGroup">'+
'                                    <div class="yx-cp-cateGroup-name yx-f-text-overflow">'+
'                                        床品件套'+
'                                    </div>'+
'                                    <div class="yx-cp-columnList clearfix">'+
'                                        <div class="yx-cp-cateColumn">'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床品件套</span>'+
'                                                </a>'+
'                                            </div>'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床品件套</span>'+
'                                                </a>'+
'                                            </div>'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床品件套</span>'+
'                                                </a>'+
'                                            </div>'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床品件套</span>'+
'                                                </a>'+
'                                            </div>'+
'                                        </div>'+
'                                        <div class="yx-cp-cateColumn">'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床品件套</span>'+
'                                                </a>'+
'                                            </div>'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床品件套</span>'+
'                                                </a>'+
'                                            </div>'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床品件套</span>'+
'                                                </a>'+
'                                            </div>'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床品件套</span>'+
'                                                </a>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                </div>'+
'                                <div class="yx-cp-cateGroup yx-min">'+
'                                    <div class="yx-cp-cateGroup-name yx-f-text-overflow yx-min">'+
'                                        被枕褥毯'+
'                                    </div>'+
'                                    <div class="yx-cp-columnList clearfix">'+
'                                        <div class="yx-cp-cateColumn">'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">被枕盖毯</span>'+
'                                                </a>'+
'                                            </div>'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床垫床褥</span>'+
'                                                </a>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                </div>'+
'                                <div class="yx-cp-cateGroup yx-min">'+
'                                    <div class="yx-cp-cateGroup-name yx-f-text-overflow yx-min">'+
'                                        被枕褥毯'+
'                                    </div>'+
'                                    <div class="yx-cp-columnList clearfix">'+
'                                        <div class="yx-cp-cateColumn">'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">被枕盖毯</span>'+
'                                                </a>'+
'                                            </div>'+
'                                            <div class="yx-cp-cateItem">'+
'                                                <a href="javascript:;">'+
'                                                    <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png" alt="床品件套">'+
'                                                    <span class="yx-cp-subCate-text">床垫床褥</span>'+
'                                                </a>'+
'                                            </div>'+
'                                        </div>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-item">'+
'                        <a class="yx-cp-topLevel" href="javascript:;" title="服饰鞋包" target="_blank">服饰鞋包</a>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-item">'+
'                        <a class="yx-cp-topLevel" href="javascript:;" title="美食酒水" target="_blank">美食酒水</a>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-item">'+
'                        <a class="yx-cp-topLevel" href="javascript:;" title="个护清洁" target="_blank">个护清洁</a>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-item">'+
'                        <a class="yx-cp-topLevel" href="javascript:;" title="母婴亲子" target="_blank">母婴亲子</a>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-item">'+
'                        <a class="yx-cp-topLevel" href="javascript:;" title="运动旅行" target="_blank">运动旅行</a>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-item">'+
'                        <a class="yx-cp-topLevel" href="javascript:;" title="数码家电" target="_blank">数码家电</a>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-item">'+
'                        <a class="yx-cp-topLevel" href="javascript:;" title="严选全球" target="_blank">严选全球</a>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-split yx-cp-funcTabFixed-hide"></li>'+
'                    <li class="yx-cp-tabNav-item  yx-cp-funcTabFixed-hide">'+
'                        <a class="yx-cp-topLevel" href="javascript:;" title="为你严选" target="_blank">为你严选</a>'+
'                    </li>'+
'                    <li class="yx-cp-tabNav-item">'+
'                        <a class="yx-cp-topLevel" href="javascript:;" title="众筹" target="_blank">众筹</a>'+
'                    </li>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'</div>'+
'<div class="yx-cp-m-funcTab-fixed">'+
'    <div class="head-center">'+
'        <a class="yx-cp-tabLogo-fixed yx-cp-funcTab-hide" href="javascript:;" title="网易严选" target="_blank">'+
'            <i class="yx-cp-icon-yxtop icon-yxtop-miniLogo" data-reactid=".0.1.0.1.0"></i>'+
'        </a>'+
'        <div class="yx-cp-m-tabNav clearfix">'+
'            <li class="yx-cp-tabNav-item  yx-cp-firstItem">'+
'                <a class="yx-cp-topLevel" href="javascript:;" title="首页" target="_blank">首页</a>'+
'            </li>'+
'            <li class="yx-cp-tabNav-item">'+
'                <a class="yx-cp-topLevel" href="javascript:;" title="居家生活" target="_blank">居家生活</a>'+
'                <div class="yx-cp-tabNav-dropdown">'+
'                    <div class="yx-cp-cateGroupList clearfix">'+
'                        <div class="yx-cp-cateGroup">'+
'                            <div class="yx-cp-cateGroup-name yx-f-text-overflow">'+
'                                床品件套'+
'                            </div>'+
'                            <div class="yx-cp-columnList clearfix">'+
'                                <div class="yx-cp-cateColumn">'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床品件套</span>'+
'                                        </a>'+
'                                    </div>'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床品件套</span>'+
'                                        </a>'+
'                                    </div>'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床品件套</span>'+
'                                        </a>'+
'                                    </div>'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床品件套</span>'+
'                                        </a>'+
'                                    </div>'+
'                                </div>'+
'                                <div class="yx-cp-cateColumn">'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床品件套</span>'+
'                                        </a>'+
'                                    </div>'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床品件套</span>'+
'                                        </a>'+
'                                    </div>'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床品件套</span>'+
'                                        </a>'+
'                                    </div>'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床品件套</span>'+
'                                        </a>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                        <div class="yx-cp-cateGroup yx-min">'+
'                            <div class="yx-cp-cateGroup-name yx-f-text-overflow yx-min">'+
'                                被枕褥毯'+
'                            </div>'+
'                            <div class="yx-cp-columnList clearfix">'+
'                                <div class="yx-cp-cateColumn">'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">被枕盖毯</span>'+
'                                        </a>'+
'                                    </div>'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床垫床褥</span>'+
'                                        </a>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                        <div class="yx-cp-cateGroup yx-min">'+
'                            <div class="yx-cp-cateGroup-name yx-f-text-overflow yx-min">'+
'                                被枕褥毯'+
'                            </div>'+
'                            <div class="yx-cp-columnList clearfix">'+
'                                <div class="yx-cp-cateColumn">'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">被枕盖毯</span>'+
'                                        </a>'+
'                                    </div>'+
'                                    <div class="yx-cp-cateItem">'+
'                                        <a href="javascript:;">'+
'                                            <img class="yx-cp-subCate-icon" src="https://yanxuan.nosdn.127.net/6eeaa813566307004ff88f1013bf08fe.png?quality=95&amp;type=webp&amp;imageView" alt="床品件套">'+
'                                            <span class="yx-cp-subCate-text">床垫床褥</span>'+
'                                        </a>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </li>'+
'            <li class="yx-cp-tabNav-item">'+
'                <a class="yx-cp-topLevel" href="javascript:;" title="服饰鞋包" target="_blank">服饰鞋包</a>'+
'            </li>'+
'            <li class="yx-cp-tabNav-item">'+
'                <a class="yx-cp-topLevel" href="javascript:;" title="美食酒水" target="_blank">美食酒水</a>'+
'            </li>'+
'            <li class="yx-cp-tabNav-item">'+
'                <a class="yx-cp-topLevel" href="javascript:;" title="个护清洁" target="_blank">个护清洁</a>'+
'            </li>'+
'            <li class="yx-cp-tabNav-item">'+
'                <a class="yx-cp-topLevel" href="javascript:;" title="母婴亲子" target="_blank">母婴亲子</a>'+
'            </li>'+
'            <li class="yx-cp-tabNav-item">'+
'                <a class="yx-cp-topLevel" href="javascript:;" title="运动旅行" target="_blank">运动旅行</a>'+
'            </li>'+
'            <li class="yx-cp-tabNav-item">'+
'                <a class="yx-cp-topLevel" href="javascript:;" title="数码家电" target="_blank">数码家电</a>'+
'            </li>'+
'            <li class="yx-cp-tabNav-item">'+
'                <a class="yx-cp-topLevel" href="javascript:;" title="严选全球" target="_blank">严选全球</a>'+
'            </li>'+
'        </div>'+
'        <a href="javascript:;">'+
'            <i class="yx-cp-icon-yxtop icon-yxtop-search"></i>'+
'        </a>'+
'        <a href="javascript:;">'+
'            <i class="yx-cp-icon-yxtop icon-yxtop-userempty"></i>'+
'        </a>'+
'        <div class="cartIcon" style="position: relative;">'+
'            <a href="javascript:;">'+
'                <i class="yx-cp-icon-yxtop icon-yxtop-cart"></i>'+
'            </a>'+
'            <div class="yx-cp-m-miniCart">'+
'                <i class="yx-cp-tw-1"></i>'+
'                <i class="yx-cp-tw-2"></i>'+
'                <div class="yx-cp-wrap">'+
'                    <div class="yx-cp-cartInfo j-yx-cp-cartInfo">'+
'                        <div class="yx-cp-cartInfo-inner">'+
'                            <div class="yx-cp-cartItem">'+
'                                <div class="yx-cp-item yx-cp-item-left">'+
'                                    <a href="javascript:;">'+
'                                        <img src="/img/tp_1.1.png" alt="">'+
'                                    </a>'+
'                                </div>'+
'                                <div class="yx-cp-item yx-cp-item-middle">'+
'                                    <p>'+
'                                        <a href="javascript:;" title="办公室早餐神器，天然酵母面包">办公室早餐神器，天然酵母面包</a>'+
'                                    </p>'+
'                                    <p>'+
'                                        <span class="yx-cp-specValue">北海道牛奶风味 270克 </span>'+
'                                        <span class="yx-cp-count">'+
'                                            <span>x &nbsp;</span>'+
'                                            <span>1</span>'+
'                                        </span>'+
'                                    </p>'+
'                                </div>'+
'                                <div class="yx-cp-item yx-cp-item-right">'+
'                                    <div class="yx-cp-price">'+
'                                        ￥16.00'+
'                                    </div>'+
'                                    <div class="yx-cp-deleteItem">'+
'                                        <i class="yx-cp-icon-yxclose icon-yxclose-close11"></i>'+
'                                    </div>'+
'                                </div>'+
'                            </div>'+
'                        </div>'+
'                        <div class="yx-cp-cartBottom">'+
'                            <div class="yx-cp-totalPrice">'+
'                                <span style="color:#999;">商品合计:</span>'+
'                                <br>'+
'                                <span>￥33.90</span>'+
'                            </div>'+
'                            <div class="yx-cp-goToCart">'+
'                                <a class="yx-cp-btn yx-w-button yx-w-button-primary" href="javascript:;" target="_blank">去购物车结算</a>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'</div>';
    $('.headWrap').append(str);
}
headFun();
$(window).scroll(function(){
    var scrollTop = scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if(scrollTop>100){
        $('.j-YXComponentTop').hide()
        $('.yx-cp-m-funcTab-fixed').show()
    }
    if(scrollTop == 0){
        $('.yx-cp-m-funcTab-fixed').hide();
        $('.j-YXComponentTop').show()
    }
})