seajs.config({
    base: TPL,
    paths:{
        _core: TPL + '/lib/core/',
        _service: TPL + '/Home/_service'
    },
    alias: {
        hy: '_core/hy.js?v=201601282344',
        url: '_core/url.js?v=201601282344',
        event: '_core/event.js?v=201601282344',
        route: '_core/route.js?v=201601282344',
        time: '_core/time.js?v=201601282344',
        cache: '_core/cache.js?v=201601282344',
        data: '_core/data.js?v=201601282344',
        msg: '/app/_base/msg.js?v=201602051911'
    }
});