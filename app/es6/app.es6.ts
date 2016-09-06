import {Component} from '@angular/core';

// declare var ES6Proxy : any;

@Component({
    selector: 'my-es6-test',
    template: `es6test`
})
export class MyEs6TestComponent {

    ngOnInit() {
        var p = new Point("abc1","def1");
        console.info(p);

        fetch('http://example.com', {}, p);

        const math = new Math();
        math.add(2, 4);

    //----------------proxy-----------------
    //     var fproxy = new Proxy(function(x, y) {
    //         return x + y;
    //     }, {});

    }
}

class Point {
    x:string;
    y:string;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

function fetch(url, {
        body = '',
        method = 'GET',
        headers = {}
    },p)
{

    let map = new Map();
    map.set("z","张三");
    let a = map.get("z");
    console.log(method + " " + p.x + " " + a);
}

class Math {
    @log
    add(a, b) {
        return a + b;
    }
}
function log(target, name, descriptor) {
    var oldValue = descriptor.value;

    descriptor.value = function() {
        console.log(`Calling "${name}" with`, arguments);
        return oldValue.apply(null, arguments);
    };

    return descriptor;
}




