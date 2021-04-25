$(function(){
    let pageFooter = document.querySelector('#pageFooter');
//     let str = `
//     <div class="footer">
//     <div class="yx-cp-m-foot">
//         <div class="footer_top">
//             <div class="yx-cp-row">
//                 <div class="yx-cp-item">
//                     <div>
//                         <h4 class="hd">客户服务</h4>
//                         <div class="box">
//                             <div class="box_item">
//                                 <div class="icon icon_l"></div>
//                                 <p class="name">在线客服</p>
//                             </div>
//                             <div class="box_item">
//                                 <div class="icon icon_r"></div>
//                                 <p class="name">在线客服</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="yx-cp-item">
//                     <div>
//                         <h4 class="hd">何为严选</h4>
//                         <div class="desc">
//                             网易原创生活类电商品牌，秉承网易一贯的严谨态度，我们深入世界各地，
//                             从源头全程严格把控商品生产环节，
//                             力求帮消费者甄选到优质的商品
//                         </div>
//                         <div class="yx-cp-m-followUs">
//                             <p class="cp-title">关注我们</p>
//                             <div class="yx-cp-followWayList">
//                                 <div class="j-yx-cp-lazyImg l"></div>
//                                 <div class="j-yx-cp-lazyImg c"></div>
//                                 <div class="j-yx-cp-lazyImg r"></div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="yx-cp-item">
//                     <div>
//                         <h4 class="hd">扫码下载严选APP</h4>
//                         <div class="qrcode">

//                         </div>
//                         <a href="javascript:;">下载领大额新人红包</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="footer_bottom">
//             <div class="yx-cp-row">
//                 <div class="yx-cp-m-siteEnsure">
//                     <div class="yx-cp-item">
//                         <div class="limg imgOne"></div>
//                         <p class="name">协和自营电商</p>
//                     </div>
//                     <div class="yx-cp-item">
//                         <div class="limg imgTwo"></div>
//                         <p class="name">30天无忧退换货</p>
//                     </div>
//                     <div class="yx-cp-item">
//                         <div class="limg imgThree"></div>
//                         <p class="name">满99元免邮费</p>
//                     </div>
//                     <div class="yx-cp-item">
//                         <div class="limg imgFour"></div>
//                         <p class="name">品质保证</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="yx-cp-hr"></div>

//             <div class="yx-cp-m-siteInfo">
//                 <div class="yx-cp-nav">
//                     <a href="javascript:;" class="yx-cp-text">关于我们</a>
//                     <b class="yx-cp-split">|</b>
//                     <a href="javascript:;" class="yx-cp-text">帮助中心</a>
//                     <b class="yx-cp-split">|</b>
//                     <a href="javascript:;" class="yx-cp-text">售后服务</a>
//                     <b class="yx-cp-split">|</b>
//                     <a href="javascript:;" class="yx-cp-text">配送与验收</a>
//                     <b class="yx-cp-split">|</b>
//                     <a href="javascript:;" class="yx-cp-text">商务合作</a>
//                     <b class="yx-cp-split">|</b>
//                     <a href="javascript:;" class="yx-cp-text">企业采购</a>
//                     <b class="yx-cp-split">|</b>
//                     <a href="javascript:;" class="yx-cp-text">开放平台</a>
//                     <b class="yx-cp-split">|</b>
//                     <a href="javascript:;" class="yx-cp-text">搜索推荐</a>
//                     <b class="yx-cp-split">|</b>
//                     <a href="javascript:;" class="yx-cp-text">友情链接</a>
//                     <b class="yx-cp-split">|</b>
//                     <a href="javascript:;" class="yx-cp-text">廉正举报</a>
//                 </div>
//                 <div class="yx-cp-copyright">
//                     <a href="javascript:;">食品经营许可证：JY13301080111719</a>
//                     <a href="javascript:;">出版物经营许可证：新出发滨字第0132号</a>
//                     <span class="span">妙得ICP证号：ICP 证浙B2-20160106</span>
//                     <a href="javascript:;">浙杭食药监械经营备20171029号</a>
//                     <a href="javascript:;">营业执照</a>
//                     <span>网易公司版权所有 © 1997-2021</span>
//                 </div>
//                 <div class="yx-cp-copyright">
//                     <a href="javascript:;">无线电发射设备销售备案：42202011096855</a>
//                     <a href="javascript:;">（浙杭）网械企备字[2019]第00119号</a>
//                     <span class="span">（粤）网械平台备字（2019）第00004号</span>
//                     <span class="span">（粤）-非经营性-2016-0023</span>
//                     <a href="javascript:;">进口冷链食品管理承诺书</a>
//                 </div>
//                 <div class="yx-cp-copyright">
//                     <a href="javascript:;">食品经营许可证：JY14207050007694</a>
//                     <span class="span">浙江省网络食品销售第三方平台提供者备案：浙网食A33010009</span>
//                     <a href="javascript:;">单用途商业预付卡备案证：330100AAC0024</a>
//                     <a href="javascript:;" class="icon">
//                         <img src="../../img/86f32b668af6e537389a77480fb5c74d.gif" alt="">
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
//     `
let str = '<div class="footer">'+
'    <div class="yx-cp-m-foot">'+
'        <div class="footer_top">'+
'            <div class="yx-cp-row">'+
'                <div class="yx-cp-item">'+
'                    <div>'+
'                        <h4 class="hd">客户服务</h4>'+
'                        <div class="box">'+
'                            <div class="box_item">'+
'                                <div class="icon icon_l"></div>'+
'                                <p class="name">在线客服</p>'+
'                            </div>'+
'                            <div class="box_item">'+
'                                <div class="icon icon_r"></div>'+
'                                <p class="name">在线客服</p>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'                <div class="yx-cp-item">'+
'                    <div>'+
'                        <h4 class="hd">何为严选</h4>'+
'                        <div class="desc">'+
'                            网易原创生活类电商品牌，秉承网易一贯的严谨态度，我们深入世界各地，'+
'                            从源头全程严格把控商品生产环节，'+
'                            力求帮消费者甄选到优质的商品'+
'                        </div>'+
'                        <div class="yx-cp-m-followUs">'+
'                            <p class="cp-title">关注我们</p>'+
'                            <div class="yx-cp-followWayList">'+
'                                <div class="j-yx-cp-lazyImg l"></div>'+
'                                <div class="j-yx-cp-lazyImg c"></div>'+
'                                <div class="j-yx-cp-lazyImg r"></div>'+
'                            </div>'+
'                        </div>'+
'                    </div>'+
'                </div>'+
'                <div class="yx-cp-item">'+
'                    <div>'+
'                        <h4 class="hd">扫码下载严选APP</h4>'+
'                        <div class="qrcode">'+
'                        </div>'+
'                        <a href="javascript:;">下载领大额新人红包</a>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'        </div>'+
'        <div class="footer_bottom">'+
'            <div class="yx-cp-row">'+
'                <div class="yx-cp-m-siteEnsure">'+
'                    <div class="yx-cp-item">'+
'                        <div class="limg imgOne"></div>'+
'                        <p class="name">协和自营电商</p>'+
'                    </div>'+
'                    <div class="yx-cp-item">'+
'                        <div class="limg imgTwo"></div>'+
'                        <p class="name">30天无忧退换货</p>'+
'                    </div>'+
'                    <div class="yx-cp-item">'+
'                        <div class="limg imgThree"></div>'+
'                        <p class="name">满99元免邮费</p>'+
'                    </div>'+
'                    <div class="yx-cp-item">'+
'                        <div class="limg imgFour"></div>'+
'                        <p class="name">品质保证</p>'+
'                    </div>'+
'                </div>'+
'            </div>'+
'            <div class="yx-cp-hr"></div>'+
'            <div class="yx-cp-m-siteInfo">'+
'                <div class="yx-cp-nav">'+
'                    <a href="javascript:;" class="yx-cp-text">关于我们</a>'+
'                    <b class="yx-cp-split">|</b>'+
'                    <a href="javascript:;" class="yx-cp-text">帮助中心</a>'+
'                    <b class="yx-cp-split">|</b>'+
'                    <a href="javascript:;" class="yx-cp-text">售后服务</a>'+
'                    <b class="yx-cp-split">|</b>'+
'                    <a href="javascript:;" class="yx-cp-text">配送与验收</a>'+
'                    <b class="yx-cp-split">|</b>'+
'                    <a href="javascript:;" class="yx-cp-text">商务合作</a>'+
'                    <b class="yx-cp-split">|</b>'+
'                    <a href="javascript:;" class="yx-cp-text">企业采购</a>'+
'                    <b class="yx-cp-split">|</b>'+
'                    <a href="javascript:;" class="yx-cp-text">开放平台</a>'+
'                    <b class="yx-cp-split">|</b>'+
'                    <a href="javascript:;" class="yx-cp-text">搜索推荐</a>'+
'                    <b class="yx-cp-split">|</b>'+
'                    <a href="javascript:;" class="yx-cp-text">友情链接</a>'+
'                    <b class="yx-cp-split">|</b>'+
'                    <a href="javascript:;" class="yx-cp-text">廉正举报</a>'+
'                </div>'+
'                <div class="yx-cp-copyright">'+
'                    <a href="javascript:;">食品经营许可证：JY13301080111719</a>'+
'                    <a href="javascript:;">出版物经营许可证：新出发滨字第0132号</a>'+
'                    <span class="span">妙得ICP证号：ICP 证浙B2-20160106</span>'+
'                    <a href="javascript:;">浙杭食药监械经营备20171029号</a>'+
'                    <a href="javascript:;">营业执照</a>'+
'                    <span>网易公司版权所有 © 1997-2021</span>'+
'                </div>'+
'                <div class="yx-cp-copyright">'+
'                    <a href="javascript:;">无线电发射设备销售备案：42202011096855</a>'+
'                    <a href="javascript:;">（浙杭）网械企备字[2019]第00119号</a>'+
'                    <span class="span">（粤）网械平台备字（2019）第00004号</span>'+
'                    <span class="span">（粤）-非经营性-2016-0023</span>'+
'                    <a href="javascript:;">进口冷链食品管理承诺书</a>'+
'                </div>'+
'                <div class="yx-cp-copyright">'+
'                    <a href="javascript:;">食品经营许可证：JY14207050007694</a>'+
'                    <span class="span">浙江省网络食品销售第三方平台提供者备案：浙网食A33010009</span>'+
'                    <a href="javascript:;">单用途商业预付卡备案证：330100AAC0024</a>'+
'                    <a href="javascript:;" class="icon">'+
'                        <img src="../../img/86f32b668af6e537389a77480fb5c74d.gif" alt="">'+
'                    </a>'+
'                </div>'+
'            </div>'+
'        </div>'+
'    </div>'+
'</div>';
    $('#pageFooter').html(str);
    
    $(window).scroll(function(e) {
        // console.log($(document).scrollTop(),'------')
        let top = $(document).scrollTop();
        if(top>=500){
            $('.m-indexSideBar').addClass('fixed');
            $('.rightBar').addClass('fixed');
            $('.rightBar .j-yx-fixedtoolGoTop').show();
        }else {
            $('.m-indexSideBar').removeClass('fixed');
            $('.rightBar').removeClass('fixed');
            $('.rightBar .j-yx-fixedtoolGoTop').hide();
        }
    })
    $('.rightBar .j-yx-fixedtoolGoTop').click(function(){
        var timer = null;
        timer = setInterval(function () {
            var toTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(toTop == 0){
                clearInterval(timer);
            }else {
                // 设置滚动速度
                var speed = Math.ceil(toTop/5);
                // 页面向上滚动
                // $(document).scrollTop() = $(document).body.scrollTop() = toTop - speed;
                document.documentElement.scrollTop=document.body.scrollTop=toTop-speed;
            }
        },50)
    })
})