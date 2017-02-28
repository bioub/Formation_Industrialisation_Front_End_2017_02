import moment from 'moment';

export default class Horloge {
    constructor(element) {
        this.element = element;
    }
    start() {
        setInterval(() => {
            /*
            let now = new Date();
            let h = String(now.getHours()).padStart('0', 2);
            let m = String(now.getMinutes()).padStart('0', 2);;
            let s = String(now.getSeconds()).padStart('0', 2);;
            this.element.innerHTML = `${h}:${m}:${s}`;
            */
            this.element.innerHTML = moment().format('HH:mm:ss');
        }, 1000);
    }
}