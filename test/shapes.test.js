class Triangle {
    constructor (color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render () {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      
        <text x="145" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    };

};

class Circle {
    constructor (color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render () {
        return `<svg height="300" width="300">
        <circle cx="50" cy="50" r="40" fill="${this.color}" />
        <text x="145" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    };

};

class Square {
    constructor (color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render () {
        return `<svg width="300" height="300">
        <rect width="300" height="100" fill="${this.color}"/>
        <text x="145" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>`
    };

};


module.exports = {Triangle, Circle, Square};

