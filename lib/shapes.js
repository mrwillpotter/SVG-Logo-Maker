class Triangle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
      
        <text x="150" y="150" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    };

};

class Circle {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" fill="${this.color}" />
      
        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>`
    };

};

class Square {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    render() {
        return `<svg height="300px" width="300px" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="200" height="200" rx="0" fill="${this.color}" strokewidth="0"></rect>
                <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    };

};


module.exports = { Triangle, Circle, Square };


