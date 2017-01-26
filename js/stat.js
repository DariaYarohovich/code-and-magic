'use strict'

window.renderStatistics = function(ctx, names, times){
    /*shadow*/
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.fillRect(110, 20, 420, 270);
    /*cloud*/
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(100, 10, 420, 270);
    /*text*/
    ctx.font = '16px PT Mono';
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
     
    /*variables*/
    var max = 0;
    var maxColumnHeight = 150;
    var width = 40;
    var margin = 50;
    var coordX = 140;
    
    function getColumnHeight(time) {
        return time * maxColumnHeight / max;
    }
    
    function getColumnColor(name) {
        return name == "Вы" ? 'rgb(255, 0, 0)' : 'rgba(0, 0,' + ((Math.random()*5)*50).toFixed(0) + ' ,'+ (Math.random()).toFixed(2) + ')';
    }
    
    function columnDraw(time, name) {
        var mainHeight = 240;
          
        ctx.fillStyle = getColumnColor(name);
        ctx.fillRect(coordX, (mainHeight-getColumnHeight(time)), width, getColumnHeight(time));
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillText(name, coordX, (mainHeight + 20));
        ctx.fillText(time, coordX, ((mainHeight-getColumnHeight(time)) - 10));
        coordX +=(width + margin);
    }
    
    for( var i = 0; i < times.length; i++) {
        if (times[i] > max) {
            max = times[i];
        }
    }
    
    for( var i = 0; i < times.length; i++) {
        columnDraw(times[i].toFixed(0), names[i]);
    }
    
};




