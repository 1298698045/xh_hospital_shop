if($('#total-container').length>0){
    $('#total-container').append(`
    <div class="main-content">
      <div class="left-logo">
          协和商城
      </div>
      <div class="mi-search">
          <input type="text" placeholder="搜索 商品/店铺/品牌">
          <span>搜索</span>
      </div>
    </div>`)
    $(window).scroll(function(){
        var scrollTop = scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>1000){
            $('#total-container').addClass('show')
        }else{
            $('#total-container').removeClass('show')
        }
    })
}

if($('#leftnav-container').length>0){
    $('#leftnav-container').append(`
        <ul>
            <li class="red">导航</li>
            <li><a href="#a1">美丽人生</a></li>
            <li><a href="#a2">美丽人生</a></li>
            <li><a href="#a3">美丽人生</a></li>
            <li><a href="#a4">美丽人生</a></li>
            <li><a href="#a5">美丽人生</a></li>
            <li><a href="#a6">美丽人生</a></li>
            <li><a href="#a7">美丽人生</a></li>
            <li><a href="#a8">猜你喜欢</a></li>
            <li onclick="totop()">
                <Icon type="up"/>
                <span>顶部</span>
            </li>
        </ul>`)
    var interval
    $(window).scroll(function(){
        var scrollTop = scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>1000){
            $('#leftnav-container').addClass('show')
        }else{
            $('#leftnav-container').removeClass('show')
        }
        if(scrollTop == 0){
            clearInterval(interval)
        }
    })
    function totop(){
        if(document.documentElement.scrollTop>0){
            interval = setInterval(function(){
                document.documentElement.scrollTop-=50
            },10)
        }
    }
}
if($('#site-nav').length>0){
    $('#site-nav').append(`
    <div class="container">
    <div class="topbar-nav">
        <a href="/index.html">首页</a>
    </div>
    <div class="topbar-cart">
        <div class="topbar-cart-content">
        <a href="/page/cart/index.html"  target="_blank">购物车</a>            
            <span>(0)</span>
        </div>
        <div class="topbar-cart-msgempty">
            购物车中还没有商品，赶紧选购吧！
        </div>
    </div>
    <div class="topbar-info" id="login">
        <a href="/page/login/login.html"  target="_blank">登录/注册</a>
    </div>
    <div class="topbar-info" style="margin-right:10px">
        <a href="/page/user/index.html" target="_blank">个人中心</a>
    </div>
  </div>
    `)
}
if($('.headsearch').length>0){
    $('.headsearch').append(`
    <div id="header-search">
                <div class="left-logo">
                    <a href="../../index.html">
                        <img src="https://img30.360buyimg.com/popshop/jfs/t28594/290/259029626/10859/d32a666c/5bed1cbfN337673b1.jpg" width="240" />
                    </a>
                </div>
                <div class="head-sech-content">
                    <div class="search-input">
                        <input type="text" placeholder="搜索 商品/品牌/店铺">
                    </div>
                    <div class="search-text">搜 索</div>
                </div>
            </div>
    `)
}
if($('#cainixihuan').length>0){
    $('#cainixihuan').append(`<div class="wonderful"> 
    <div class="wonderful-line"></div>
    <div class="wonderful-text">猜你喜欢</div>
</div>
  <div class="homelist-template2">
      <div class="homelist2">
          <div class="homelist-body">
              <div class="homelist-body-right">
                  <ul>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                  </ul>
                  <ul>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                  </ul>
                  <ul>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                      <li class="homelist-item">
                          <div class="homelist-item-img">
                              <img src="https://gw.alicdn.com/bao/uploaded/i1/1964144719/O1CN01hu0vx71kjLgwRCoNZ_!!0-item_pic.jpg" alt="" />
                          </div>
                          <div class="homelist-item-title">自然堂乳液水润保湿柔肤乳补水保湿乳液正品纯粹滋润乳液专柜成品</div>
                          <div class="homelist-item-price">￥ 27</div>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
  <div class="tm-end"></div>
  `)
}
