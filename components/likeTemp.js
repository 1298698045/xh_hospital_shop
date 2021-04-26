$(function(){
    let str = `
        <div class="likeWrap">
            <div class="slickHead">
                <h3 class="title">猜你喜欢</h3>
            </div>
            <div class="m-slick">
                <div class="polite">
                    <div class="swiper-container swiper-container-two swiper-container-horizontal swiper-container-free-mode">
                        <div class="swiper-wrapper swiperContent">
                        </div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination my-pagination-hidden"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </div>
    `

    $('#likeTemp').append(str);
    let cartStr = '';
        for(let i = 0; i < 8; i++){
            // cartStr += `
            //     <div class="swiper-slide swiper-slide-active weekItem">
            //         <div class="hd_img">
            //             <a href="javascript:;">
            //                 <img src="/img/tp_1.1.png" alt="">
            //             </a>
            //         </div>
            //         <div class="bd">
            //             <div class="prdtTags">
            //                 <span class="m-itemTag ">特价</span>
            //             </div>
            //             <h4 class="name">
            //                 <a href="javascript:;">
            //                     <span>冬暖夏凉智能卧房，趣凡·卧室组合  床+床垫</span>
            //                 </a>
            //             </h4>
            //             <div class="price">
            //                 <span>￥6375</span>
            //                 <span class="counterPrice">
            //                     ￥19999
            //                 </span>
            //                 <a href="javascipt:;" class="f-pr cartIcon"></a>
            //             </div>
            //         </div>
            //     </div>
            // `
            cartStr += '<div class="swiper-slide swiper-slide-active weekItem">'+
'                    <div class="hd_img">'+
'                        <a href="javascript:;">'+
'                            <img src="/img/tp_1.1.png" alt="">'+
'                        </a>'+
'                    </div>'+
'                    <div class="bd">'+
'                        <div class="prdtTags">'+
'                            <span class="m-itemTag ">特价</span>'+
'                        </div>'+
'                        <h4 class="name">'+
'                            <a href="javascript:;">'+
'                                <span>冬暖夏凉智能卧房，趣凡·卧室组合  床+床垫</span>'+
'                            </a>'+
'                        </h4>'+
'                        <div class="price">'+
'                            <span>￥6375</span>'+
'                            <span class="counterPrice">'+
'                                ￥19999'+
'                            </span>'+
'                            <a href="javascipt:;" class="f-pr cartIcon"></a>'+
'                        </div>'+
'                    </div>'+
'                </div>';
        }

        $('.swiperContent').append(cartStr)
        var swiper = new Swiper('.swiper-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 4,
            paginationClickable: true,
            spaceBetween: 30,
            freeMode: true,
            // freeModeMomentum:false,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
        });
})