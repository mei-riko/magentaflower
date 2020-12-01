import $ from 'jquery';

$(document).ready(() =>{
    // Yandex Map
    if( $(".map.map_yandex").length  > 0){
        ymaps.ready(function () {
            var myMap = new ymaps.Map('map', {
                center: [59.873338, 30.334284],
                zoom: 14,
                controls: ['fullscreenControl']
            });
            // Добавим панель маршрутизации.
            myMap.controls.add('routePanelControl');
            myMap.controls.add('zoomControl', {position: { top: 108, left: 'auto', right: 10},});
            var control = myMap.controls.get('routePanelControl');
            // Свойства самой панели
            control.options.set({
                maxWidth: '240',
                autofocus: false,
                showHeader: true,
                title: 'Как добраться?',
            });
            // Состояние панели в начале
            control.routePanel.state.set({
                // Тип маршрутизации.
                type: 'auto',
                fromEnabled: true,
                from: '',
                toEnabled: false,
                to: 'Санкт-Петербург, пр. Юрия Гагарина, 7'
            });
            // Опции панели для построения машрутов.
            control.routePanel.options.set({
                reverseGeocoding: true,
                allowSwitch: false,
                // Виды маршрутизации
                types: { auto: true, masstransit: true, pedestrian: true, bicycle: false, taxi: false }
            });
            // Получение объекта, описывающего построенные маршруты.
            var multiRoutePromise = control.routePanel.getRouteAsync();
            multiRoutePromise.then(function(multiRoute) {
                multiRoute.options.set({
                    // Цвет метки начальной точки.
                    wayPointStartIconFillColor: "#dd5287",
                    // Внешний вид линий (для всех маршрутов).
                    routeStrokeColor: "726d72",
                    routeStrokeStyle: "shortdot",
                    routeActiveStrokeColor: "dd5287",
                    routeActiveStrokeStyle: "solid",

                    // wayPointFinishIconLayout: "default#image",
                    // wayPointFinishIconImageHref: "icon/icon-map-marker.png",
                    // wayPointFinishIconImageSize: [30, 43],
                    // wayPointFinishIconImageOffset: [-15, -15],

                    boundsAutoApply: true
                }); 
                
                multiRoute.model.events.once("requestsuccess", function () {
                    var yandexWayPoint = multiRoute.getWayPoints().get(1);
                    // Создаем балун у метки второй точки.
                    ymaps.geoObject.addon.balloon.get(yandexWayPoint);
                    yandexWayPoint.options.set({
                        preset: "islands#grayStretchyIcon",
                        iconContentLayout: ymaps.templateLayoutFactory.createClass(
                            '<b><span style="color:#dd5287;">М</span>аджент<span style="color:#dd5287;">А</span></b>'
                        ),
                        balloonContentLayout: ymaps.templateLayoutFactory.createClass(
                            '<div style="width:180px;max-width:100%;margin:20px 0 20px 20px;text-align:center"><img src="../img/logo.svg"/> <hr style="margin: 10px 0;" /> {{ properties.address|raw }}</div>'
                        )
                    });
                });
            }, function (err) {
                console.log(err); 
            });
            
            // Центрование
            if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 991px)').matches ){
                myMap.setCenter([59.874304, 30.331867], 14, {
                    checkZoomRange: true,
                    duration: 500
                });
            } else{
                myMap.setCenter([59.875338, 30.331867], 14, {
                    checkZoomRange: true,
                    duration: 500
                });
            }
        });
    }
    
});